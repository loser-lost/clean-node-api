import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity.js';
import { ProjectsWhitUseCaseController } from './projects-whit-use-case.controller.js';
import { CreateProjectUseCase } from './use-cases/create-project.use-case.js';
import { FindAllProjectUseCase } from './use-cases/find-all-project.use-case.js';
import { StartProjectUseCase } from './use-cases/start-project-use-case.js';
import { FindOneProjectUseCase } from './use-cases/find-one-project.use-case.js';
import { ProjectTypeOrmRepository } from './project.repository.js';

@Module({
  imports: [
    TypeOrmModule.forFeature(([
      Project
    ]))
  ],
  controllers: [
    //OLD= ProjectsController
    ProjectsWhitUseCaseController

  ],
  providers: [
    CreateProjectUseCase,
    FindAllProjectUseCase,
    StartProjectUseCase,
    FindOneProjectUseCase,
    ProjectTypeOrmRepository,
    {
      provide: 'IProjectrepository',
      useExisting: ProjectTypeOrmRepository
    }
  ],
})
export class ProjectsModule { }
