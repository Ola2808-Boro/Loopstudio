import React from "react";
import ReactDOM from "react-dom/client";
import AppStyle from "providers/AppStyle";
import App from "./App";
import DataProvider from "providers/DataProvider";
import { worker } from "mocks/browser";

worker.start().then(() => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <AppStyle>
        <DataProvider>
          <App />
        </DataProvider>
      </AppStyle>
    </React.StrictMode>
  );
});
