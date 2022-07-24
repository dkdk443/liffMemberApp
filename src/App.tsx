import { useState } from 'react'
import './App.scss'
import liff from '@line/liff/dist/lib';

function App() {
  const [profile, setProfile] = useState({});
  liff
    .getProfile()
    .then((result) => {
      setProfile({
        'userId' : result.userId,
        'name' : result.displayName,
        'pictureUrl' : result.pictureUrl ? result.pictureUrl : '',
        'statusMessage' : result.statusMessage ? result.statusMessage : '',
      })
    })
    .catch((err) => {
      console.log("error", err);
  });

  return (
    <div className="App">
      <div>
        <img src={profile.pictureUrl} className="logo react" alt="React logo" />
      </div>
      <h1>{ profile.name }</h1>
      <div className="card">
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
