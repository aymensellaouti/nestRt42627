/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';

import { FirstModule } from './first/first.module';

import { LoggerService } from './first/logger.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FirstMiddleware } from './middleware/first/first.middleware';
import { Section } from './first/section.model';

@Module({
  imports: [
    FirstModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'rt42526',
      // La gestion des entités je la délégue lel module mta3ha
      // Bara laouej 3al entities lokhrin fel featureModule
      autoLoadEntities: true,
      //entities: [Section],
      synchronize: true,
      logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [LoggerService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(FirstMiddleware).forRoutes('*');
  }
}
