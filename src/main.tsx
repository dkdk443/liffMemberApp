import liff from '@line/liff/dist/lib'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const env = import.meta.env.MODE;
console.log(import.meta.env);
let liffId = import.meta.env.VITE_REACT_APP_LIFF_ID

liff
  .init({ liffId: liffId || '' })
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


