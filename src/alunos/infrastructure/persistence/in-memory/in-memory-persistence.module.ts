import {Module} from "@nestjs/common";
import {AlunoRepository} from "../../../application/ports/alunos.repository";
import {InMemoryAlunosRepository} from "./alunos.repository";

@Module({
    providers: [
        {
            provide: AlunoRepository,
            useClass: InMemoryAlunosRepository
        }
    ],
    exports: [AlunoRepository],
})

export class InMemoryPersistenceModule {
}