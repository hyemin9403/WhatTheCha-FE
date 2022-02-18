import React from "react";
import ReactDOM from "react-dom";
import "../css/index.css";
import App from "./shared/App";

import { Provider } from "react-redux";
import store from "./redux/configureStore";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);