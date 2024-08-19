import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AlunosService } from '../service/alunos.service';
import { CreateAlunoDto } from '../dto/create-aluno.dto';

@Controller('alunos')
export class AlunosController {
  constructor(private readonly alunosService: AlunosService) {}

  @Post()
  create(@Body() createAlunoDto: CreateAlunoDto) {
    console.log('controller', createAlunoDto);
    return this.alunosService.create(createAlunoDto);
  }
}
