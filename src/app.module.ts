import { Module } from '@nestjs/common';
import { TelegramController } from './app.controller';
import { TelegramService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    ConfigModule,
  ],
  controllers: [TelegramController],
  providers: [TelegramService],
})
export class AppModule {}
