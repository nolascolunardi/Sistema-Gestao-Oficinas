import { Test, TestingModule } from '@nestjs/testing';
import { CursosService } from './cursos.service';
import { CursoRepository } from './ports/cursos.repository';
import { CursoFactory } from '../domain/factory/curso.factory';
import { CriarCursoDto } from '../presenters/http/dto/criar-curso.dto';
import { Curso } from '../domain/curso';

let service: CursosService;
let cursoRepository: CursoRepository;
let cursoFactory: CursoFactory;

beforeEach(async () => {
  const module: TestingModule = await Test.createTestingModule({
    providers: [
      CursosService,
      {
        provide: CursoRepository,
        useValue: {
          salvar: jest.fn(),
          listar: jest.fn().mockReturnValue([]),
          buscarPorTitulo: jest.fn(),
          matricularAluno: jest.fn(),
        },
      },
      {
        provide: CursoFactory,
        useValue: {
          criar: jest.fn(),
        },
      },
    ],
  }).compile();

  service = module.get<CursosService>(CursosService);
  cursoRepository = module.get<CursoRepository>(CursoRepository);
  cursoFactory = module.get<CursoFactory>(CursoFactory);
});

const mockCursoDto: CriarCursoDto = {
  titulo: 'Curso de Teste',
  descricao: 'Descrição do curso',
  categoria: 'Programação',
  dataInicio: '2024-01-01',
  dataFinal: '2024-02-01',
};

const mockCurso = new Curso(
  '1',
  mockCursoDto.titulo,
  mockCursoDto.descricao,
  mockCursoDto.categoria,
  ['Jackie'],
  [],
  mockCursoDto.dataInicio,
  mockCursoDto.dataFinal,
);

describe('Cursos Service', () => {
  it('deve criar e salvar um curso com sucesso', () => {
    jest.spyOn(cursoRepository, 'listar').mockReturnValue([]);
    jest.spyOn(cursoFactory, 'criar').mockReturnValue(mockCurso);
    jest.spyOn(cursoRepository, 'salvar').mockReturnValue(mockCurso);
    jest.spyOn(cursoRepository, 'buscarPorTitulo').mockReturnValue(null);

    const resultado = service.criar(mockCursoDto);
    expect(resultado).toEqual(mockCurso);
  });

  it('deve lançar um erro ao tentar criar um curso já existente', () => {
    jest.spyOn(cursoRepository, 'listar').mockReturnValue([mockCurso]);
    jest.spyOn(cursoRepository, 'buscarPorTitulo').mockReturnValue(mockCurso);
    expect(() => service.criar(mockCursoDto)).toThrowError(
      'Curso já cadastrado',
    );
  });

  it('deve listar os cursos com sucesso', () => {
    jest.spyOn(cursoRepository, 'listar').mockReturnValue([mockCurso]);

    const resultado = service.listarTodos();
    expect(resultado).toEqual([mockCurso]);
  });

  it('deve buscar um curso existente pelo titulo', () => {
    jest.spyOn(service, 'buscarPorTitulo').mockReturnValue(mockCurso);
    expect(service.buscarPorTitulo('titulo')).toEqual(mockCurso);
  });

  it('deve buscar um curso inexistente pelo titulo', () => {
    jest.spyOn(service, 'buscarPorTitulo').mockReturnValue(null);
    expect(service.buscarPorTitulo('titulo')).toEqual(null);
  });

  it('deve matricular um aluno em um curso com sucesso', async () => {
    jest.spyOn(cursoRepository, 'buscarPorTitulo').mockReturnValue(mockCurso);
    jest.spyOn(cursoRepository, 'matricularAluno').mockReturnValue(mockCurso);
    const resultado = await service.matricular('12314', mockCurso);
    expect(resultado).toEqual(mockCurso);
  });
});
