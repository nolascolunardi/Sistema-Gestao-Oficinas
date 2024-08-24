import {Module} from "@nestjs/common";
import {AlunoRepository} from "../../../application/ports/alunos.repository";
import {InMemoryAlunosRepository} from "./alunos.repository";
import {AlunosData} from "./alunos.data";

@Module({
    providers: [
        {
            provide: AlunoRepository,
            useClass: InMemoryAlunosRepository
        }, AlunosData
    ],
    exports: [AlunoRepository],
})

export class InMemoryAlunosPersistenceModule {}