import { shell } from 'execa'
import { expect } from 'chai'
import pkg from '../package.json'

describe('lib/cli', () => {
  const taskThatIsLonger = '__test_fixture_longer__'
  const taskThatIsShorter = '__test_fixture_shorter__'
  let output

  before(() => {
    output = shell(`node ${pkg.main} ${taskThatIsLonger} ${taskThatIsShorter}`)

    return output
  })

  it('runs a task', () => {
    return output.then(({ stdout }) => {
      expect(stdout).to.contain([
        `ran: ${taskThatIsShorter}`,
        `ran: ${taskThatIsLonger}`,
        'done'
      ].join('\n'))
    })
  })

})
