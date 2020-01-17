import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import i18n from "./i18n";
import App from "./components/App";
import "./styles/bootstrap.scss";
import "./styles/index.scss";

ReactDOM.render(
  <Suspense fallback="loading">
    <App />
  </Suspense>,
  document.getElementById("root")
);

// serviceWorker.unregister();
