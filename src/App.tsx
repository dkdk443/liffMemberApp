import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'

const App = (props: any) => {
  const lineUserId = props.profile.lineUserId;
  const lineDisplayName = props.profile.lineDisplayName;
  alert(JSON.stringify(props));
  alert(lineUserId);


  return (
    <div className="App">
      <div className="card">
        <div>
          名前：{lineDisplayName}
        </div>
        <p>
          あなたのUerIDは{ lineUserId }
        </p>
      </div>
    </div>
  )
}

export default App
