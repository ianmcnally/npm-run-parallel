import meow from 'meow'
import { runTasks } from './run'

const cli = meow(`
  Usage
    $ npm-run-parallel <tasks>

  Examples
    $ npm-run-parallel task:a task:b
`)

runTasks(cli.input)

