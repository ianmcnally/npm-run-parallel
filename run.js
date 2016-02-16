import { Promise, promisify } from 'bluebird'
import childProcess from 'child_process'

const exec = promisify(childProcess.exec)

const runTask = (task) => (
  exec('npm run ' + task)
    .then(() => console.log('ran: ' + task))
)

const runTasks = (...tasks) => {
  console.log('tasks: ', tasks)
  Promise.all(tasks.map(runTask))
    .then(() => console.log('done'))
    .catch(error => console.error('error: ', error))
}

runTasks('test:one', 'test:two')

