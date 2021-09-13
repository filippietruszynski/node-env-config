import { IEnvConfig, IProcessEnv } from "./types";

const stageConfig = (env: IProcessEnv): IEnvConfig => {
  return {
    app: {
      host: env.STAGE_APP_HOST,
      port: parseInt(<string>env.STAGE_APP_PORT, 10) || undefined,
    },
    database: {
      host: env.STAGE_DB_HOST,
      port: parseInt(<string>env.STAGE_DB_PORT, 10) || undefined,
      name: env.STAGE_DB_NAME,
    },
    secrets: {
      token: env.STAGE_TOKEN_SECRET,
      tokenExp: env.STAGE_TOKEN_EXP,
    },
  };
};

export default stageConfig;
