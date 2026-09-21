import { InjectRepository } from "@nestjs/typeorm";
import { CreateProjectDto } from "../dto/create-project.dto.js";
import { Project, projectStatus } from "../entities/project.entity.js";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class FindAllProjectUseCase {

    constructor(
        @InjectRepository(Project)
        private projectRepo: Repository<Project>) { }

    execute() {
        return this.projectRepo.find();
    }

}