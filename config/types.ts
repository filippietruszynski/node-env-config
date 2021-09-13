/* PROCESS */

export interface IProcessEnv {
  [key: string]: string | undefined;
}

/* CONFIG */

interface IApp {
  host?: string;
  port?: number;
}

interface ISecrets {
  token?: string;
  tokenExp?: string;
}

interface IDatabase {
  host?: string;
  port?: number;
  name?: string;
}

export interface IBaseConfig {
  nodeEnv: string;
  isDev: boolean;
  isTest: boolean;
  isStage: boolean;
  isProd: boolean;
}

export interface IEnvConfig {
  app: IApp;
  secrets: ISecrets;
  database: IDatabase;
}

export interface IConfig extends IBaseConfig, IEnvConfig {}
