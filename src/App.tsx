import { SettingsProvider } from './contexts/Settings'
import { TaquitoProvider } from './contexts/Taquito'
import { BeaconProvider } from './contexts/Beacon'
import { Main } from './routes/Main'
import { CssBaseline } from '@mui/material'
import { ContractProvider } from './contexts/Contract'

import React from 'react'

export function App() {
  return (
    <div className="App">
      <CssBaseline />
      <SettingsProvider>
        <TaquitoProvider>
          <BeaconProvider>
            <ContractProvider>
              <Main />
            </ContractProvider>
          </BeaconProvider>
        </TaquitoProvider>
      </SettingsProvider>
    </div>
  )
}
