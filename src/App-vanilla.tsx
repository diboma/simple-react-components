import { useState } from 'react'
import reactLogo from '@/assets/images/react.png'
import viteLogo from '@/assets/images/vite.png'

import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="app-main">
      <div className="logo-container">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <Button
          variant="primary"
          className="count-button"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>

        <p className="hint-text">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="footer-text">
        Click on the Vite and React logos to learn more
      </p>
    </main>
  )
}

export default App
