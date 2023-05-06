import { useTezosToolkit } from "../contexts/Taquito"
import { useContractAddress } from "../contexts/Settings"
import React from 'react'
export const Main = () => {

  const ttk = useTezosToolkit()
  const contractAddress = useContractAddress()
  const [actualContract, setActualContract] = React.useState(undefined)
  const [isActualContract, setIsActualContract] = React.useState(true)
  const [isAddEntrypoint, setIsAddEntrypoint] = React.useState(true)
  const [loadingContract, setLoadingContract] = React.useState(true)

  React.useEffect(() => {
    console.log('mounting')
    let ignore = false

    async function startFetching() {
      try {
        const ctr = await (ttk as any).wallet.at(contractAddress)
        if (!ignore) {
          setActualContract(ctr)
          setIsActualContract(true)
          setIsAddEntrypoint(!!(ctr as any)?.entrypoints?.entrypoints?.add_poll)
        } else {
        }
      } catch (e) {
        setIsActualContract(false)
        setIsAddEntrypoint(false)
        console.log(e)
      }
      setLoadingContract(false)
    }

    startFetching()
    return () => {
      console.log('unmounting')
      ignore = true
    }
  }, [])

  console.log('Contract found: ', isActualContract)
  console.log('Add entrypoint found: ', isAddEntrypoint)
  console.log(actualContract)
  console.log((actualContract as any)?.entrypoints?.entrypoints?.add_poll)

  return <>'hi'</>
}
