import { set_binder_tezos_toolkit } from '@completium/dapp-ts'
import constate from 'constate'
import { useState } from 'react'

import { Counter as Contract } from '../dapp-bindings/counter'
import { useContractAddress } from './Settings'
import { useTezosToolkit } from './Taquito'

export const [ContractProvider, useContract] = constate(
  () => {
    const tezos = useTezosToolkit()
    const address = useContractAddress()
    const [contract] = useState({
      contract: new Contract(address),
    })
    set_binder_tezos_toolkit(tezos)
    return contract
  },
  (v) => v.contract
)
