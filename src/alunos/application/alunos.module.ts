import { Module} from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { AlunosController } from '../presenters/http/alunos.controller';
import {AlunoFactory} from "../domain/factory/aluno.factory";
import {InMemoryPersistenceModule} from "../infrastructure/persistence/in-memory/in-memory-persistence.module";

@Module({
  controllers: [AlunosController],
  providers: [AlunosService,AlunoFactory],
  imports: [InMemoryPersistenceModule],
})

export class AlunosModule {
  static comInfraestrutura() {
    return {
      module: AlunosModule,
      imports: [InMemoryPersistenceModule],
    };
  }
}
