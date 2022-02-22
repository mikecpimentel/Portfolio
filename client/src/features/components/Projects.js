import { Description } from "./Description";
import "./Projects.css";
import { v4 as uuid } from "uuid";

export const Projects = (props) => {
   const data = props.data;

   return data.map((item) => (
      <Project
         key={uuid()}
         title={item.title}
         period={item.period}
         tech={item.tech}
         images={item.images}
      >
         <Description key={uuid()} data={item.description} />
      </Project>
   ));
};

const Project = (props) => {
   const imageArray = props.images;
   const title = props.title;
   const period = props.period;
   const tech = props.tech;

   return (
      <>
         <div className="project-text-area">
            <h3>{title}</h3>
            <p>Period: {period}</p>
            <p>Technologies: {tech}</p>
            {props.children}
         </div>
         {imageArray
            ? imageArray.map((photo, index) => (
                 <div className="image-div">
                    <img key={uuid()} src={photo.large} alt={photo.subtitle} />
                    <p className="caption">{photo.subtitle}</p>
                 </div>
              ))
            : "No images"}
      </>
   );
};
