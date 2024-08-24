import {IsNotEmpty, IsString} from "class-validator";

export class MatricularAlunoDto {
    @IsNotEmpty()
    @IsString()
    alunoRA: string;

    @IsNotEmpty()
    @IsString()
    cursoTurma: string;
}