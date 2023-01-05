declare global {
  namespace NodeJs {
    interface ProcessEnv {
      APP_PORT: string;
      NODE_ENV: string;

      API_TOKEN: string;
      CHATGPT_URL: string;
    }
  }
}
