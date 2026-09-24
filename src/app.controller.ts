import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  @Get('hello')
  getHello(): string {
    return 'HELLO RT4 :D';
  }

  @Get()
  smile() {
    return {
      type: ':)',
      message: 'life is good',
    };
  }
}
