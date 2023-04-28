import {
  get_account,
  reset_experiment,
  set_mockup,
  set_mockup_now,
} from '@completium/experiment-ts'

import { Int } from '@completium/archetype-ts-types'

import { counter } from './binding/counter'

const assert = require('assert')

/* Accounts ---------------------------------------------------------------- */

const alice = get_account('alice')

/* Initialisation ---------------------------------------------------------- */

describe('Initialisation', async () => {
  it('Reset experiment', async () => {
    await reset_experiment({
      account: 'alice',
      endpoint: 'mockup',
      quiet: true,
    })
  })
  it('set_mockup', async () => {
    set_mockup()
    // await mockup_init()
  })
  it('set_mockup_now', async () => {
    set_mockup_now(new Date(Date.now()))
  })
})

/* Scenario ---------------------------------------------------------------- */

describe('[Counter] Contract deployment', async () => {
  it('Deploy test_binding', async () => {
    await counter.deploy({ as: alice })
  })
})

describe('[Counter] Call add_one', async () => {
  it("Call 'add_one'", async () => {
    const counter_before = await counter.get_count()
    assert(counter_before.equals(new Int(0)))
    await counter.add_one({ as: alice })
    const counter_after = await counter.get_count()
    assert(counter_after.equals(new Int(1)))
  })
})
