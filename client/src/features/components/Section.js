import { Outlet, NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Section.css";
import { v4 as uuid } from "uuid";

export const Section = (props) => {
   const sectionTabs = props.tabs;
   const sectionTabTitles = props.titles;
   const indexTabName = props.indexTabName;
   const sectionURL = props.url;
   const { pathname } = useLocation();

   useEffect(() => {
      document.getElementById("section-bottom").scroll(0, 0);
   }, [pathname]);

   return (
      <>
         {sectionTabs.length > 1 ? (
            <div className="section-top">
               <div className="sub-section-links">
                  {sectionTabs.length > 1 ? (
                     <NavLink key={uuid()} to={`/${sectionURL}`} end>
                        {indexTabName}
                     </NavLink>
                  ) : null}
                  {sectionTabs.map((name, index) =>
                     name !== "index" ? (
                        <NavLink key={uuid()} to={`/${sectionURL}/${name}`}>
                           {sectionTabTitles[index]}
                        </NavLink>
                     ) : null
                  )}
               </div>
            </div>
         ) : null}
         <div id="section-bottom" className="section-bottom">
            <Outlet />
         </div>
      </>
   );
};
