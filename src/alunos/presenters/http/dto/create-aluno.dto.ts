import { IsEmail, IsNotEmpty, IsNumber, IsString, Max } from 'class-validator';

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

export class CreateAlunoDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  RA: string;

  @IsNotEmpty()
  @IsString()
  endereco: string;

  @IsNotEmpty()
  @IsString()
  telefone: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsNumber()
  @Max(currentYear - 16)
  anoNascimento: number;
}
