import { IEnvConfig, IProcessEnv } from "./types";

const devConfig = (env: IProcessEnv): IEnvConfig => {
  return {
    app: {
      host: env.DEV_APP_HOST,
      port: parseInt(<string>env.DEV_APP_PORT, 10) || undefined,
    },
    database: {
      host: env.DEV_DB_HOST,
      port: parseInt(<string>env.DEV_DB_PORT, 10) || undefined,
      name: env.DEV_DB_NAME,
    },
    secrets: {
      token: env.DEV_TOKEN_SECRET,
      tokenExp: env.DEV_TOKEN_EXP,
    },
  };
};

export default devConfig;
