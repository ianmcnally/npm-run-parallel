import { runTasks } from '../lib/run'
import childProcess from 'child_process'
import { expect } from 'chai'
import { stub } from 'sinon'

const mockStream = { pause: stub(), addListener: stub(), resume: stub() }

describe('lib/run', () => {

  describe('runTasks', () => {
    const tasks = [
      '__test_fixture__',
      '__test_fixture_2__'
    ]

    before(() => {
      stub(childProcess, 'exec').returns({
        stdout: mockStream,
        stderr: mockStream,
        kill: stub()
      })

      runTasks(tasks)
    })

    after(() => {
      childProcess.exec.restore()
    })

    it('executes an `npm run` for each task', () => {
      tasks.forEach(task => {
        expect(childProcess.exec).to.have.been.calledWith(`npm run ${task} -- --color`)
      })
    })

  })

})

