import { runTasks } from '../lib/run'
import childProcess from 'child_process'
import { expect } from 'chai'
import { spy } from 'sinon'

describe('lib/run', () => {

  describe('runTasks', () => {
    const tasks = [
      '__test_fixture__',
      '__test_fixture_2__'
    ]

    before(() => {
      spy(childProcess, 'exec')

      runTasks(tasks)
    })

    after(() => {
      childProcess.exec.restore()
    })

    it('executes an `npm run` for each task', () => {
      tasks.forEach(task => {
        expect(childProcess.exec).to.have.been.calledWith(`npm run ${task}`)
      })
    })

  })

})
