import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App videoWidth={300} videoHeight={300} />
  </Provider>,
  document.getElementById("root")
);
