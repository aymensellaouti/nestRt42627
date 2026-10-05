import { Module } from '@nestjs/common';
import { FirstController } from './first.controller';
import { LoggerDevService } from './first.service';
import { SayHelloService } from './say-hello.service';
import { envTest, findOccurence } from '../lib/helper';
import { LoggerService } from './logger.service';

@Module({
    controllers: [FirstController],
    providers: [{
        provide: LoggerService,
        useClass: envTest.type == 'dev' ? LoggerDevService : LoggerService
    }, SayHelloService, 
           // Ki to9oli n7ab 'OCC' rani bech nmedlek findOccurence
    {
      provide: 'OCC',
      useValue: () => 4
    }
    ],
    // Chneya 7achti
    imports: [],
    // Chneya n7ab npartagi m3a la3bed eli bech t'importini
    exports:[]
})
export class FirstModule {}
