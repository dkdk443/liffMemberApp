import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import { useQRCode } from 'next-qrcode';
import Header from './components/Header';
import LabelBottomNavigation from './components/LabelBottomNavigation';

const App = (props: any) => {
  const lineUserId = props.profile.lineUserId;
  const lineDisplayName = props.profile.lineDisplayName;
  const { Canvas } = useQRCode();
  return (
    <div className="App">
      <Header></Header>
      <div className="">{ lineDisplayName }</div>
      <div className="card">
        <Canvas
          text={lineUserId}
          options={{
            type: 'image/jpeg',
            quality: 0.3,
            level: 'M',
            margin: 3,
            scale: 4,
            width: 240,
            color: {
              // dark: '#010599FF',
              light: '#FFF',
            },
          }}
      />
      </div>
      <LabelBottomNavigation></LabelBottomNavigation>
    </div>

  )
}

export default App
