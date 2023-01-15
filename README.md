# Telegram Bot with Nest.js

This is a sample Telegram bot built using Nest.js and the [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api) package, which allows you to interact with the Telegram Bot API. The bot uses OpenAI to generate responses to user inputs.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v10 or higher
- A Telegram bot token, which can be obtained from the [BotFather](https://t.me/BotFather)
- An OpenAI API key, which can be obtained from the [OpenAI website](https://openai.com/api/signup/)

### Installation

1. Clone the repository: `git clone https://github.com/Amalreji111/chatgpt-telegram-bot.git`
2. Install the dependencies: `npm install`
3. Create a `.env` file in the root directory and add the following environment variables:
    ```
    TELEGRAM_API_KEY=YOUR_BOT_TOKEN
    OPENAI_API_KEY=YOUR_API_KEY
    ```

### Running the bot

1. Start the bot: `nest start`
2. Start a conversation with your bot on Telegram

## Features

- Respond to user inputs using OpenAI

## Built With

- [Nest.js](https://nestjs.com/) - A progressive Node.js framework for building efficient and scalable server-side applications.
-
