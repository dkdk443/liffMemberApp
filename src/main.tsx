
import React from 'react';
import ReactDOM from 'react-dom/client'
import Root from './routes/root';
import ErrorPage from "./error-page";
import MemberCardPage from './routes/member-card';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
