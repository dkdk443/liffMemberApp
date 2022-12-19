import React from 'react';
import ReactDOM from 'react-dom/client'
import Root from './routes/root';
import ErrorPage from "./error-page";
import MemberCardPage from './routes/member-card';
import MyPage from './routes/my-page';
import Shop from './routes/shop';
import Index from "./routes/index";
import './index.scss'
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import liff from '@line/liff/dist/lib';
import Item from './routes/item';
import Cart from './routes/cart';
import { Profile } from './@types/profile';

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

const createResponse = (data: any, status: number) => {
  return new Response(JSON.stringify(data), {
    status: status,
    headers: {
      "Content-Type": "application/json; utf-8",
    },
  })
}

async function rootLoad() {
  // webブラウザの場合はテストユーザーにしておく
  if (!liff.isInClient()) {
    const testProfile: Profile = { userId: "123456789", displayName: "はなこ", pictureUrl: "https://uploads-ssl.webflow.com/603c87adb15be3cb0b3ed9b5/615998755abd8e73ef838522_89.png" }
    return createResponse(testProfile, 200);
  } else {
    // @ts-ignore
    const sessionProfile: Profile = JSON.parse(sessionStorage.getItem('profile'));
    // sessionStorageにない時だけAPIから取得する
    if (!sessionProfile) {
      const data = await liffInit();
      sessionStorage.setItem('profile', JSON.stringify(data));
      return createResponse(data, 200);
    } else {
      return createResponse(sessionProfile, 200);
    }
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
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
