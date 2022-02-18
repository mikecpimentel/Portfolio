import "animate.css";
import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavList } from "./features/nav/NavList";
import { Page } from "./features/components/Page";
import { Welcome } from "./features/sections/Welcome";
import { CurrentProjects } from "./features/sections/CurrentProjects";
import { Section } from "./features/components/Section";
import { PokemonExplorer } from "./features/sections/pokemon-explorer/PokemonExplorer";
import { PokemonList } from "./features/sections/pokemon-explorer/PokemonList";

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
         name: "Projects",
         section_url: "projects",
      },
      {
         name: "Interests",
         section_url: "interests",
      },
      {
         name: "FAQ",
         section_url: "faq",
      },
      {
         name: "Contact",
         section_url: "contact",
      },
      {
         name: "New Projects",
         section_url: "new-projects",
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
            <NavList />

            <div className="nav-list">
               <ul className="vertical-nav">
                  {portfolioState.sections.map((section) => (
                     <NavLink to={`/${section.section_url}`}>
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
            </div>

            <div className="main-content-area">
               <Routes>
                  <Route path="/" element={<Welcome />} />
                  <Route
                     path="current-projects"
                     element={<CurrentProjects />}
                  />

                  {portfolioState.sections.map((section) => (
                     <Route
                        path={section.section_url}
                        element={<Section which={section.section_url} />}
                     >
                        <Route path={":which"} element={<Page />} />
                        <Route index element={<Page />} />
                     </Route>
                  ))}

                  <Route
                     path="new-projects"
                     element={
                        <Section name="New Projects">
                           <NavLink to="pokemon">Pokemon List</NavLink>
                        </Section>
                     }
                  >
                     <Route
                        path="pokemon-explorer"
                        element={<PokemonExplorer />}
                     />
                     <Route path="pokemon" index element={<PokemonList />} />
                     <Route
                        path="pokemon/:pokemonName"
                        element={<PokemonExplorer />}
                     />
                  </Route>
               </Routes>
            </div>
         </main>
      </div>
   );
}

export default App;
