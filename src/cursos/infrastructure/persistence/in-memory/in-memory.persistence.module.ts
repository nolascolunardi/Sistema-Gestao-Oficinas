import {Module} from "@nestjs/common";
import {CursoRepository} from "../../../application/ports/cursos.repository";
import {InMemoryCursosRepository} from "./cursos.repository";

@Module({
    providers: [
        {
            provide: CursoRepository,
            useClass: InMemoryCursosRepository
        }
    ],
    exports: [CursoRepository],
})

export class InMemoryPersistenceModule {}