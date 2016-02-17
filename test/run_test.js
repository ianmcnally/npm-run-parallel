import { runTasks } from '../lib/run'
import * as execUtil from '../lib/exec'
import Promise from 'bluebird'
import { expect } from 'chai'
import { stub } from 'sinon'

describe('lib/run', () => {

  describe('runTasks', () => {
    const tasks = [
      'this:thing',
      'that:thing'
    ]

    before(() => {
      stub(execUtil, 'exec').returns(Promise.resolve())

      return runTasks(tasks)
    })

    after(() => {
      execUtil.exec.restore()
    })

    it('executes an `npm run` for each task', () => {
      tasks.forEach(task => {
        expect(execUtil.exec).to.have.been.calledWith(`npm run ${task}`)
      })
    })

  })

})
