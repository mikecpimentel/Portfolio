import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import { Skills } from './features/skills/Skills';
import { ExtraCredit } from './features/sections/ExtraCredit';
import { Projects } from './features/sections/Projects'
import { Education } from './features/sections/Education'
import { Interests } from './features/sections/Interests'
import { NavList } from './features/nav/NavList';
import { RecentBooks } from './features/sections/RecentBooks';
import { Podcasts } from './features/sections/Podcasts'
import { LetsAskBobby } from './features/projects/LetsAskBobby'
import { GellerPortal } from './features/projects/GellerPortal'
import { Collabolist } from './features/projects/Collabolist'
import { Year2053 } from './features/projects/Year2053'
import { WordPressProjects } from './features/projects/WordPressProjects'
import { PreUniversity } from './features/education/PreUniversity';
import { University } from './features/education/University';
import { Online } from './features/education/Online';
import { FAQ } from './features/sections/FAQ';
import { BaseSkills } from './features/skills/BaseSkills';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <BrowserRouter>
    <div style={{display:"flex"}}>
      <NavList />
      <div style={{maxWidth:"800px", paddingLeft:"50px"}}>
        <Routes>
          <Route path="skills" element={<Skills />} >
            <Route path="base-skills" element={<BaseSkills />} />
            <Route path="extra-credit" element={<ExtraCredit />} />
          </Route>
          <Route path="interests" element={<Interests />}>
            <Route path="reading-list" element={<RecentBooks />} />
            <Route path="podcasts" element={<Podcasts />} />
          </Route>
          <Route path="education" element={<Education />} >
            <Route path="pre-university" element={<PreUniversity />} />
            <Route path="university" element={<University />} />
            <Route path="online" element={<Online />} />
          </Route>
          <Route path="projects" element={<Projects />}>
            <Route path="lets-ask-bobby" element={<LetsAskBobby />} />
            <Route path="geller-portal" element={<GellerPortal />} />
            <Route path="collabolist" element={<Collabolist />} />
            <Route path="year-2053" element={<Year2053 />} />
            <Route path="wordpress-tinkerings" element={<WordPressProjects />} />
          </Route>
          <Route path="FAQ" element={<FAQ />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
