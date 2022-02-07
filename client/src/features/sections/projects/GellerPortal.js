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
                    Geller Portal was a system I created for my then employer Geller International. Originally hired to perform basic tasks such as driving and delivering things, I was passively witness to their many inefficient in-office processes.
                </p>
                <p>
                    Determined to help them better organize the company's data, as well as help them streamline the creation of purchase orders, invoices, reports, and statistics, I took it upon myself to develop for them a system that could help tame the chaos.
                </p>
                <p>
                    I worked on Geller Portal at home after work every day for a couple of months before revealing the project to my boss. He was very pleased and quickly demanded its implementation and use.
                </p>
                <p>
                    Building off the knowledge I had gained from working on Let's Ask Bobby years earlier, I once again used PHP, JavaScript, and SQL to create the system. I stored all the data in a MySQL database and retrieved it using the Geller Portal as well as Excel templates that I created to queue the database and create pre-filled documents.
                </p>
                <p>
                    I remember enjoying this project very much, especially as it required working with a lot of numbers and data.
                </p>
            </ProjectDescription>
        </Project>
        
    )
}