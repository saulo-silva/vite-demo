import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-screen-xl mx-auto p-8 text-center">
      <div className="mb-8">
        <a href="https://vite.dev" target="_blank" className="inline-block mx-4">
          <img
            src={viteLogo}
            className="h-24 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa] will-change-auto"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" className="inline-block mx-4">
          <img
            src={reactLogo}
            className="h-24 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] will-change-auto motion-safe:animate-spin [animation-duration:20s]"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-5xl leading-tight mb-8">Vite + React</h1>
      <div className="p-8 mb-8">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="rounded-lg border border-transparent px-5 py-2.5 text-base font-medium bg-gray-800 dark:bg-gray-100 text-white dark:text-gray-900 cursor-pointer transition-colors duration-150 hover:border-blue-500 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50"
        >
          count is {count}
        </button>
        <p className="mt-4">
          Edit <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
      </div>
    </div>
  )
}

export default App
