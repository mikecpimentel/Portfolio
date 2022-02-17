import { useOutletContext, useParams } from "react-router-dom"
import { Project } from "../components/project/Project"




export const Page = (props) => {

  const sectionState = useOutletContext();
  const whichPage = useParams();
  console.log(sectionState);
  console.log(whichPage);
  
  return (
    <Project data={sectionState.pages.byName[whichPage.which]} />
  )
/*

  if (props.type === 'project') {
    return (
        <Project
        title={portfolioState.projects[0].title}
        period={portfolioState.projects[0].period}
        tech={portfolioState.projects[0].tech}
        images={portfolioState.projects[0].images}>
            {description.map(item => item[0] === 'p' ? <p>{item[1]}</p> : item[0] === 'ul' ? <ul>{item[1].map(listItem => <li>{listItem}</li>)}</ul> : null)}  
        </Project>
    )
  } else {

    return (
      <div></div>
    )
  }
*/
}