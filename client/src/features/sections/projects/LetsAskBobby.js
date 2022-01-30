import { Project } from "../../components/project/Project"
import { ProjectDescription } from "../../components/project/ProjectDescription"

export const LetsAskBobby = () => {
    return (
        <Project 
        title="Let's Ask Bobby"
        period="Sept 2007 to July 2008"
        tech="HTML, CSS, JavaScript, PHP, SQL, MySQL, AJAX, XML, Apache, Windows (WAMP)">
            <ProjectDescription>
                <p>
                    Let's Ask Bobby was the first major personal project I had ever worked on. It was a social network I developed as a teen in an attempt to improve upon what I perceived to be several shortcomings of MySpace. Like MySpace, Let's Ask Bobby had core user functionalities like a login system, profile area, and sections for uploading photos and albums. One of the biggest improvements over MySpace was the ability to communicate and perform certain functions without the need to refresh the page. I designed it to be a more fluid and streamlined replacement to MySpace.
                </p>
                <p>
                    I finished the project (i.e., the site was functional), but I ultimately decided not to put it online or pursue it further. 

                    The name of the site came from my previous first name, Bobby. I legally changed my name to Michael as a teenager.

                    HOW:
                    By the time I started working on Let's Ask Bobby, I had already been using MySpace for roughly two years. I learned HTML and CSS from endless hours spent staring at MySpace source code. I made extravagant edits to my profile, but there was so much more I wanted to do with computer code.

                    To create the new site I envisioned, I realized I would need to learn JavaScript, PHP, XML, AJAX, SQL, and everything related to databases and servers.

                    I coded everything for Let's Ask Bobby using the Notepad app on Windows. I remember frequently having to count through thousands of lines of code in different files just to locate the source of specific errors.
                </p>
            </ProjectDescription>
        </Project>
    )
}