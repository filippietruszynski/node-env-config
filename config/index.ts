import devConfig from "./development";
import testConfig from "./testing";
import stageConfig from "./staging";
import prodConfig from "./production";

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
