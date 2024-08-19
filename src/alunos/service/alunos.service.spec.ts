import { Test, TestingModule } from '@nestjs/testing';
import { AlunosService } from './alunos.service';

const data = [{
    nome: 'tati',
    endereco: 'Rua Teste',
    telefone: '999999999',
    email: 'tati@ex.com',
    anoNascimento: 2000,
}]
describe('Teste cadastrar aluno', () => {

})




describe('AlunosService', () => {
  let service: AlunosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlunosService],
    }).compile();

    service = module.get<AlunosService>(AlunosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
