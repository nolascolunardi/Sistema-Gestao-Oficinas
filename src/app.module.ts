import { Module } from '@nestjs/common';
import {AlunosModule} from "./alunos/application/alunos.module";
import {CursosModule} from "./cursos/application/cursos.module";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";

@Module({
  imports: [AlunosModule, CursosModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
