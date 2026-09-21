import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto.js';
import { UpdateProjectDto } from './dto/update-project.dto.js';
import { Repository } from 'typeorm';
import { Project, projectStatus } from './entities/project.entity.js';
import { InjectRepository } from '@nestjs/typeorm';
import { error } from 'console';

@Injectable()
export class ProjectsService {

  constructor(
    @InjectRepository(Project)
    private projectRepo: Repository<Project>) { }

  create(createProjectDto: CreateProjectDto) {
    const project = new Project(createProjectDto)

    if (createProjectDto.started_at) {
      project.status = projectStatus.Active
    }

    return this.projectRepo.save(project);
  }

  findAll() {
    return this.projectRepo.find();
  }

  findOne(id: string) {
    return this.projectRepo.findOneOrFail({ where: { id } });
  }

  async update(id: string, updateProjectDto: UpdateProjectDto) {

    const project = await this.projectRepo.findOneOrFail({ where: { id } })

    updateProjectDto.name && (project.name = updateProjectDto.name);
    updateProjectDto.description && (project.description = updateProjectDto.description);

    if (updateProjectDto.started_at) {
      if (project.status === projectStatus.Active) {
        throw new Error('Projeto ja ativo')
      }

      if (project.status === projectStatus.Completado) {
        throw new Error('Projeto ja completo')
      }

      if (project.status === projectStatus.Cancelado) {
        throw new Error('Projeto ja Cancelado')
      }

      project.started_at = updateProjectDto.started_at
      project.status = projectStatus.Active
    }

    if (updateProjectDto.cancelled_at) {

      if (project.status === projectStatus.Completado) {
        throw new Error('Projeto ja completo')
      }

      if (project.status === projectStatus.Cancelado) {
        throw new Error('Projeto ja Cancelado')
      }

      /* if (updateProjectDto.cancelled_at < project.started_at) {
         throw new Error('data menor que a de inicio')
       }*/

      project.cancelled_at = updateProjectDto.cancelled_at
      project.status = projectStatus.Cancelado
    }

    if (updateProjectDto.finished_at) {

      if (project.status === projectStatus.Completado) {
        throw new Error('Projeto ja completo')
      }

      if (project.status === projectStatus.Cancelado) {
        throw new Error('Projeto ja Cancelado')
      }

      /* if (updateProjectDto.finished_at < project.started_at) {
         throw new Error('data menor que a de inicio')
       }*/

      project.finished_at = updateProjectDto.finished_at
      project.status = projectStatus.Completado
    }

    return this.projectRepo.save(project)

  }

  remove(id: string) {
    return this.projectRepo.delete(id);
  }
}
