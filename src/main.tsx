import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client'
import Root from './routes/root';

import ErrorPage from "./error-page";
import MemberCardPage from './routes/member-card';
import MyPage from './routes/my-page';
import ContactPage from './routes/contact';
import Shop from './routes/shop';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Index from "./routes/index";
import './index.scss'

import liff from '@line/liff/dist/lib';
import Item from './routes/item';
import Cart from './routes/cart';

let liffId = import.meta.env.VITE_REACT_APP_LIFF_ID
// LINEのユーザーデータ取得
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
  // @ts-ignore
  const sessionProfile = JSON.parse(sessionStorage.getItem('profile'));
  // sessionStorageにない時だけAPIから取得する
  if (!sessionProfile) {
    const data = await liffInit();
    sessionStorage.setItem('profile', JSON.stringify(data));
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json; utf-8",
      },
    });
  } else {
    return new Response(JSON.stringify(sessionProfile), {
      status: 200,
      headers: {
        "Content-Type": "application/json; utf-8",
      },
    });
  }

}

const router = createBrowserRouter([
  {
    path: "/",
    loader: rootLoad,
    element: <Root />,
    id: "root",
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "/member-card",
        element: <MemberCardPage />,
      },
      {
        path: "/my-page",
        element: <MyPage />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop/:id",
        element: <Item />,
      },
      {
        path: "/shop/cart",
        element: <Cart />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
