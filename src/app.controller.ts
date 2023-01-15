import { Controller, Get } from '@nestjs/common';
import { TelegramService } from './app.service';

@Controller()
export class TelegramController {
  constructor(private readonly TelegramService: TelegramService) {}
  @Get()
  helloWorld(){
    return 'Hello Boss!';
  }
}
