import { runTasks } from '../lib/run'
import childProcess from 'child_process'
import { expect } from 'chai'
import { spy } from 'sinon'

describe('lib/run', () => {
  describe('runTasks', () => {
    const tasks = ['dummy:1', 'dummy:2']

    before(() => {
      spy(childProcess, 'exec')
      return runTasks(tasks)
    })

    after(() => {
      childProcess.exec.restore()
    })

    it('executes an `npm run` for each task', () => {
      expect(childProcess.exec).to.have.been.calledWith(`npm run dummy:1`)
      expect(childProcess.exec).to.have.been.calledWith(`npm run dummy:2`)
    })
  })
})
