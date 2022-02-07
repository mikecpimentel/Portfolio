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
                    At the time, I worked at a company called TransPerfect where I helped set up computers, essentially. We frequently used unwieldy Excel files for managing passwords, and these files usually took several minutes to sync and load. I was once again witness to the inefficiency of Excel spreadsheets. Collabolist was my attempt at a solution.
                </p>
                <p>
                    I worked on Collabolist every hour I was not at work. I had just recently finished work on Geller Portal, so programming was still fresh in my mind. As with my previous projects, I used AJAX extensively to enable functionality without the need to refresh the browser page.
                </p>
                <p>
                    The photos do not reflect the final product, but I cannot locate other, more recent screenshots.
                </p>
                <p>
                    Note: The images have the plural "Collabolists" since I ultimately changed the name due to the singular already being reserved. I preferred the singular, however.
                </p>
            </ProjectDescription>
        </Project>
    )
}