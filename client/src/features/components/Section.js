import { Outlet, NavLink, useParams } from "react-router-dom"
import aphoto1 from '../../images/letsaskbobby_logo.gif'
import bphoto1 from '../../images/geller-portal/Folder1-300x199.png'
import bphoto1Big from '../../images/geller-portal/Folder1.png'
import bphoto2 from '../../images/geller-portal/Folder3-300x200.png'
import bphoto2Big from '../../images/geller-portal/Folder3.png'
import bphoto3 from '../../images/geller-portal/Main-Menu-300x201.png'
import bphoto3Big from '../../images/geller-portal/Main-Menu.png'
import bphoto4 from '../../images/geller-portal/gellerVendorsProgress1-300x200.jpg'
import bphoto4Big from '../../images/geller-portal/gellerVendorsProgress1.jpg'
import bphoto5 from '../../images/geller-portal/PO-Creator-300x200.png'
import bphoto5Big from '../../images/geller-portal/PO-Creator.png'
import bphoto6 from '../../images/geller-portal/PO-Creator2-300x200.png'
import bphoto6Big from '../../images/geller-portal/PO-Creator2.png'
import cphoto1 from '../../images/collabolist/This-is-Collabolists-1-300x149.jpg'
import cphoto1Big from '../../images/collabolist/This-is-Collabolists-1.jpg'
import cphoto2 from '../../images/collabolist/This-is-Collabolists-2-300x149.jpg'
import cphoto2Big from '../../images/collabolist/This-is-Collabolists-2.jpg'
import cphoto3 from '../../images/collabolist/This-is-Collabolists-3-300x163.jpg'
import cphoto3Big from '../../images/collabolist/This-is-Collabolists-3.jpg'
import cphoto4 from '../../images/collabolist/This-is-Collabolists-4-300x147.jpg'
import cphoto4Big from '../../images/collabolist/This-is-Collabolists-4.jpg'
import cphoto5 from '../../images/collabolist/This-is-Collabolists-5-300x162.jpg'
import cphoto5Big from '../../images/collabolist/This-is-Collabolists-5.jpg'
import dphoto1 from '../../images/year-2053/Phone-Screenshot-1-169x300.png'
import dphoto1Big from '../../images/year-2053/Phone-Screenshot-1.png'
import dphoto2 from '../../images/year-2053/Phone-Screenshot-2-169x300.png'
import dphoto2Big from '../../images/year-2053/Phone-Screenshot-2.png'
import dphoto3 from '../../images/year-2053/Phone-Screenshot-4-169x300.png'
import dphoto3Big from '../../images/year-2053/Phone-Screenshot-4.png'
import dphoto4 from '../../images/year-2053/Screenshot_2017-12-24-04-59-07-169x300.png'
import dphoto4Big from '../../images/year-2053/Screenshot_2017-12-24-04-59-07-576x1024.png' 
import dphoto5 from '../../images/year-2053/Year-2053-Screenshot-1-169x300.png'
import dphoto5Big from '../../images/year-2053/Year-2053-Screenshot-1-576x1024.png'
import dphoto6 from '../../images/year-2053/Year-2053-Logo-Revised-2-300x300.png'
import ephoto2 from '../../images/wordpress/how-to-learn-a-language-300x169.png'
import ephoto2Big from '../../images/wordpress/how-to-learn-a-language-768x432.png'
import ephoto3 from '../../images/wordpress/Screenshot-2021-06-24-145705-289x300.png'
import ephoto3Big from '../../images/wordpress/Screenshot-2021-06-24-145705-768x797.png'
import ephoto4 from '../../images/wordpress/Screenshot-2021-06-25-152251-300x256.png'
import ephoto4Big from '../../images/wordpress/Screenshot-2021-06-25-152251-768x656.png'
import ephoto5 from '../../images/wordpress/Screenshot-2021-06-25-152304-300x161.png'
import ephoto5Big from '../../images/wordpress/Screenshot-2021-06-25-152304-1024x550.png'
import ephoto6 from '../../images/wordpress/Screenshot-2021-06-25-152312-300x154.png'
import ephoto6Big from '../../images/wordpress/Screenshot-2021-06-25-152312-1024x526.png'
import ephoto7 from '../../images/wordpress/20210404_055244-2-300x300.jpg'
import ephoto7Big from '../../images/wordpress/20210404_055244-2-768x768.jpg'
import { Project } from "./project/Project"

const sectionState = {
    "pages": {
        "byName": {
            "lets-ask-bobby": {
                "title": "Let's Ask Bobby",
                "period": "Sept 2007 to July 2008",
                "tech": "HTML, CSS, JavaScript, PHP, SQL, MySQL, AJAX, XML, Apache",
                "images" : [
                    [aphoto1, aphoto1]
                ],
                "description": [
                    ['p', 'Let\'s Ask Bobby was a social networking site I developed as a teen. An avid MySpace user, this was my attempt to improve upon what I perceived to be the many shortcomings of MySpace. Like MySpace, Let\'s Ask Bobby had core user functionalities like a login system, profile area, and sections for uploading photos and albums.'],
                    ['p', 'The project comes from my former name. I used to be called Bobby until I changed it legally as a teen.'],
                    ['p', 'The biggest improvement I made over MySpace was the ability to send messages and perform certain functions without the need to refresh the page (using AJAX).'],
                    ['p', 'I learned HTML and CSS by staring at MySpace code for hours, but I quickly learned the limits of only using client-side technologies. For this project, I learned JavaScript, PHP, XML, AJAX, and SQL.'],
                    ['p', 'I coded everything using the Notepad app on Windows. I remember often having to count through thousands of lines of code in different files just to locate bugs (since the editor had no line numbers). It was painfully inefficient.'],
                    ['p', 'I never took any screenshots of this project, but I found the comically dated logo among the files.'],
                ]
            },
            "collabolist": {
                "title": "Collabolist",
                "period": "Aug 2012 to Feb 2013; Feb 2015 to Jan 2016",
                "tech": "HTML, CSS, JavaScript, PHP, SQL, MySQL, AJAX, XML, Apache",
                "images": [
                    [cphoto5, cphoto5Big, 'Add new row (dummy data)'],
                    [cphoto4, cphoto4Big, 'Column functions'],
                    [cphoto3, cphoto3Big, 'Row functions'],
                    [cphoto2, cphoto2Big, 'Search function'],
                    [cphoto1, cphoto1Big, 'Alternate view']
                ],
                "description": [
                    ['p', 'Collabolist was my attempt at creating a quicker, simpler, and more convenient alternative to Excel for list creation.'],
                    ['p', 'At the time, I worked at a company called TransPerfect where I helped set up computers, essentially. We frequently used unwieldy Excel files for managing passwords, and these files usually took several minutes to sync and load. I was once again witness to the inefficiency of Excel spreadsheets. Collabolist was my attempt at a solution.'],
                    ['p', 'I worked on Collabolist every hour I was not at work. I had just recently finished work on Geller Portal, so programming was still fresh in my mind. As with my previous projects, I used AJAX extensively to enable functionality without the need to refresh the browser page.'],
                    ['p', 'The photos do not reflect the final product, but I cannot locate other, more recent screenshots.'],
                    ['p', 'Note: The images have the plural "Collabolists" since I ultimately changed the name due to the singular already being reserved. I preferred the singular, however.'],
                ]
            },
            "geller-portal": {
                "title": "Geller Portal",
                "period": "Jan 2012 to June 2012",
                "tech": "HTML, CSS, JavaScript, PHP, SQL, MySQL, AJAX, XML, Apache",
                "images": [
                    [bphoto4, bphoto4Big, 'Vendor profile with dummy data'],
                    [bphoto5, bphoto5Big, 'Purchase order creator w/dummy data'],
                    [bphoto6, bphoto6Big, 'Purchase order creator w/dummy data, alternate view'],
                    [bphoto3, bphoto3Big, 'Dashboard'],
                    [bphoto1, bphoto1Big, 'In-progress customer order, P.O. tab'],
                    [bphoto2, bphoto2Big, 'Closed customer order, documents tab']
                ],
                "description": [
                    ['p', 'Geller Portal was a system I created for my then employer Geller International. Originally hired to perform basic tasks such as driving and delivering things, I was passively witness to their many inefficient in-office processes.'],
                    ['p', 'Determined to help them better organize the company\'s data, as well as help them streamline the creation of purchase orders, invoices, reports, and statistics, I took it upon myself to develop for them a system that could help tame the chaos.'],
                    ['p', 'I worked on Geller Portal at home after work every day for a couple of months before revealing the project to my boss. He was very pleased and quickly demanded its implementation and use.'],
                    ['p', 'Building off the knowledge I had gained from working on Let\'s Ask Bobby years earlier, I once again used PHP, JavaScript, and SQL to create the system. I stored all the data in a MySQL database and retrieved it using the Geller Portal as well as Excel templates that I created to queue the database and create pre-filled documents.'],
                    ['p', 'I remember enjoying this project very much, especially as it required working with a lot of numbers and data.'],
                ]
            },
            "year-2053": {
                "title": "Year 2053",
                "period": "Sept 2016 to Jan 2018",
                "tech": "Java, SQLite, Android Studio, Audacity, Photoshop",
                "images": [
                    [dphoto1, dphoto1Big],
                    [dphoto2, dphoto2Big],
                    [dphoto3, dphoto3Big],
                    [dphoto4, dphoto4Big],
                    [dphoto5, dphoto5Big],
                    [dphoto6, dphoto6]
                ],
                "description": [
                    ['p', 'Year 2053 was a text-based choose-your-own-adventure-type text game complete with background sound effects and voice acting (myself doing all the voices). Every choice the app user makes in the game affects the story. It seemed like a fun-ish project to work on. This was my one and only foray into Android development.'],
                    ['p', 'There were so many challenging components to this project that I had to solve. I had to figure out how to program the evolving nature of the story, especially with the algorithmic diverging and intersecting of storylines. I programmed the game to dynamically and seamlessly connect over a hundred audio files in different orders and patterns depending on choices made in the past. I made huge online diagrams to help me connect all the pieces.'],
                    ['p', 'One interesting challenge was developing the functions that enabled the audio and text to sync up perfectly.'],
                    ['p', 'With this project, I gained experience with:'],
                    ['ul', ['Performance testing and analysis', 'Android development tools', 'Java programming and multithreading', 'Audio recording and editing', 'I also learned how to create basic graphics']],
                    ['p', 'I recorded the audio in a freezing-cold car (through the Indiana wintertime), which was the closest thing I had to a studio.']
                ]
            },
            "wordpress": {
                "title": "WordPress Stuff",
                "period": "Mar 2019 to Jun 2021",
                "tech": "WordPress, Elementor, PHP, CSS, HTML, Photoshop, Illustrator, Google Analytics",
                "images": [
                    [ephoto2, ephoto2Big, 'Example of a cover image for one of my articles on one of my websites.'],
                    [ephoto3, ephoto3Big, 'I compiled information for most common chemicals used in baby wipes for one of my websites.'],
                    [ephoto4, ephoto4Big, 'I got really good at making cookies...'],
                    [ephoto5, ephoto5Big, '..but ultimately finalized only three recipes.'],
                    [ephoto6, ephoto6Big, 'Landing page.'],
                    [ephoto7, ephoto7Big, 'Label I designed on Illustrator.']
                ],
                "description": [
                    ['p', 'I discovered WordPress in 2019. I had heard of it before, but had not the slightest idea of what it was. Over a period of two years, I started about eight websites covering everything from finance to travel to parenting (even though I am not a parent myself.. it seemed like a fun project during lockdown).'],
                    ['p', 'Since I did everything myself (writing, designing, etc), I couldn\'t produce enough high-quality articles to garner sufficient web traffic.'],
                    ['p', 'None of these websites are online anymore, mostly because I couldn\'t afford the web hosting. I still have backups for each. Experimenting with WordPress was not super fulfilling, but I learned a lot of worthwhile information. I read countless books on marketing, time management, productivity, business management, and others. I also gained a deep understanding of the operations side of the modern internet.'],
                    ['p', 'A few of the things I learned over the two years were:'],
                    ['ul',['Content writing and editing', 'How to create decent web graphics using Adobe products', 'Basic project management', 'How to organize large amounts of information', 'Legal topics (e.g., copyrights, privacy)', 'Web security (e.g., firewalls, Cloudflare, TLS)', 'UX/UI', 'Search engine optimization and marketing', 'Web analytics']],
                    ['p', 'My final WordPress project was Omaha Cookie Co., an online-only cookie shop specializing in premium cookies. I learned a lot about food chemistry and the like. I probably baked over a thousand cookies to test recipes, most of which I sent to my best friend by mail.'],
                    ['p', 'For Omaha Cookie Co., I created an ingredient-management and costing system to perfectly account for per-cookie and per-product costs. I also made a nutrition facts system to generate accurate labels using my recipes.']
                ]
            }
        },
        "allNames": ['lets-ask-bobby', 'geller-portal', 'collabolist', 'year-2053', 'wordpress']
    }
}

export const Section = (props) => {
    
    const sectionURL = props.which;

  return (
      <>
        <div className='section-top'>
            <h3 className="section-header animate__animated animate__fadeIn animate__faster">{props.which}</h3>
            <div className='sub-section-links'>
              {props.children}
              {<NavLink to={`/${sectionURL}`} end>Intro</NavLink>}
              {sectionState.pages.allNames.map(name => <NavLink to={`/${sectionURL}/${name}`}>{sectionState.pages.byName[name].title}</NavLink>)}
              
            </div>
        </div> 
        <div className='section-bottom'>
            <Outlet context={sectionState} />
        </div>
      </>
  )
}