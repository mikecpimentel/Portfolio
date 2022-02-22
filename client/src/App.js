import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Page } from "./features/components/Page";
import { Welcome } from "./features/sections/Welcome";
import { Section } from "./features/components/Section";
import { v4 as uuid } from "uuid";

// only query the sections
const portfolioState = {
   sections: [
      {
         name: "Skills",
         section_url: "skills",
      },
      {
         name: "Education",
         section_url: "education",
      },
      {
         name: "Past Projects",
         section_url: "past-projects",
      },
      {
         name: "FAQ",
         section_url: "faq",
      },
   ],
};

function App() {
   return (
      <div className="App">
         <header>
            <Link to="/">
               <h1>Michael Pimentel</h1>
            </Link>
         </header>
         <main>
            <div className="nav-list">
               <ul className="vertical-nav">
                  {portfolioState.sections.map((section) => (
                     <NavLink key={uuid()} to={`/${section.section_url}`}>
                        {({ isActive }) =>
                           isActive ? (
                              <li>&#x27F6;&#x27F6;&#x27F6;</li>
                           ) : (
                              <li>{section.name}</li>
                           )
                        }
                     </NavLink>
                  ))}
               </ul>
               <div id="contact-info">
                  <ul>
                     <li>(408) 365-4328</li>
                     <li>mikecpimentel@gmail.com</li>
                     <li>
                        <a
                           href="https://www.linkedin.com/in/mikecpimentel/"
                           target="_blank"
                           rel="noreferrer"
                        >
                           LinkedIn
                        </a>
                     </li>
                  </ul>
               </div>
            </div>

            <div className="main-content-area">
               <Routes>
                  <Route key={uuid()} path="/" element={<Welcome />} />

                  {portfolioState.sections.map((section) => (
                     <Route
                        key={uuid()}
                        path={section.section_url}
                        element={
                           <Section
                              name={section.name}
                              url={section.section_url}
                           />
                        }
                     >
                        <Route
                           key={uuid()}
                           path={":which"}
                           element={<Page />}
                        />
                        <Route key={uuid()} index element={<Page />} />
                     </Route>
                  ))}
               </Routes>
            </div>
         </main>
      </div>
   );
}

export default App;
