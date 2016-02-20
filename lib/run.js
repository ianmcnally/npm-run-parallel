/* eslint-disable no-console */

import { Observable } from 'rx'
import RxNode from 'rx-node'
import { exec } from 'child_process'

const runTask = task => {
  const { stdout, stderr } = exec(`npm run ${task}`)

  const stdoutStream = RxNode.fromReadableStream(stdout)
  const stderrStream = RxNode.fromReadableStream(stderr)
    .select(e => process.stderr.write(e) && process.exit(1))

  return stdoutStream.merge(stderrStream)
}

export const runTasks = tasks => {
  Observable.from(tasks)
    .selectMany(runTask)
    .subscribe(
      output => process.stdout.write(output)
    )
}

/* eslint-enable no-console */

