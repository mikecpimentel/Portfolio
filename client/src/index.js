import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./main-layout.css";
import App from "./App";
import { AccessTokenProvider } from './features/sandbox/site-one/AccessTokenContext'

// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
   <React.StrictMode>
      <AccessTokenProvider>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </AccessTokenProvider>
   </React.StrictMode>,
   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
