import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import { Skills } from './features/sections/Skills';
import { ExtraCredit } from './features/sections/ExtraCredit';
import { Projects } from './features/sections/Projects'
import { Education } from './features/sections/Education'
import { Interests } from './features/sections/Interests'
import { NavList } from './features/nav/NavList';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <BrowserRouter>
      <NavList />
      <Routes>
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="interests" element={<Interests />} />
        <Route path="extra-credit" element={<ExtraCredit />} />
        <Route path="education" element={<Education />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
