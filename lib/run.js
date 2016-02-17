/* eslint-disable no-console */

import { Promise } from 'bluebird'
import { exec } from './exec'

const runTask = task => (
  exec(`npm run ${task}`)
    .then(() => console.log(`ran zzz: ${task}`))
)

export const runTasks = tasks => {
  console.log('tasks: ', tasks)
  return Promise.all(tasks.map(runTask))
    .then(() => console.log('done'))
    .catch(error => console.error('error: ', error))
}

/* eslint-enable no-console */

