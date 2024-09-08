//react
import React from 'react';
import reportWebVitals from './reportWebVitals';

//app page
import App from './App';

//react router dom
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";

//redux
import { Provider } from 'react-redux';
import store from "./redux/store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </Provider>
  </React.StrictMode>
);
reportWebVitals();
