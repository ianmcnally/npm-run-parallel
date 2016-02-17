import { runTasks } from '../lib/run'
import execa from 'execa'
import { expect } from 'chai'
import { stub } from 'sinon'

xdescribe('lib/run', () => {

  describe('runTasks', () => {
    const tasks = [
      'this:thing',
      'that:thing'
    ]

    before(() => {
      stub(execa, 'shell').returns(Promise.resolve())

      return runTasks(tasks)
    })

    after(() => {
      execa.shell.restore()
    })

    it('executes an `npm run` for each task', () => {
      tasks.forEach(task => {
        expect(execa.shell).to.have.been.calledWith(`npm run ${task}`)
      })
    })

  })

})
