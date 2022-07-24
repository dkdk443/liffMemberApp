import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'

const App = (props: any) => {
  const lineUserId = props.profile.lineUserId;
  const lineDisplayName = props.profile.lineDisplayName;

  return (
    <div className="App">
      <h2 className='card_title'>デジタル会員証</h2>
      <div className="card">
      </div>
    </div>
  )
}

export default App
