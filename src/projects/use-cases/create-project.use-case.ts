import { InjectRepository } from "@nestjs/typeorm";
import { CreateProjectDto } from "../dto/create-project.dto.js";
import { Project, projectStatus } from "../entities/project.entity.js";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
//Um use case representa a intenção de um usuario
@Injectable()
export class CreateProjectUseCase {

    constructor(
        @InjectRepository(Project)
        private projectRepo: Repository<Project>) { }

    execute(input: CreateProjectDto) {
        const project = new Project(input)

        if (input.started_at) {
            project.status = projectStatus.Active
        }

        return this.projectRepo.save(project);
    }

}