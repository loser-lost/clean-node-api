import { CreateProjectDto } from "../dto/create-project.dto.js";
import { Project } from "../entities/project.entity.js";
import { Inject, Injectable } from "@nestjs/common";
import type { IProjectrepository } from "../project.repository.js";


//Um use case representa a intenção de um usuario
@Injectable()
export class CreateProjectUseCase {

    constructor(
        @Inject('IProjectrepository')
        private readonly projectRepo: IProjectrepository,
    ) { }

    async execute(input: CreateProjectDto) {
        const project = new Project(input)
        await this.projectRepo.create(project);
        return project;
    }

}