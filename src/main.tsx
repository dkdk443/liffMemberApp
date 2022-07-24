import liff from '@line/liff/dist/lib'
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'

export type Profile = {
  lineUserId: string;
  lineDisplayName: string;
};

let liffId = import.meta.env.VITE_REACT_APP_LIFF_ID
let profile: Profile = {'lineUserId': '', 'lineDisplayName': ''};

liff
  .init({
    liffId: liffId || '',
    // withLoginOnExternalBrowser: true
  })
  .then(() => {
    liff
      .getProfile()
      .then((result) => {
        alert(JSON.stringify(result));
        profile.lineUserId = result.userId;
        profile.lineDisplayName = result.displayName;
      })
      .catch((e) => {
        alert(`getProfile error: ${e.message}`)
      })
  })
  .then(() => {
    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <React.StrictMode>
        <App profile={ profile } />
      </React.StrictMode>
    )
  })
  .catch((e) => {
    alert(`LIFF error: ${e.message}`)
  });




