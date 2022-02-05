import { ProjectDescription } from "../../components/project/ProjectDescription"
import { Project } from "../../components/project/Project"
import photo1 from '../../../images/geller-portal/Folder1-300x199.png'
import photo1Big from '../../../images/geller-portal/Folder1.png'
import photo2 from '../../../images/geller-portal/Folder3-300x200.png'
import photo2Big from '../../../images/geller-portal/Folder3.png'
import photo3 from '../../../images/geller-portal/Main-Menu-300x201.png'
import photo3Big from '../../../images/geller-portal/Main-Menu.png'
import photo4 from '../../../images/geller-portal/gellerVendorsProgress1-300x200.jpg'
import photo4Big from '../../../images/geller-portal/gellerVendorsProgress1.jpg'
import photo5 from '../../../images/geller-portal/PO-Creator-300x200.png'
import photo5Big from '../../../images/geller-portal/PO-Creator.png'
import photo6 from '../../../images/geller-portal/PO-Creator2-300x200.png'
import photo6Big from '../../../images/geller-portal/PO-Creator2.png'


export const GellerPortal = () => {
    return (
        <Project
        title="Geller Portal"
        period="Jan 2012 to June 2012"
        tech="HTML, CSS, JavaScript, PHP, SQL, MySQL, AJAX, XML, Apache"
        images={[[photo4, photo4Big, 'Vendor profile with dummy data'], [photo5, photo5Big, 'Purchase order creator w/dummy data'], [photo6, photo6Big, 'Purchase order creator w/dummy data, alternate view'], [photo3, photo3Big, 'Dashboard'], [photo1,photo1Big, 'In-progress customer order, P.O. tab'], [photo2, photo2Big, 'Closed customer order, documents tab']]}>
            <ProjectDescription>
                <p>
                    Geller Portal was a system I created for my then employer Geller International to organize the company's suppliers and streamline the creation of purchase orders, invoices, reports, and statistics.
                </p>
                <p>
                    I was never asked to create Geller Portal, but I shocked by how ineffecient the office procedures were. I worked on Geller Portal at home after work every day for a couple of months before revealing the project to my boss. He was very pleased and quickly demanded its implementation and use.
                </p>
                <p>
                    I stored all the data in a MySQL database and retrieved the data using the Geller Portal. I also created Excel templates which queued the Geller Portal database to help quickly create pre-filled documents.
                </p>
                <p>
                    Like Let's Ask Bobby, I coded Geller Portal using basic Windows Notepad docs.
                </p>
                <p>
                    I remember enjoying this project very much, especially as it required working with a lot of numbers and data.
                </p>
            </ProjectDescription>
        </Project>
        
    )
}