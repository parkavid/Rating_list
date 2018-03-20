import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import combineReducer from "./reducers";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";

let sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducer,
  applyMiddleware(sagaMiddleware, createLogger())
);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);
registerServiceWorker();
