
import { StartProjectDto } from "../dto/start-project.dto copy.js";
import { Inject, Injectable } from "@nestjs/common";
import type { IProjectrepository } from "../project.repository.js";

@Injectable()
export class StartProjectUseCase {
    constructor(
        @Inject('IProjectrepository')
        private readonly projectRepo: IProjectrepository,
    ) { }

    async execute(id: string, input: StartProjectDto) {
        const project = await this.projectRepo.findById(id)
        project.start(input.started_at);// da erro pelo null
        await this.projectRepo.update(project)
        return project;
    }


}