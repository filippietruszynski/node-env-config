import { IEnvConfig, IProcessEnv } from "./types";

const testConfig = (env: IProcessEnv): IEnvConfig => {
  return {
    app: {
      host: env.TEST_APP_HOST,
      port: parseInt(<string>env.TEST_APP_PORT, 10) || undefined,
    },
    secrets: {
      token: env.TEST_TOKEN_SECRET,
      tokenExp: env.TEST_TOKEN_EXP,
    },
    database: {
      host: env.TEST_DB_HOST,
      port: parseInt(<string>env.TEST_DB_PORT, 10) || undefined,
      name: env.TEST_DB_NAME,
    },
  };
};

export default testConfig;
