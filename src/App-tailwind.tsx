import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="my-4 flex items-center justify-center gap-8">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="h-10" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-10" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="mx-auto my-6 max-w-sm rounded-lg border border-indigo-500 bg-white p-6 text-center shadow-md">
        <Button
          variant="primary"
          className="mx-auto"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>

        <p className="mt-4">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="">Click on the Vite and React logos to learn more</p>
    </main>
  )
}

export default App
