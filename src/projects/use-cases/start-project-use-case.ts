import { InjectRepository } from "@nestjs/typeorm";
import { Project, projectStatus } from "../entities/project.entity.js";
import { Repository } from "typeorm";
import { StartProjectDto } from "../dto/start-project.dto copy.js";

export class StartProjectUseCase {
    constructor(
        @InjectRepository(Project)
        private projectRepo: Repository<Project>) { }

    async execute(id: string, input: StartProjectDto) {
        const project = await this.projectRepo.findOneOrFail({ where: { id } })


        if (project.status === projectStatus.Active) {
            throw new Error('Projeto ja ativo')
        }

        if (project.status === projectStatus.Completado) {
            throw new Error('Projeto ja completo')
        }

        if (project.status === projectStatus.Cancelado) {
            throw new Error('Projeto ja Cancelado')
        }

        project.started_at = input.started_at
        project.status = projectStatus.Active
        return this.projectRepo.save(project)
    }


}