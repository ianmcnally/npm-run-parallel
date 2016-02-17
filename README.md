Run npm tasks in parallel and exit when they are all done.

## Usage

From the command line, or an npm script:

`npm-run-parallel <npm scripts>`

So, if I want to run `npm install` and `npm test` in parallel (a contrived example, I know!):

`npm-run-parallel install test`

The process will complete when both `npm install` and `npm test` finish.

_Note: you can run custom npm scripts, too. Just like you would `install` or `test` above._

## Local development

- `npm run watch` - Compile source code, and watch for changes

- `npm run lint` - Lints source code (eslint)

- `npm run test:watch` - Run tests and watch for file changes

### Other commands

- `npm run build` - Compiles source code (also used in `prepublish`)

- `npm run test` - Run unit tests once

- `npm run start --` - Emulates the cli interface (_note: pass it task arguments. Useful for manual testing._)

