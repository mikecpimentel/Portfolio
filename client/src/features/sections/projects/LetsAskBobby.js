import { Project } from "../../components/project/Project"
import { Photo } from "../../components/project/Photo"
import { ProjectPhotos } from "../../components/project/ProjectPhotos"
import { ProjectDescription } from "../../components/project/ProjectDescription"


export const LetsAskBobby = () => {
    return (
        <Project 
        title="Let's Ask Bobby"
        period="Sept 2007 to July 2008"
        tech="HTML, CSS, JavaScript, PHP, SQL, MySQL, AJAX, XML, Apache">
            <ProjectDescription>
                <p>
                    Let's Ask Bobby was the first major personal project I had ever worked on. It was a social network I developed as a teen in an attempt to improve upon what I perceived to be several shortcomings of MySpace. Like MySpace, Let's Ask Bobby had core user functionalities like a login system, profile area, and sections for uploading photos and albums. One improvement over MySpace was the ability to send messages and perform certain functions without the need to refresh the page. I designed it to be a more fluid and streamlined replacement to MySpace. My MySpace profile was super complex, but there was much more I wanted to do that couldn't be done with HTML and CSS alone.
                </p>
                <p>
                    The name of the site came from my previous first name, Bobby. I legally changed my name to Michael as a teenager.
                </p>
                <p>
                    lots of cross-browser testing. 
                </p>
                <p>
                    I learned JavaScript, PHP, XML, AJAX, SQL, and everything else when I realized the limits of HTML and CSS.

                    I coded everything using the Notepad app on Windows. I remember often having to count through thousands of lines of code in different files just to locate the source of specific errors. It was painfully inefficient.
                </p>
            </ProjectDescription>
        </Project>
    )
}