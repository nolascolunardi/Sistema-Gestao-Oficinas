import {Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlunosModule } from './alunos/application/alunos.module';
import { CursosModule } from './cursos/cursos.module';

@Module({
  imports: [AlunosModule, CursosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static resgister( ) {
    return {
      module: AppModule,
      imports: [AlunosModule.comInfraestrutura()]
    }
  }
}
