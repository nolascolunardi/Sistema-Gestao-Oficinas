import { Module } from '@nestjs/common';
import { AlunosService } from './service/alunos.service';
import { AlunosController } from './controller/alunos.controller';
import { AlunosRepository } from './repository/alunos.repository';

@Module({
  controllers: [AlunosController],
  providers: [AlunosService, AlunosRepository],
})
export class AlunosModule {}
