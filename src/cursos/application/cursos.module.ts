import { Module } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CursosController } from '../presenters/http/cursos.controller';
import {CursoFactory} from "../domain/factory/curso.factory";
import {
  InMemoryCursosPersistenceModule,
} from "../infrastructure/persistence/in-memory/in-memory.persistence.module";
import {Aluno} from "../../alunos/domain/aluno";

@Module({
  controllers: [CursosController],
  providers: [CursosService, CursoFactory],
  imports: [InMemoryCursosPersistenceModule, Aluno],
})
export class CursosModule {
  static repository = InMemoryCursosPersistenceModule;
}
