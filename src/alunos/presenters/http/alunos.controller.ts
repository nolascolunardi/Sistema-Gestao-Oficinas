import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AlunosService } from '../../application/alunos.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import {MatricularAlunoDto} from "./dto/matricular-aluno.dto";

@Controller('alunos')
export class AlunosController {
  constructor(private readonly alunoService: AlunosService) {}

  @Post()
  cadastrar(@Body() createAlunoDto: CreateAlunoDto) {
    try {
        return this.alunoService.criar(createAlunoDto);
    } catch (error) {
        return error;
    }
  }

  @Get()
  listar() {
    return this.alunoService.listar();
  }

  @Post('/matricular')
  matricular(@Body() matricularAlunoDto: MatricularAlunoDto) {
      try {
          return this.alunoService.matricular(matricularAlunoDto);
      } catch (error) {
          return error;
      }
  }
}
