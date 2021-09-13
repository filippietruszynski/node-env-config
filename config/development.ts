import { IEnvConfig } from "./types";

const devConfig: IEnvConfig = {
  app: {
    host: process.env.DEV_APP_HOST,
    port: parseInt(<string>process.env.DEV_APP_PORT, 10) || undefined,
  },
  secrets: {
    token: process.env.DEV_TOKEN_SECRET,
    tokenExp: process.env.DEV_TOKEN_EXP,
  },
  database: {
    host: process.env.DEV_DB_HOST,
    port: parseInt(<string>process.env.DEV_DB_PORT, 10) || undefined,
    name: process.env.DEV_DB_NAME,
  },
};

export default devConfig;
