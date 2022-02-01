import { Project } from "../../components/project/Project"
import { ProjectDescription } from "../../components/project/ProjectDescription"
import photo1 from '../../../images/collabolist/This-is-Collabolists-1-300x149.jpg'
import photo2 from '../../../images/collabolist/This-is-Collabolists-2-300x149.jpg'
import photo3 from '../../../images/collabolist/This-is-Collabolists-3-300x163.jpg'
import photo4 from '../../../images/collabolist/This-is-Collabolists-4-300x147.jpg'
import photo5 from '../../../images/collabolist/This-is-Collabolists-5-300x162.jpg'

export const Collabolist = () => {
    

    return (
        <Project
        title="Collabolist"
        period="Aug 2012 to Feb 2013; Feb 2015 to Jan 2016"
        tech="HTML, CSS, JavaScript, PHP, SQL, MySQL, AJAX, XML, Apache"
        images={[photo1, photo2, photo3, photo4, photo5]}>
            <ProjectDescription>
                <p>
                    Collabolist was my attempt at creating a quicker, simpler, and more convenient alternative to Excel for list creation.
                </p>
                <p>
                    As I worked at TransPerfect, I once again felt the frustration and inefficiency of Excel spreadsheets. Much time was wasted waiting for unwieldy Excel files to sync and open as TransPerfect created lists of all kinds using spreadsheets. Collabolist was my attempt at a solution.
                </p>
                <p>
                    I worked on Collabolist every hour I was not at work.Fortunately, I had just recently finished work on Geller Portal, so programming was still fresh in my mind. As with my previous projects, I used AJAX extensively to enable functionality without the need to refresh the browser page.
                </p>
                <p>
                    About a year ago, I discovered the online app Airtable and have been a huge evangelist of the service ever since. It is everything I would have liked Collabolist to be.
                </p>
            </ProjectDescription>
        </Project>
    )
}