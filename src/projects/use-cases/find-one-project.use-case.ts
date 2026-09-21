import { InjectRepository } from "@nestjs/typeorm";
import { CreateProjectDto } from "../dto/create-project.dto.js";
import { Project, projectStatus } from "../entities/project.entity.js";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class FindOneProjectUseCase {

    constructor(
        @InjectRepository(Project)
        private projectRepo: Repository<Project>) { }

    execute(input: CreateProjectDto) {
        return this.projectRepo.findOneOrFail({
            // where: { id: input.id },
        });
    }

}