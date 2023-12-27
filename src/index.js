import React from "react";
import ReactDOM from "react";
import './index.css'
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Company from './Routes/Company'
// import Org from "./Routes/Org";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/company" element={<Company />} />
      {/* <Route path="/org" element={<Org />} /> */}
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);