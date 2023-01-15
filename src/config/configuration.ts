export default () => ({
  database: {
    host: process.env.DB_HOST,
    dbport: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  APP: {
    app_port: process.env.PORT,
    app_env: process.env.NODE_ENV,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    TELEGRAM_API_KEY: process.env.TELEGRAM_API_KEY,
  },
});
