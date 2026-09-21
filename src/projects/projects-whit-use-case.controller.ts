import { Controller, Get, Post, Body, Param, Inject } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto.js';
import { CreateProjectUseCase } from './use-cases/create-project.use-case.js';
import { FindAllProjectUseCase } from './use-cases/find-all-project.use-case.js';
import { StartProjectDto } from './dto/start-project.dto copy.js';
import { StartProjectUseCase } from './use-cases/start-project-use-case.js';
import { FindOneProjectUseCase } from './use-cases/find-one-project.use-case.js';

// não tem regra de negocio
@Controller('projects')
export class ProjectsWhitUseCaseController {

  @Inject(CreateProjectUseCase)
  private readonly createProjectUseCase: CreateProjectUseCase;

  @Inject(FindAllProjectUseCase)
  private readonly findAllProjectUseCase: FindAllProjectUseCase;

  @Inject(StartProjectUseCase)
  private readonly startProjectUseCase: StartProjectUseCase;

  @Inject(FindOneProjectUseCase)
  private readonly findOneProjectUseCase: FindOneProjectUseCase;

  /*constructor(
    private readonly createProjectUseCase: CreateProjectUseCase,
    private readonly findAllProjectUseCase: FindAllProjectUseCase,
    private readonly startProjectUseCase: StartProjectUseCase,
    private readonly findOneProjectUseCase: FindOneProjectUseCase
  ) { }*/

  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.createProjectUseCase.execute(createProjectDto);
  }

  @Get()
  findAll() {
    return this.findAllProjectUseCase.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findOneProjectUseCase.execute(id);
  }

  @Post(':id/start')
  start(@Param('id') id: string, @Body() startProjectDto: StartProjectDto) {
    return this.startProjectUseCase.execute(id, startProjectDto)
  }

}
