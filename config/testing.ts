import { IEnvConfig } from "./types";

const testConfig: IEnvConfig = {
  app: {
    host: process.env.TEST_APP_HOST,
    port: parseInt(<string>process.env.TEST_APP_PORT, 10) || undefined,
  },
  secrets: {
    token: process.env.TEST_TOKEN_SECRET,
    tokenExp: process.env.TEST_TOKEN_EXP,
  },
  database: {
    host: process.env.TEST_DB_HOST,
    port: parseInt(<string>process.env.TEST_DB_PORT, 10) || undefined,
    name: process.env.TEST_DB_NAME,
  },
};

export default testConfig;
