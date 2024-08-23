import { Aluno } from '../../domain/aluno';

export abstract class AlunoRepository {
    abstract salvar(aluno: Aluno): Aluno;
    abstract listar(): Aluno[];
    abstract buscarPorEmail(email: string): Aluno;
}
