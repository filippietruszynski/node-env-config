import { IEnvConfig, IProcessEnv } from "./types";

const prodConfig = (env: IProcessEnv): IEnvConfig => {
  return {
    app: {
      host: env.PROD_APP_HOST,
      port: parseInt(<string>env.PROD_APP_PORT, 10) || undefined,
    },
    database: {
      host: env.PROD_DB_HOST,
      port: parseInt(<string>env.PROD_DB_PORT, 10) || undefined,
      name: env.PROD_DB_NAME,
    },
    secrets: {
      token: env.PROD_TOKEN_SECRET,
      tokenExp: env.PROD_TOKEN_EXP,
    },
  };
};

export default prodConfig;
