import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './layout/app';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Single from "./layout/single";
import Basic from './layout/basic';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Basic />,
    children: [
      {
        path: '',
        element: <App />
      },
      {
        path: "/detalle/:slug",
        element: <Single />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router} />
);