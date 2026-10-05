import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstModule } from './first/first.module';
import { LoggerDevService } from './first/first.service';
import { findOccurence } from './lib/helper';
import { LoggerService } from './first/logger.service';

@Module({
  imports: [FirstModule],
  controllers: [AppController],
  providers: [
    LoggerService,
 
  ],
})
export class AppModule {}
