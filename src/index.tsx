import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Router } from "react-router-dom";
import { RootStore, storesContext } from "@stores";
import { loadState, saveState } from "@utils/localStore";
import { autorun } from "mobx";
const initState = loadState();
const mobxStore = new RootStore(initState);
autorun(
  () => {
    // console.dir(mobxStore);
    saveState(mobxStore.serialize());
  },
  { delay: 1000 }
);

ReactDOM.render(
  <React.StrictMode>
    <storesContext.Provider value={mobxStore}>
      <Router history={mobxStore.routerStore.history}>
        <App />
      </Router>
    </storesContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
