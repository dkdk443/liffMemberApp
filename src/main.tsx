
import React, { useEffect, useState }  from 'react';
import ReactDOM from 'react-dom/client'
import Root from './routes/root';
import ErrorPage from "./error-page";
import MemberCardPage from './routes/member-card';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.scss'
import liff from '@line/liff/dist/lib';

let liffId = import.meta.env.VITE_REACT_APP_LIFF_ID

const liffInit = () => {
  return new Promise((resolve, reject) => {
    liff.init({
      liffId: liffId || '',
      withLoginOnExternalBrowser: true
    })
    .then(() => {
      liff.getProfile()
        .then((resp) => {
          resolve(resp);
        })
    })
      .catch((e) => {
      console.log(`LIFF error: ${e.message}`);
      reject(e);
    })
  })
}

async function rootLoad() {
  const data = await liffInit();
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json; utf-8",
    },
  });
}

const router = createBrowserRouter([
  {
    path: "/",
    loader: rootLoad,
    element: <Root />,
    id: "root",
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/member-card",
        element: <MemberCardPage />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
