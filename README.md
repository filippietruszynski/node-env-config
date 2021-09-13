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

## License

This project uses the following license: [MIT License](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt).
