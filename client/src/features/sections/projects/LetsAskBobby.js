import { Project } from "../../components/project/Project"
import { ProjectDescription } from "../../components/project/ProjectDescription"
import photo1 from '../../../images/letsaskbobby_logo.gif'


export const LetsAskBobby = () => {
    return (
        <Project 
        title="Let's Ask Bobby"
        period="Sept 2007 to July 2008"
        tech="HTML, CSS, JavaScript, PHP, SQL, MySQL, AJAX, XML, Apache"
        images={[[photo1, photo1]]}>
            <ProjectDescription>
                <p>
                    (My name used to be Bobby, but I legally changed it to Michael as a teen.)
                </p>
                <p>
                    Let's Ask Bobby was a social networking site I developed as a teen. An avid MySpace user, this was my attempt to improve upon what I perceived to be the many shortcomings of MySpace. Like MySpace, Let's Ask Bobby had core user functionalities like a login system, profile area, and sections for uploading photos and albums.
                </p>    
                <p>
                    The biggest improvement I made over MySpace was the ability to send messages and perform certain functions without the need to refresh the page (using AJAX).
                </p>
                
                
                <p>
                    I learned HTML and CSS by staring at MySpace code for hours, but quickly learned the limits of using only HTML and CSS. For this project, I learned JavaScript, PHP, XML, AJAX, and SQL.
                </p>
                <p>
                    I coded everything using the Notepad app on Windows. I remember often having to count through thousands of lines of code in different files just to locate the source of specific errors. It was painfully inefficient.
                </p>
                <p>
                    I never took any screenshots of this project, but I found the logo I created, along with all the files.
                </p>
            </ProjectDescription>
        </Project>
    )
}