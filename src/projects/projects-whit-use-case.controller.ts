import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ProjectsService } from './projects.service.js';
import { CreateProjectDto } from './dto/create-project.dto.js';
import { UpdateProjectDto } from './dto/update-project.dto.js';
import { CreateProjectUseCase } from './use-cases/create-project.use-case.js';
import { FindAllProjectUseCase } from './use-cases/find-all-project.use-case.js';
import { StartProjectDto } from './dto/start-project.dto copy.js';
import { StartProjectUseCase } from './use-cases/start-project-use-case.js';
// não tem regra de negocio
@Controller('projects')
export class ProjectsWhitUseCaseController {
  constructor(
    private readonly createProjectUseCase: CreateProjectUseCase,
    private readonly findAllProjectUseCase: FindAllProjectUseCase,
    private readonly startProjectUseCase: StartProjectUseCase
  ) { }

  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.createProjectUseCase.execute(createProjectDto);
  }

  @Get()
  findAll() {
    return this.findAllProjectUseCase.execute();
  }

  @Post(':id/start')
  start(@Param('id') id: string, @Body() startProjectDto: StartProjectDto) {
    return this.startProjectUseCase.execute(id, startProjectDto)
  }

}
