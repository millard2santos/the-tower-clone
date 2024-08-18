import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PlayerContext } from './context/PlayerContext.tsx'
import { MultipliersContext } from './context/MultipliersContext.tsx'
import { WaveContext } from './context/WaveContext.tsx'

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WaveContext>
      <MultipliersContext>
        <PlayerContext>
          <App />
        </PlayerContext>
      </MultipliersContext>
    </WaveContext>
  </StrictMode>,
)
