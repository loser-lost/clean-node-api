import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service.js';
import { ProjectsController } from './projects.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity.js';
import { ProjectsWhitUseCaseController } from './projects-whit-use-case.controller.js';
import { CreateProjectUseCase } from './use-cases/create-project.use-case.js';
import { FindAllProjectUseCase } from './use-cases/find-all-project.use-case.js';
import { StartProjectUseCase } from './use-cases/start-project-use-case.js';

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
  providers: [ProjectsService, CreateProjectUseCase, FindAllProjectUseCase, StartProjectUseCase],
})
export class ProjectsModule { }
