import execa from 'execa'
import pkg from '../package.json'
import { expect } from 'chai'

describe('lib/cli', () => {
  const tasks = [
    '__test_fixture__',
    '__test_fixture_2__'
  ]
  let stdout

  before(() => {
    return execa('node', [pkg.bin, ...tasks])
      .then(output => {
        stdout = output.stdout
      })
  })

  it('launches the task runner', () => {
    tasks.forEach(task => {
      expect(stdout).to.contain(`${pkg.name}@${pkg.version} ${task}`)
    })
  })

})
