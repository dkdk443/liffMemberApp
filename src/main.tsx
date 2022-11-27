import liff from '@line/liff/dist/lib'
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'

export type Profile = {
  lineUserId: string;
  lineDisplayName: string;
};

const isLiffInClient = liff.isInClient();

let env = import.meta.env;
console.log(env);

let liffId = import.meta.env.VITE_REACT_APP_LIFF_ID
let profile: Profile = { 'lineUserId': '', 'lineDisplayName': '' };

// ミニアプリテスト用
const testProfile: Profile = {
  lineUserId: "1234457",
  lineDisplayName: "たなか"
}

if (!isLiffInClient) {
 ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
          <React.StrictMode>
            <App profile={ testProfile }/>
          </React.StrictMode>
        )
} else {
  liff
  .init({
    liffId: liffId || '',
    withLoginOnExternalBrowser: true
  })
  .then(() => {
    liff
      .getProfile()
      .then((result) => {
        profile.lineUserId = result.userId;
        profile.lineDisplayName = result.displayName;
        ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
          <React.StrictMode>
            <App profile={ profile } />
          </React.StrictMode>
        )
      })
  })
  .catch((e) => {
    console.log(`LIFF error: ${e.message}`);
  });

}