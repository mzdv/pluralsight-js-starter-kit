import * as tape from 'tape'

import * as example from '../src/index'

tape('regular', (t: tape.Test) => {
  t.plan(1)

  t.equal(2, 2)
})

tape('sample functionality', (t: tape.Test) => {
  t.plan(1)

  t.equal(example.testFunction(2), 2)
})
