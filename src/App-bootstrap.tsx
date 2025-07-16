import { useState } from 'react'
import reactLogo from '@/assets/images/react.png'
import viteLogo from '@/assets/images/vite.png'

import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light">
      <div className="d-flex align-items-center justify-content-center my-4 gap-4">
        <a href="https://vite.dev" target="_blank">
          <img
            src={viteLogo}
            className="h-10"
            alt="Vite logo"
            style={{ height: '2.5rem' }}
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="h-10"
            alt="React logo"
            style={{ height: '2.5rem' }}
          />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card mx-auto my-4" style={{ maxWidth: '24rem' }}>
        <div className="card-body text-center">
          <Button
            variant="primary"
            className="mx-auto"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </Button>

          <p className="mt-3">
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </div>
      <p>Click on the Vite and React logos to learn more</p>
    </main>
  )
}

export default App
