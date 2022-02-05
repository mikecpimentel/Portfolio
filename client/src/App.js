import 'animate.css'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
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
import { Contact } from './features/sections/Contact';
import { Travel } from './features/sections/interests/Travel';
import { FutureSkills } from './features/sections/skills/FutureSkills';


function App() {
  return (
    <div className="App">
      <header>
        <Link to="/"><h1>Michael Pimentel</h1></Link>
      </header>
      <main>
          <NavList />
          
          <div className="main-content-area">
            
              <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="skills" element={<Skills />} >
                  <Route path="base-skills" element={<BaseSkills />} />
                  <Route path="extra-credit" element={<ExtraCredit />} />
                  <Route path="future" element={<FutureSkills />} />
                  <Route index element={<SkillsIntro />} />
                </Route>
                <Route path="interests" element={<Interests />}>
                  <Route path="reading-list" element={<RecentBooks />} />
                  <Route path="podcasts" element={<Podcasts />} />
                  <Route path="travel" element={<Travel />} />
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
                <Route path="contact" element={<Contact />} />
              </Routes>
            
          </div>
      </main>
    </div>
  );
}

export default App;
