import { ProjectDescription } from "../../components/project/ProjectDescription"
import { Project } from "../../components/project/Project"

export const GellerPortal = () => {
    return (
        <Project
        title="Geller Portal"
        period="Jan 2012 to June 2012"
        tech="HTML, CSS, JavaScript, PHP, SQL, MySQL, AJAX, XML, Apache, Windows (WAMP)">
            <ProjectDescription>
                <p>
                    Geller Portal was a system I created for my then employer Geller International to organize the company's suppliers and streamline the creation of purchase orders, invoices, reports, and statistics.

                    All data entered into the system was stored in a MySQL database and retrieved using the Geller Portal system and Excel. I created complimentary Excel templates which queued the Geller Portal database to help quickly create pre-filled documents.

                    I worked on Geller Portal at home after work every day for a couple of months before revealing the project to my boss. He was very pleased and quickly demanded its implementation and use.

                    WHY:
                    I was concerned by the inefficiency of office workers manually entering data into spreadsheets for each and every transaction. I wanted a system which would keep all of the different pieces of information organized in a  central database to be used for dynamically generating documents, creating internal reports, and promoting sound decision making. There was so much data sitting idly in numerous locations.

                    HOW:
                    Because of my experience with Let's Ask Bobby years earlier, I figured that creating a system for the Geller International office would be exciting and not too difficult to accomplish. I refamiliarized myself PHP, JavaScript, SQL and everything else I had used before.

                    Like Let's Ask Bobby, I also coded Geller Portal using the basic Windows Notepad app.

                    I remember enjoying this project very much, especially as it required working with a lot of numbers and data.
                </p>
            </ProjectDescription>
        </Project>
        
    )
}