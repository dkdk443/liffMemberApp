import liff from '@line/liff/dist/lib'
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'

let liffId = import.meta.env.VITE_REACT_APP_LIFF_ID

liff
  .init({
    liffId: liffId || '',
    // withLoginOnExternalBrowser: true
  })
  .then(() => {
    liff
      .getProfile()
      .then((result) => {
        alert(result.displayName);
        alert(result.userId);
        sessionStorage.setItem('lineDisplayName', result.displayName);
        sessionStorage.setItem('lineUserId', result.userId);
      })
      .catch((e) => {
        alert(`getProfile error: ${e.message}`)
      })
  })
  .then(() => {
    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
  })
  .catch((e) => {
    alert(`LIFF error: ${e.message}`)
  });




