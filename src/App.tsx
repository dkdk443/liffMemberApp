import { useState } from 'react'
import './App.scss'

import Header from './components/Header';
import LabelBottomNavigation from './components/LabelBottomNavigation';
import styled from 'styled-components';
import QRcode from './components/QRcode';

const App = (props: any) => {
  const lineUserId = props.profile.lineUserId;
  const lineDisplayName = props.profile.lineDisplayName;
  const MainContent = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `;

  return (
    <MainContent className="App">
      <div className="">{ lineDisplayName }</div>
      <QRcode lineUserId={ lineUserId } />
      <LabelBottomNavigation></LabelBottomNavigation>
    </MainContent>

  )
}

export default App
