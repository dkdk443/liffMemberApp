import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'

function App() {
  const lineUserId = sessionStorage.getItem('lineUserId');

  return (
    <div className="App">
      <div>
      </div>
      <h1>あなたのUerIDは{ lineUserId }</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
