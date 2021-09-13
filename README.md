# ⚙️ node-env-config

Extensible Node.js environment variables configuration using TypeScript.

## Prerequisites

Before you begin, ensure your project meets the following requirements:

- It uses [Node.js](https://nodejs.org) environment and has [@types/node](https://www.npmjs.com/package/@types/node) dependency installed.
- It has [typescript](https://www.npmjs.com/package/typescript) dependency installed.
- It has [dotenv](https://www.npmjs.com/package/dotenv) dependency installed.
- It supports [ES2018](https://262.ecma-international.org/9.0) or higher.

## Using

1. Copy `config/` directory into your project's `src/`.
2. Copy `.env` file into your project's root directory.
3. Assign desired values to the `.env` variables.
4. Import the `config` wherever you want in your project.
5. Extend or modify the `config` as it suits you!

❗Remember: When using [dotenv](https://www.npmjs.com/package/dotenv), changes to environment variables are available after restarting the application.

## Example

```
import config from "./config"

console.log(`Server listens on https://${config.app.host}:${config.app.port}/`);
```

## Template `.env`

```
# app hosts
DEV_APP_HOST=
TEST_APP_HOST=
STAGE_APP_HOST=
PROD_APP_HOST=

# app ports
DEV_APP_PORT=
TEST_APP_PORT=
STAGE_APP_PORT=
PROD_APP_PORT=

# db hosts
DEV_DB_HOST=
TEST_DB_HOST=
STAGE_DB_HOST=
PROD_DB_HOST=

# db ports
DEV_DB_PORT=
TEST_DB_PORT=
STAGE_DB_PORT=
PROD_DB_PORT=

# db name
DEV_DB_NAME=
TEST_DB_NAME=
STAGE_DB_NAME=
PROD_DB_NAME=

# token secrets
DEV_TOKEN_SECRET=
TEST_TOKEN_SECRET=
STAGE_TOKEN_SECRET=
PROD_TOKEN_SECRET=

# token expiration
DEV_TOKEN_EXP=
TEST_TOKEN_EXP=
STAGE_TOKEN_EXP=
PROD_TOKEN_EXP=
```

## License

This project uses the following license: [MIT License](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt).
