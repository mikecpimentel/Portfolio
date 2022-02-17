import { Project } from "../../components/project/Project"




const portfolioState = {
    "projects": [
        
    ]
}



export const WordPressProjects = () => {
    return (
        <Project
        title={portfolioState.projects[0].title}
        period={portfolioState.projects[0].period}
        tech={portfolioState.projects[0].tech}
        images={portfolioState.projects[0].images}>
            {portfolioState.projects[0].description.map(item => item[0] === 'p' ? <p>{item[1]}</p> : item[0] === 'ul' ? <ul>{item[1].map(listItem => <li>{listItem}</li>)}</ul> : null)}  
        </Project>
    )
}