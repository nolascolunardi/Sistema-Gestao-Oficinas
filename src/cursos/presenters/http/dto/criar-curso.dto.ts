import { IsNotEmpty, IsString } from 'class-validator';

export class CriarCursoDto {
  @IsNotEmpty()
  @IsString()
  titulo: string;

  @IsNotEmpty()
  @IsString()
  descricao: string;

  @IsNotEmpty()
  @IsString()
  categoria: string;

  @IsNotEmpty()
  @IsString()
  dataInicio: string;

  @IsNotEmpty()
  @IsString()
  dataFinal: string;
}
