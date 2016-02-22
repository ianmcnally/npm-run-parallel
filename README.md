Run npm tasks in parallel and exit when they are all done.

![Build Status](https://travis-ci.org/ianmcnally/npm-run-parallel.svg?branch=master)

## Installation

Locally (recommended, especially with npm scripts):

`npm install npm-run-parallel`

Globally, as a CLI:

`npm install -g npm-run-parallel`

## Usage

From the command line, or an npm script:

`npm-run-parallel <npm scripts>`

So, if I want to run `npm install` and `npm test` in parallel (a contrived example, I know!):

`npm-run-parallel install test`

The process will complete when both `npm install` and `npm test` finish.

_Note: you can run custom npm scripts, too. Just like you would `install` or `test` above._

## Why?

On a given project, there are likely some long or expensive npm scripts, like asset compilation or multi-directory dependency installs. It's faster to do these in parallel.

A common way to run any shell command (which an npm script is) is the `&` operator, which creates a subprocess. This subprocess runs separately, so the original process can never tell how or when the subprocess ended. In a similar vein, the `|` operator can pipe the output of one command to another. This can feel like _streaming_, but passing the output of one npm script to another is both a hack and prone to erroring out.

Some build tools, like gulp, accomplish parallel commands (a.k.a. tasks) with streaming libraries. The recent trend towards npm scripts from these walled-garden tools necessitated emulating that functionality. So `npm-run-parallel` all the tasks!

## Contributing

See [CONTRIBUTING.md](https://github.com/ianmcnally/npm-run-parallel/blob/master/CONTRIBUTING.md) for the code of conduct.

### Local development

- `npm run watch` - Compile source code, and watch for changes

- `npm run lint` - Lints source code (eslint)

- `npm run test:watch` - Run tests and watch for file changes

#### Other commands

- `npm run build` - Compiles source code (also used in `prepublish`)

- `npm run test` - Run unit tests once

- `npm run start --` - Emulates the cli interface (_note: pass it task arguments. Useful for manual testing._)

