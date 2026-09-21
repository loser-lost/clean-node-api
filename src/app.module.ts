import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProjectsModule } from './projects/projects.module.js';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Project } from './projects/entities/project.entity.js';


export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (): TypeOrmModuleOptions => ({
        type: 'better-sqlite3',
        database: ':memory:',
        entities: [Project],
        synchronize: true, // Development only
      }),
    }),
    ProjectsModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
