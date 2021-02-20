import * as React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import storeFactory from "./redux/store";
import PropTypes from "prop-types";

const store = storeFactory();
window.store = store;
window.React = React;

const render = () =>
  ReactDOM.render(<App store={store} />, document.getElementById("root"));
store.subscribe(render);
render();

console.log(store.getState());
