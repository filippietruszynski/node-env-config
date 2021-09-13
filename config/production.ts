import { IEnvConfig, IProcessEnv } from "./types";

const prodConfig = (env: IProcessEnv): IEnvConfig => {
  return {
    app: {
      host: env.PROD_APP_HOST,
      port: parseInt(<string>env.PROD_APP_PORT, 10) || undefined,
    },
    secrets: {
      token: env.PROD_TOKEN_SECRET,
      tokenExp: env.PROD_TOKEN_EXP,
    },
    database: {
      host: env.PROD_DB_HOST,
      port: parseInt(<string>env.PROD_DB_PORT, 10) || undefined,
      name: env.PROD_DB_NAME,
    },
  };
};

export default prodConfig;
