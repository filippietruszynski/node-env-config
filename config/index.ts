import devConfig from "./dev-config";
import testConfig from "./test-config";
import stageConfig from "./stage-config";
import prodConfig from "./prod-config";

import { IBaseConfig, IConfig, IEnvConfig, IProcessEnv } from "./types";

const processEnv: IProcessEnv = process.env;
const nodeEnv: string = processEnv.NODE_ENV || "development";

const baseConfig: IBaseConfig = {
  nodeEnv,
  isDev: nodeEnv === "development",
  isTest: nodeEnv === "testing",
  isStage: nodeEnv === "staging",
  isProd: nodeEnv === "production",
};

let envConfig: IEnvConfig;

switch (nodeEnv) {
  case "development":
    envConfig = devConfig(processEnv);
    break;
  case "testing":
    envConfig = testConfig(processEnv);
    break;
  case "staging":
    envConfig = stageConfig(processEnv);
    break;
  case "production":
    envConfig = prodConfig(processEnv);
    break;
  default:
    envConfig = devConfig(processEnv);
}

const config: IConfig = { ...baseConfig, ...envConfig };

export default config;
