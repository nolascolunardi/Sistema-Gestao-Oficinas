import { Module } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CursosController } from '../presenters/http/cursos.controller';
import {CursoFactory} from "../domain/factory/curso.factory";
import {InMemoryPersistenceModule} from "../infrastructure/persistence/in-memory/in-memory.persistence.module";

@Module({
  controllers: [CursosController],
  providers: [CursosService, CursoFactory],
  imports: [InMemoryPersistenceModule],
})
export class CursosModule {
  static comInfraestrutura() {
    return {
      module: CursosModule,
      imports: [InMemoryPersistenceModule],
    };
  }
}
