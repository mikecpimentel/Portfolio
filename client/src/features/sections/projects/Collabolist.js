import { Project } from "../../components/project/Project"
import { ProjectDescription } from "../../components/project/ProjectDescription"
import photo1 from '../../../images/collabolist/This-is-Collabolists-1-300x149.jpg'
import photo1Big from '../../../images/collabolist/This-is-Collabolists-1.jpg'
import photo2 from '../../../images/collabolist/This-is-Collabolists-2-300x149.jpg'
import photo2Big from '../../../images/collabolist/This-is-Collabolists-2.jpg'
import photo3 from '../../../images/collabolist/This-is-Collabolists-3-300x163.jpg'
import photo3Big from '../../../images/collabolist/This-is-Collabolists-3.jpg'
import photo4 from '../../../images/collabolist/This-is-Collabolists-4-300x147.jpg'
import photo4Big from '../../../images/collabolist/This-is-Collabolists-4.jpg'
import photo5 from '../../../images/collabolist/This-is-Collabolists-5-300x162.jpg'
import photo5Big from '../../../images/collabolist/This-is-Collabolists-5.jpg'

export const Collabolist = () => {
    

    return (
        <Project
        title="Collabolist"
        period="Aug 2012 to Feb 2013; Feb 2015 to Jan 2016"
        tech="HTML, CSS, JavaScript, PHP, SQL, MySQL, AJAX, XML, Apache"
        images={[[photo5, photo5Big, 'Add new row (dummy data)'], [photo4, photo4Big, 'Column functions'], [photo3, photo3Big, 'Row functions'], [photo2, photo2Big, 'Search function'], [photo1, photo1Big, 'Alternate view']]}>
            <ProjectDescription>
                <p>
                    Collabolist was my attempt at creating a quicker, simpler, and more convenient alternative to Excel for list creation.
                </p>
                <p>
                    At the time, I worked at a company called TransPerfect and once again felt the frustration and inefficiency of Excel spreadsheets. We frequently used unwieldy Excel files which took forever to sync and load. Collabolist was my attempt at a solution.
                </p>
                <p>
                    I worked on Collabolist every hour I was not at work. Fortunately, I had just recently finished work on Geller Portal, so programming was still fresh in my mind. As with my previous projects, I used AJAX extensively to enable functionality without the need to refresh the browser page.
                </p>
                <p>
                    I know I completed a lot more development on this than the photos suggest, but I cannot locate other, more recent screenshots.
                </p>
            </ProjectDescription>
        </Project>
    )
}