import { IEnvConfig } from "./types";

const stageConfig: IEnvConfig = {
  app: {
    host: process.env.STAGE_APP_HOST,
    port: parseInt(<string>process.env.STAGE_APP_PORT, 10) || undefined,
  },
  secrets: {
    token: process.env.STAGE_TOKEN_SECRET,
    tokenExp: process.env.STAGE_TOKEN_EXP,
  },
  database: {
    host: process.env.STAGE_DB_HOST,
    port: parseInt(<string>process.env.STAGE_DB_PORT, 10) || undefined,
    name: process.env.STAGE_DB_NAME,
  },
};

export default stageConfig;
