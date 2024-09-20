import { Controller, Get, Post, Body } from '@nestjs/common';
import { CursosService } from '../../application/cursos.service';
import { CriarCursoDto } from './dto/criar-curso.dto';

@Controller('cursos')
export class CursosController {
  constructor(private readonly cursosService: CursosService) {}

  @Post()
  criar(@Body() createCursoDto: CriarCursoDto) {
    return this.cursosService.criar(createCursoDto);
  }

  @Get()
  listar() {
    return this.cursosService.listarTodos();
  }
}
