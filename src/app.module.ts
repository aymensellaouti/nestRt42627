import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstModule } from './first/first.module';
import { LoggerDevService } from './first/first.service';
import { findOccurence } from './lib/helper';
import { LoggerService } from './first/logger.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    FirstModule,
  //   TypeOrmModule.forRoot({ 
  //     type: 'mysql', 
  //     host: 'localhost', 
  //     port: 3306, 
  //     username: 'root', 
  //     password: '', 
  //     database: 'sartex',
  //     // La gestion des entités je la délégue lel module mta3ha 
  //     autoLoadEntities: true, 
  //     synchronize: true, 
  //     logging: true
  //   }),  
  ],
  controllers: [AppController],
  providers: [
    LoggerService,
 
  ],
})
export class AppModule {}
