import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DataProvider from "providers/DataProvider";
import AppStyle from "providers/AppStyle";

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
