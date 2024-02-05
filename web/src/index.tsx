import { RelayEnvironmentProvider } from "react-relay";
import { RelayEnvironment } from "./RelayEnvironment";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormEntrypoint from "./form/questions/reponse/FormEntrypoint";
import { FormEntryPointContent } from "./form/FormEntryPointContent";
import { FormSpecDetailEntryPoint } from "./form/FormSpecDetailEntryPoint";
import { FormSpecCreateEntryPoint } from "./form/FormSpecCreateEntryPoint";
import { Spin } from "antd";
import { FormInstanceEntryPoint } from "./form/FormInstanceEntryPoint";
import { FormInstanceResponseContainer } from "./form/FormInstanceResponseContainer";
import FormSubmitted from "./form/FormSubmitted";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: ":formID/instance/:instanceID/formSubmitted",
    element: (
      <Suspense>
        <FormSubmitted />
      </Suspense>
    ),
  },
  {
    path: "/admin/forms",
    element: (
      <Suspense>
        <FormEntrypoint />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <FormEntryPointContent />,
      },
      {
        path: ":formID/detail",
        element: (
          <Suspense fallback={<Spin />}>
            <FormSpecDetailEntryPoint />
          </Suspense>
        ),
      },
      {
        path: "create/:formID",
        element: <FormSpecCreateEntryPoint />,
      },
      {
        path: ":formID/instance/:instanceID",
        element: <FormInstanceEntryPoint />,
      },
      {
        path: ":formID/response",
        element: (
          <Suspense>
            <FormInstanceResponseContainer />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </RelayEnvironmentProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
