import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import { Skills } from './features/sections/skills/Skills';
import { ExtraCredit } from './features/sections/skills/ExtraCredit';
import { Projects } from './features/sections/projects/Projects'
import { Education } from './features/sections/education/Education'
import { Interests } from './features/sections/interests/Interests'
import { NavList } from './features/nav/NavList';
import { RecentBooks } from './features/sections/interests/RecentBooks';
import { Podcasts } from './features/sections/interests/Podcasts'
import { LetsAskBobby } from './features/sections/projects/LetsAskBobby'
import { GellerPortal } from './features/sections/projects/GellerPortal'
import { Collabolist } from './features/sections/projects/Collabolist'
import { Year2053 } from './features/sections/projects/Year2053'
import { WordPressProjects } from './features/sections/projects/WordPressProjects'
import { PreUniversity } from './features/sections/education/PreUniversity';
import { University } from './features/sections/education/University';
import { Online } from './features/sections/education/Online';
import { FAQ } from './features/sections/faq/FAQ';
import { BaseSkills } from './features/sections/skills/BaseSkills';
import { Welcome } from './features/sections/Welcome'
import { Educationintro } from './features/sections/education/EducationIntro';
import { ProjectsIntro } from './features/sections/projects/ProjectsIntro';
import { InterestsIntro } from './features/sections/interests/InterestsIntro';
import { SkillsIntro } from './features/sections/skills/SkillsIntro';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <div style={{display:"flex"}}>
      <NavList />
      <div style={{maxWidth:"1000px", paddingLeft:"60px"}}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="skills" element={<Skills />} >
            <Route path="base-skills" element={<BaseSkills />} />
            <Route path="extra-credit" element={<ExtraCredit />} />
            <Route index element={<SkillsIntro />} />
          </Route>
          <Route path="interests" element={<Interests />}>
            <Route path="reading-list" element={<RecentBooks />} />
            <Route path="podcasts" element={<Podcasts />} />
            <Route index element={<InterestsIntro />} />
          </Route>
          <Route path="education" element={<Education />} >
            <Route path="pre-university" element={<PreUniversity />} />
            <Route path="university" element={<University />} />
            <Route path="online" element={<Online />} />
            <Route index element={<Educationintro />} />
          </Route>
          <Route path="projects" element={<Projects />}>
            <Route path="lets-ask-bobby" element={<LetsAskBobby />} />
            <Route path="geller-portal" element={<GellerPortal />} />
            <Route path="collabolist" element={<Collabolist />} />
            <Route path="year-2053" element={<Year2053 />} />
            <Route path="wordpress-stuff" element={<WordPressProjects />} />
            <Route index element={<ProjectsIntro />} />
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
