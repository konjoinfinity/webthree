import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./onepirate/modules/views/redux/store";
import { Provider } from "react-redux";
import * as buffer from "buffer";

window.Buffer = buffer.Buffer;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
