import { Repository } from "typeorm";
import { Project } from "./entities/project.entity.js";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

export interface IProjectrepository {
    create(project: Project): Promise<void>;
    update(project: Project): Promise<void>;
    findAll(): Promise<Project[]>
    findById(id: string): Promise<Project>;
}
@Injectable()
export class ProjectTypeOrmRepository implements IProjectrepository {

    constructor(
        @InjectRepository(Project)
        private typeOrmRepo: Repository<Project>) {

    }
    async create(project: Project): Promise<void> {
        await this.typeOrmRepo.save(project)
    }
    async update(project: Project): Promise<void> {
        await this.typeOrmRepo.update(project.id, project)
    }
    findAll(): Promise<Project[]> {
        return this.typeOrmRepo.find();
    }
    findById(id: string): Promise<Project> {
        return this.typeOrmRepo.findOneOrFail({ where: { id } })
    }
}
// basicamente é um adaptador, pense nno DTO como uma porta, e IProjectrepository
// tambem, no entanto ele adapta para ser usado o TypeOrm de fora do usecase e
// da entidade