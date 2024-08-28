import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CursosService } from '../../application/cursos.service';
import { CreateCursoDto } from './dto/create-curso.dto';

@Controller('cursos')
export class CursosController {
  constructor(private readonly cursosService: CursosService) {}

  @Post()
  criar(@Body() createCursoDto: CreateCursoDto) {
    return this.cursosService.criarCursos(createCursoDto);
  }

  @Get()
  listar() {
    return this.cursosService.listarCursos();
  }
}
