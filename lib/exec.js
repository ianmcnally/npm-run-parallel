import { promisify } from 'bluebird'
import childProcess from 'child_process'

export const exec = promisify(childProcess.exec)

