import { Module} from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { AlunosController } from '../presenters/http/alunos.controller';
import {AlunoFactory} from "../domain/factory/aluno.factory";
import {InMemoryAlunosPersistenceModule} from "../infrastructure/persistence/in-memory/in-memory-persistence.module";
import {InMemoryCursosRepository} from "../../cursos/infrastructure/persistence/in-memory/cursos.repository";
import {CursoRepository} from "../../cursos/application/ports/cursos.repository";
import {CursosModule} from "../../cursos/application/cursos.module";
import {Curso} from "../../cursos/domain/curso";

@Module({
  controllers: [AlunosController],
  providers: [AlunosService,AlunoFactory],
  imports: [InMemoryAlunosPersistenceModule, CursosModule.repository],
})

export class AlunosModule {}
