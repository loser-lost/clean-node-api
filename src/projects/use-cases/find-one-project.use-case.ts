import { Inject, Injectable } from "@nestjs/common";
import type { IProjectrepository } from "../project.repository.js";

@Injectable()
export class FindOneProjectUseCase {

    constructor(
        @Inject('IProjectrepository')
        private readonly projectRepo: IProjectrepository,
    ) { }

    execute(input: string) {
        return this.projectRepo.findById(input)
    }

}