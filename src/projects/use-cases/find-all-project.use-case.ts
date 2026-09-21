import { Inject, Injectable } from "@nestjs/common";
import type { IProjectrepository } from "../project.repository.js";

@Injectable()
export class FindAllProjectUseCase {

    constructor(
        @Inject('IProjectrepository')
        private readonly projectRepo: IProjectrepository,
    ) { }

    execute() {
        return this.projectRepo.findAll();
    }

}