import { Injectable } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api';
import { Configuration, OpenAIApi } from 'openai';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class TelegramService {
  private bot: any;

  constructor(private readonly configService: ConfigService) {
    const configuration = new Configuration({
      apiKey: this.configService.get('OPENAI_API_KEY'),
    });

    const openai = new OpenAIApi(configuration);
    // openai.apiKey = 'YOUR_API_KEY';
    console.log(this.configService.get('TELEGRAM_API_KEY'));
    this.bot = new TelegramBot(this.configService.get('TELEGRAM_API_KEY'), {
      polling: true,
    });
    this.bot.on('message', async (msg) => {
      let response = '';
      try {
        const res = await openai.createCompletion({
          model: 'text-davinci-003',
          prompt: `${msg.text}`,
          temperature: 0.7, // Higher values means the model will take more risks.
          max_tokens: 3000, // The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
          top_p: 1, // alternative to sampling with temperature, called nucleus sampling
          frequency_penalty: 0.5, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
          presence_penalty: 0, // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
        });
        console.log(msg);
        this.bot.sendMessage(msg.chat.id, res.data.choices[0].text);
      } catch (error) {
        response = error.message;
        this.bot.sendMessage(msg.chat.id, response);
      }
    });
  }
}
