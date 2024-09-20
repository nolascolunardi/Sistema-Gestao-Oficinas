import { Test, TestingModule } from '@nestjs/testing';
import { CursosController } from './cursos.controller';
import { CursosService } from '../../application/cursos.service';
import { CriarCursoDto } from './dto/criar-curso.dto';
import { Curso } from '../../domain/curso';
import { ForbiddenException } from '@nestjs/common';

let controller: CursosController;
let service: CursosService;

beforeEach(async () => {
  const module: TestingModule = await Test.createTestingModule({
    providers: [
      CursosController,
      {
        provide: CursosService,
        useValue: {
          criar: jest.fn(),
          listarTodos: jest.fn(),
        },
      },
    ],
  }).compile();

  controller = module.get<CursosController>(CursosController);
  service = module.get<CursosService>(CursosService);
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

describe('CursosController', () => {
  it('deve cadastrar um curso', () => {
    jest.spyOn(service, 'criar').mockReturnValue(mockCurso);
    expect(controller.criar(mockCursoDto)).toBe(mockCurso);
  });

  it('deve não cadastrar um curso', () => {
    jest.spyOn(service, 'criar').mockImplementation(() => {
      throw new ForbiddenException('Curso já cadastrado');
    });
    expect(() => controller.criar(mockCursoDto)).toThrow('Curso já cadastrado');
  });

  it('deve listar todos os cursos', () => {
    jest.spyOn(service, 'listarTodos').mockReturnValue([mockCurso]);
    expect(controller.listar()).toEqual([mockCurso]);
  });
});
