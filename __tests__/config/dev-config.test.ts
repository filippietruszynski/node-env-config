"use strict";

import devConfig from "../../config/dev-config";

import { IProcessEnv } from "../../config/types";

const correctEnv: IProcessEnv = {
  DEV_APP_HOST: "app host",
  DEV_APP_PORT: "5937",
  DEV_DB_HOST: "db host",
  DEV_DB_PORT: "7145",
  DEV_DB_NAME: "db name",
  DEV_TOKEN_SECRET: "token secret",
  DEV_TOKEN_EXP: "token expiration",
};

const undefinedEnv: IProcessEnv = {};

const isString = (value: any): boolean =>
  typeof value === "string" || value instanceof String;

describe("devConfig", () => {
  test("Returns undefined values for undefined env", () => {
    for (const values of Object.values(devConfig(undefinedEnv))) {
      for (const value of Object.values(values)) {
        expect(value).toBeUndefined();
      }
    }
  });
});
