import { runTasks } from '../lib/run'
// import { expect } from 'chai'
// import { stub } from 'sinon'

xdescribe('lib/run', () => {

  describe('runTasks', () => {
    const tasks = [
      'this:thing',
      'that:thing'
    ]

    before(() => {
      return runTasks(tasks)
    })

    it('executes an `npm run` for each task', () => {
    })

  })

})
