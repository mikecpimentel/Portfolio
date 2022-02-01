import { ProjectDescription } from "../../components/project/ProjectDescription"
import { Project } from "../../components/project/Project"
import photo1 from '../../../images/geller-portal/Folder1-300x199.png'
import photo2 from '../../../images/geller-portal/Folder3-300x200.png'
import photo3 from '../../../images/geller-portal/Main-Menu-300x201.png'
import photo4 from '../../../images/geller-portal/gellerVendorsProgress1-300x200.jpg'
import photo5 from '../../../images/geller-portal/PO-Creator-300x200.png'


export const GellerPortal = () => {
    return (
        <Project
        title="Geller Portal"
        period="Jan 2012 to June 2012"
        tech="HTML, CSS, JavaScript, PHP, SQL, MySQL, AJAX, XML, Apache"
        images={[photo1, photo2, photo3, photo4, photo5]}>
            <ProjectDescription>
                <p>
                    Geller Portal was a system I created for my then employer Geller International to organize the company's suppliers and streamline the creation of purchase orders, invoices, reports, and statistics.
                </p>
                <p>
                    I stored all the data in a MySQL database and retrieved the data using Geller Portal and Excel. I created complimentary Excel templates which queued the Geller Portal database to help quickly create pre-filled documents.
                </p>
                <p>
                    I worked on Geller Portal at home after work every day for a couple of months before revealing the project to my boss. He was very pleased and quickly demanded its implementation and use.

                    Like Let's Ask Bobby, I coded Geller Portal using basic Windows Notepad docs. Very inefficient.

                    I remember enjoying this project very much, especially as it required working with a lot of numbers and data.
                </p>
            </ProjectDescription>
        </Project>
        
    )
}