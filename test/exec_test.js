import { exec } from '../lib/exec'
import Promise from 'bluebird'
import { expect } from 'chai'

describe('lib/exec', () => {

  describe('exec', () => {
    const command = 'echo "sup"'
    let output

    before(() => {
      output = exec(command)

      return output
    })

    it('returns a promise', () => {
      expect(output).to.be.an.instanceof(Promise)
    })

  })

})

