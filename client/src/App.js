import 'animate.css'
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { ExtraCredit } from './features/sections/skills/ExtraCredit';
import { NavList } from './features/nav/NavList';
import { RecentBooks } from './features/sections/interests/RecentBooks';
import { Podcasts } from './features/sections/interests/Podcasts'
import { Page } from './features/components/Page';
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
import { CurrentProjects } from './features/sections/current-projects/CurrentProjects';
import { Section } from './features/components/Section';
import { PokemonExplorer } from './features/sections/current-projects/pokemon-explorer/PokemonExplorer';
import { PokemonList } from './features/sections/current-projects/pokemon-explorer/PokemonList';


// only query the sections
const portfolioState = {
  "sections": [
    {
      "name": "Skills",
      "section_url": "skills"
    },
    {
      "name": "Education",
      "section_url": "education"
    },
    {
      "name": "Projects",
      "section_url": "projects"
    },
    {
      "name": "Interests",
      "section_url": "interests"
    },
    {
      "name": "FAQ",
      "section_url": "faq"
    },
    {
      "name": "Contact",
      "section_url": "contact"
    },
    {
      "name": "New Projects",
      "section_url": "new-projects"
    },
  ]
}

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
                <Route path="current-projects" element={<CurrentProjects />} />

                <Route path="skills" element={
                  <Section name="Skills">
                    <NavLink to="/skills" end>Intro</NavLink>
                    <NavLink to="base-skills">Current Skills</NavLink>
                    <NavLink to="extra-credit">"Extra Credit"</NavLink>
                    <NavLink to="future">The Future</NavLink>
                  </Section>
                } >
                  <Route path="base-skills" element={<BaseSkills />} />
                  <Route path="extra-credit" element={<ExtraCredit />} />
                  <Route path="future" element={<FutureSkills />} />
                  <Route index element={<SkillsIntro />} />
                </Route>

                <Route path="interests" element={
                  <Section name="Interests">
                    <NavLink to="/interests" end>Intro</NavLink>
                    <NavLink to="reading-list">Recent Books</NavLink>
                    <NavLink to="podcasts">Podcasts</NavLink>
                    <NavLink to="travel">Travel</NavLink>
                  </Section>
                }>
                  <Route path="reading-list" element={<RecentBooks />} />
                  <Route path="podcasts" element={<Podcasts />} />
                  <Route path="travel" element={<Travel />} />
                  <Route index element={<InterestsIntro />} />
                </Route>

                <Route path="education" element={
                  <Section name="Education">
                    <NavLink to="/education" end>Intro</NavLink>
                    <NavLink to="pre-university">Pre-University</NavLink>
                    <NavLink to="university">University</NavLink>
                    <NavLink to="online">Online</NavLink>
                  </Section>} >
                  <Route path="pre-university" element={<PreUniversity />} />
                  <Route path="university" element={<University />} />
                  <Route path="online" element={<Online />} />
                  <Route index element={<Educationintro />} />
                </Route>

                <Route path={portfolioState.sections[2].section_url} element={
                      <Section which={portfolioState.sections[2].section_url} />}>
                  <Route path={':which'} element={<Page />} />
                </Route>
                  
              

                <Route path="FAQ" element={<FAQ />} />
                <Route path="contact" element={<Contact />} />

                <Route path="new-projects" element={
                  <Section name="New Projects">
                    <NavLink to="pokemon">Pokemon List</NavLink>
                  </Section>
                }>
                  <Route path="pokemon-explorer" element={<PokemonExplorer />} />
                  <Route path="pokemon" index element={<PokemonList />} />
                  <Route path="pokemon/:pokemonName" element={<PokemonExplorer />} />
                
                  
                  
                </Route>


              </Routes>
            
          </div>
      </main>
    </div>
  );
}

export default App;
