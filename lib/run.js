/* eslint-disable no-console */

import { Observable } from 'rx'
import RxNode from 'rx-node'
import { exec } from 'child_process'

const addExitOnInterrupt = taskProcess => process.on('SIGINT', taskProcess.kill)

const executeTask = task => {
  const taskProcess = exec(`npm run ${task}`)

  addExitOnInterrupt(taskProcess)

  return taskProcess
}

const createOutputStreamsFromProcess = ({ stdout, stderr }) => {
  const stdoutStream = RxNode.fromReadableStream(stdout)

  const stderrStream = RxNode.fromReadableStream(stderr)
    .select(e => process.stderr.write(e) && process.exit(1))

  return stdoutStream.merge(stderrStream)
}

const runTask = task => {
  const taskProcess = executeTask(task)
  return createOutputStreamsFromProcess(taskProcess)
}

export const runTasks = tasks => {
  Observable.from(tasks)
    .selectMany(runTask)
    .subscribe(
      output => process.stdout.write(output)
    )
}

/* eslint-enable no-console */

