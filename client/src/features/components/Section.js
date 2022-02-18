import { Outlet, NavLink, useParams } from "react-router-dom";
import aphoto1 from "../../images/letsaskbobby_logo.gif";
import bphoto1 from "../../images/geller-portal/Folder1-300x199.png";
import bphoto1Big from "../../images/geller-portal/Folder1.png";
import bphoto2 from "../../images/geller-portal/Folder3-300x200.png";
import bphoto2Big from "../../images/geller-portal/Folder3.png";
import bphoto3 from "../../images/geller-portal/Main-Menu-300x201.png";
import bphoto3Big from "../../images/geller-portal/Main-Menu.png";
import bphoto4 from "../../images/geller-portal/gellerVendorsProgress1-300x200.jpg";
import bphoto4Big from "../../images/geller-portal/gellerVendorsProgress1.jpg";
import bphoto5 from "../../images/geller-portal/PO-Creator-300x200.png";
import bphoto5Big from "../../images/geller-portal/PO-Creator.png";
import bphoto6 from "../../images/geller-portal/PO-Creator2-300x200.png";
import bphoto6Big from "../../images/geller-portal/PO-Creator2.png";
import cphoto1 from "../../images/collabolist/This-is-Collabolists-1-300x149.jpg";
import cphoto1Big from "../../images/collabolist/This-is-Collabolists-1.jpg";
import cphoto2 from "../../images/collabolist/This-is-Collabolists-2-300x149.jpg";
import cphoto2Big from "../../images/collabolist/This-is-Collabolists-2.jpg";
import cphoto3 from "../../images/collabolist/This-is-Collabolists-3-300x163.jpg";
import cphoto3Big from "../../images/collabolist/This-is-Collabolists-3.jpg";
import cphoto4 from "../../images/collabolist/This-is-Collabolists-4-300x147.jpg";
import cphoto4Big from "../../images/collabolist/This-is-Collabolists-4.jpg";
import cphoto5 from "../../images/collabolist/This-is-Collabolists-5-300x162.jpg";
import cphoto5Big from "../../images/collabolist/This-is-Collabolists-5.jpg";
import dphoto1 from "../../images/year-2053/Phone-Screenshot-1-169x300.png";
import dphoto1Big from "../../images/year-2053/Phone-Screenshot-1.png";
import dphoto2 from "../../images/year-2053/Phone-Screenshot-2-169x300.png";
import dphoto2Big from "../../images/year-2053/Phone-Screenshot-2.png";
import dphoto3 from "../../images/year-2053/Phone-Screenshot-4-169x300.png";
import dphoto3Big from "../../images/year-2053/Phone-Screenshot-4.png";
import dphoto4 from "../../images/year-2053/Screenshot_2017-12-24-04-59-07-169x300.png";
import dphoto4Big from "../../images/year-2053/Screenshot_2017-12-24-04-59-07-576x1024.png";
import dphoto5 from "../../images/year-2053/Year-2053-Screenshot-1-169x300.png";
import dphoto5Big from "../../images/year-2053/Year-2053-Screenshot-1-576x1024.png";
import dphoto6 from "../../images/year-2053/Year-2053-Logo-Revised-2-300x300.png";
import ephoto2 from "../../images/wordpress/how-to-learn-a-language-300x169.png";
import ephoto2Big from "../../images/wordpress/how-to-learn-a-language-768x432.png";
import ephoto3 from "../../images/wordpress/Screenshot-2021-06-24-145705-289x300.png";
import ephoto3Big from "../../images/wordpress/Screenshot-2021-06-24-145705-768x797.png";
import ephoto4 from "../../images/wordpress/Screenshot-2021-06-25-152251-300x256.png";
import ephoto4Big from "../../images/wordpress/Screenshot-2021-06-25-152251-768x656.png";
import ephoto5 from "../../images/wordpress/Screenshot-2021-06-25-152304-300x161.png";
import ephoto5Big from "../../images/wordpress/Screenshot-2021-06-25-152304-1024x550.png";
import ephoto6 from "../../images/wordpress/Screenshot-2021-06-25-152312-300x154.png";
import ephoto6Big from "../../images/wordpress/Screenshot-2021-06-25-152312-1024x526.png";
import ephoto7 from "../../images/wordpress/20210404_055244-2-300x300.jpg";
import ephoto7Big from "../../images/wordpress/20210404_055244-2-768x768.jpg";
import codecademyLogo from "../../../images/education/320px-Codecademy.svg.png";
import hackerRankLogo from "../../../images/education/800px-HackerRank_Icon-1000px.png";
import chaffeyLogo from "../../../images/education/logo-and-type.png";
import ivcLogo from "../../../images/education/ivc-logo-color.png";
import mtSacLogo from "../../../images/education/fullcolor_email.jpg";
import { Project } from "./Project";

const sectionState = {
   pages: {
      bySection: {
         skills: {
            byName: {
               "skills-intro": {
                  description: [
                     [
                        "p",
                        'I\'m fortunate to have been able to accumulate a few skills over the years. The next few tabs will introduce a bit of what I can currently offer your organization, including a few "extra credit" skills that could potentially of use.',
                     ],
                     [
                        "p",
                        "These lists are, of course, non-exhaustive and subject to frequent expansion. I continue learning each and every day.",
                     ],
                  ],
               },
               "base-skills": {
                  title: "Base Skills",
                  skills: [
                     [
                        "HTML",
                        9,
                        "Extensive experience using HTML and CSS, including many advanced concepts. I'm also great at optimizing pages for small screens. I have not yet fully optimized this site for mobile, however 😐 It's coming soon.",
                     ],
                     [
                        "React",
                        4,
                        "I am relatively new with React but have a firm grasp of the technology (this site was created using React). I know the latest API features and have used various common libraries, including react-router-dom, which is used extensively on this site. I will no doubt gain a lot more advanced knowledge over the coming months.",
                     ],
                     [
                        "Redux",
                        4,
                        "Like with React, my experience with Redux is relatively recent but growing. I have used it for managing application state, and have implemented many of its modern features including those included in Redux Toolkit (e.g., RTK Query). I am gaining more experience with Redux every day.",
                     ],
                     [
                        "JavaScript",
                        8,
                        "I have extensive knowledge of JavaScript, from many of its most modern features to some of its older, now-obsolete features (useful for understanding legacy code, perhaps). My recent use of JavaScript has centered much around Node development.",
                     ],
                     [
                        "APIs",
                        4,
                        "My understanding is solid but my experience is incomplete. I have some experience using and creating REST APIs, but I have room to learn things in greater depth. I have used Express and have a basic knowledge of authentication and security concerns, including the use of Express middlewares.",
                     ],
                     [
                        "Databases",
                        7,
                        "I love databases (perhaps it reflects my love for data in general). I have a decent amount of experience designing stable and efficient tables, and using SQL to find exactly what I need. I have been using PostgreSQL recently, but I also have much past experience using MySQL. I have much to learn to fully master many of the most advanced features, but I have already had a pretty good start.",
                     ],
                     [
                        "Algorithms",
                        5,
                        "I have earned 6 / 6 stars for Problem Solving (i.e., Algorithms) on HackerRank. There's still much to learn, but I think I have a lot of the basics down. I can create algorithms that are efficient in runtime and memory use.",
                     ],
                     [
                        "Design",
                        7,
                        "I have an intermediate understanding of web design and usability principles. I have designed many websites (including this one, of course), but I certainly have more to improve upon.",
                     ],
                     [
                        "Mandarin",
                        5,
                        "One of my greastest passions in life is learning and using foreign languages. I have learned so many in my life, far more than the two listed here, but I have lost language skills in many of them due to lack of opportunity for use. Mandarin is one language I can still communicate in with at least marginal competence. I used to be able to read and write many traditional characters, but that knowledge has recently grown a bit stale.",
                     ],
                     [
                        "Spanish",
                        5,
                        "I can speak and understand a lot of Spanish, but I've never spent too much time around Spanish speakers. When I was younger, I used to work in a warehouse where virtually all the other employees spoke only Spanish. Working there allowed me to practice my Spanish over a relatively extended period of time, but that time has long passed.",
                     ],
                     [
                        "Writing",
                        6,
                        "I read a lot and can write somewhat well, but I do not produce as much content as I would like. I hope to become a lot more prolific in my online writings.",
                     ],
                     [
                        "PHP",
                        5,
                        "My first several personal projects were coded in PHP. However, it has been a long while since I have used it.",
                     ],
                     [
                        "Java",
                        3,
                        "I have created an Android app using Java, but that was years ago. I have also used c++ in the past, so overall I have some experience with object-oriented programming.",
                     ],
                  ],
               },
               "future-skills": {
                  description: [
                     [
                        "p",
                        "I could list a few hundred things I plan to learn this decade, but my immediate priority is to learn anything and everything that will make me a more effective team member and employee. High on my priority list are Python, server-side rendering technologies (Next.js), GraphQL, and so, so many others.",
                     ],
                     [
                        "p",
                        "A few other things I might learn in the near future include:",
                     ],
                     [
                        "ul",
                        [
                           "Using code to create internal and consumer financial products",
                           "Learning how to use artificial intelligence to improve decision making",
                           "Learning blockchain technology and its potential applications",
                           "Mastering a few more spoken languages",
                        ],
                     ],
                  ],
               },
            },
            allNames: [
               "lets-ask-bobby",
               "geller-portal",
               "collabolist",
               "year-2053",
               "wordpress",
            ],
         },
         education: {
            byName: {
               "education-intro": {
                  description: [
                     [
                        "p",
                        "My life's endeavor to educate myself has been fraught but unceasing. Owing to a largely chaotic childhood, my life has been decidedly nontraditional, especially when it came to education. I was expelled from 7th grade, dropped out permanently in 9th grade — but ultimately got into community college.",
                     ],
                     [
                        "p",
                        "By the time I got accepted to university, my mind had essentially melted from a lifetime of sickening stress and anxiety. I had health insurance and decent medical care for the first time in my life through the university, but world-class health insurance was not enough to erase two decades of insecurity. I withdrew — in good standing — from the university shortly before graduating in order to work on myself full-time.",
                     ],
                     [
                        "p",
                        "I've lived in my car in the past and have gone almost my entire life without a bed, but my optimism for the future has been unrelenting. A bright-eyed vision for the future is how I stay alive.",
                     ],
                     [
                        "p",
                        "The next few tabs offer some of the educational highlights from my life.",
                     ],
                  ],
               },
               "online-education": {
                  "institution-box": [
                     {
                        institution: "Codecademy",
                        subheading: "Full-Stack Engineering Cert",
                        logo: codecademyLogo,
                     },
                     {
                        institution: "HackerRank",
                        subheading: "Algorithms 6/6",
                        logo: hackerRankLogo,
                     },
                  ],
                  description: [
                     {
                        element: "p",
                        attr: [],
                        children: [
                           {
                              element: "a",
                              attr: [
                                 {
                                    name: "href",
                                    value: "https://www.codecademy.com/profiles/michaelPimentel9180632744/certificates/5f7e644d833c070013ef47c4",
                                 },
                                 {
                                    name: "rel",
                                    value: "noreferrer",
                                 },
                                 {
                                    name: "target",
                                    value: "_blank",
                                 },
                              ],
                              children: ["Codecademy Cert"],
                           },
                        ],
                     },
                     {
                        element: "p",
                        attr: [],
                        children: [
                           {
                              element: "a",
                              attr: [
                                 {
                                    name: "href",
                                    value: "https://www.hackerrank.com/mikecpimentel",
                                 },
                                 {
                                    name: "rel",
                                    value: "noreferrer",
                                 },
                                 {
                                    name: "target",
                                    value: "_blank",
                                 },
                              ],
                              children: ["HackerRank Profile"],
                           },
                        ],
                     },
                  ],
               },
               "pre-university": {
                  "institution-box": [
                     {
                        institution: "Mt. San Antonio College",
                        subheading: "Walnut, CA",
                        logo: mtSacLogo,
                     },
                     {
                        institution: "Irvine Valley College",
                        subheading: "Irvine, CA",
                        logo: ivcLogo,
                     },
                     {
                        institution: "Chaffey College",
                        subheading: "Rancho Cucamonga, CA",
                        logo: chaffeyLogo,
                     },
                  ],
                  description: [
                     {
                        element: "p",
                        attr: [],
                        children: [
                           "Select classes I took before transferring to university. The overall course grade I received is indicated on the left.",
                        ],
                     },
                     {
                        element: "ul",
                        attr: [],
                        children: [
                           {
                              element: "li",
                              attr: [],
                              children: [
                                 "A | Calculus III (Multivariate &amp; Vector Calculus)",
                              ],
                           },
                           {
                              element: "li",
                              attr: [],
                              children: [
                                 "A | Linear Algebra &amp; Differential Equations",
                              ],
                           },
                           {
                              element: "li",
                              attr: [],
                              children: ["A | Statistics"],
                           },
                           {
                              element: "li",
                              attr: [],
                              children: ["A | Financial Accounting"],
                           },
                           {
                              element: "li",
                              attr: [],
                              children: ["A | Managerial Accounting"],
                           },
                           {
                              element: "li",
                              attr: [],
                              children: ["A | Microeconomics"],
                           },
                           {
                              element: "li",
                              attr: [],
                              children: ["A | Programming in C++"],
                           },
                           {
                              element: "li",
                              attr: [],
                              children: [
                                 "A | General Chemistry (I) &amp; Laboratory",
                              ],
                           },
                           {
                              element: "li",
                              attr: [],
                              children: [
                                 "B | General Chemistry (II) &amp; Laboratory",
                              ],
                           },
                        ],
                     },
                  ],
               },
            },
            allNames: [],
         },
         projects: {
            byName: {
               "projects-intro": {
                  description: [
                     [
                        "p",
                        "I have had access to a computer in some form throughout my life, and coding was a hobby I engaged in whenever I had the opportunity. I never imagined, however, that coding could be a viable career option (for some strange reason).",
                     ],
                     [
                        "p",
                        "Here you will find some of the projects I have worked on over the years, sorted in ascending chronological order. Aside from this portfolio site, only projects from the past are listed. My recent projects are still in progress.",
                     ],
                     [
                        "p",
                        "All projects include a list of images at the bottom.",
                     ],
                  ],
               },
               "lets-ask-bobby": {
                  title: "Let's Ask Bobby",
                  period: "Sept 2007 to July 2008",
                  tech: "HTML, CSS, JavaScript, PHP, SQL, MySQL, AJAX, XML, Apache",
                  images: [[aphoto1, aphoto1]],
                  description: [
                     {
                        element: "p",
                        attr: [],
                        children: [
                           "Let's Ask Bobby was a social networking site I developed as a teen. An avid MySpace user, this was my attempt to improve upon what I perceived to be the many shortcomings of MySpace. Like MySpace, Let's Ask Bobby had core user functionalities like a login system, profile area, and sections for uploading photos and albums.",
                        ],
                     },
                     {
                        element: "p",
                        attr: [],
                        children: [
                           "The project comes from my former name. I used to be called Bobby until I changed it legally as a teen.",
                        ],
                     },
                     {
                        element: "p",
                        attr: [],
                        children: [
                           "The biggest improvement I made over MySpace was the ability to send messages and perform certain functions without the need to refresh the page (using AJAX).",
                        ],
                     },
                     {
                        element: "p",
                        attr: [],
                        children: [
                           "I learned HTML and CSS by staring at MySpace code for hours, but I quickly learned the limits of only using client-side technologies. For this project, I learned JavaScript, PHP, XML, AJAX, and SQL.",
                        ],
                     },
                     {
                        element: "p",
                        attr: [],
                        children: [
                           "I coded everything using the Notepad app on Windows. I remember often having to count through thousands of lines of code in different files just to locate bugs (since the editor had no line numbers). It was painfully inefficient.",
                        ],
                     },
                     {
                        element: "p",
                        attr: [],
                        children: [
                           "I never took any screenshots of this project, but I found the comically dated logo among the files.",
                        ],
                     },
                  ],
               },
               collabolist: {
                  title: "Collabolist",
                  period: "Aug 2012 to Feb 2013; Feb 2015 to Jan 2016",
                  tech: "HTML, CSS, JavaScript, PHP, SQL, MySQL, AJAX, XML, Apache",
                  images: [
                     [cphoto5, cphoto5Big, "Add new row (dummy data)"],
                     [cphoto4, cphoto4Big, "Column functions"],
                     [cphoto3, cphoto3Big, "Row functions"],
                     [cphoto2, cphoto2Big, "Search function"],
                     [cphoto1, cphoto1Big, "Alternate view"],
                  ],
                  description: [
                     [
                        "p",
                        "Collabolist was my attempt at creating a quicker, simpler, and more convenient alternative to Excel for list creation.",
                     ],
                     [
                        "p",
                        "At the time, I worked at a company called TransPerfect where I helped set up computers, essentially. We frequently used unwieldy Excel files for managing passwords, and these files usually took several minutes to sync and load. I was once again witness to the inefficiency of Excel spreadsheets. Collabolist was my attempt at a solution.",
                     ],
                     [
                        "p",
                        "I worked on Collabolist every hour I was not at work. I had just recently finished work on Geller Portal, so programming was still fresh in my mind. As with my previous projects, I used AJAX extensively to enable functionality without the need to refresh the browser page.",
                     ],
                     [
                        "p",
                        "The photos do not reflect the final product, but I cannot locate other, more recent screenshots.",
                     ],
                     [
                        "p",
                        'Note: The images have the plural "Collabolists" since I ultimately changed the name due to the singular already being reserved. I preferred the singular, however.',
                     ],
                  ],
               },
               "geller-portal": {
                  title: "Geller Portal",
                  period: "Jan 2012 to June 2012",
                  tech: "HTML, CSS, JavaScript, PHP, SQL, MySQL, AJAX, XML, Apache",
                  images: [
                     [bphoto4, bphoto4Big, "Vendor profile with dummy data"],
                     [
                        bphoto5,
                        bphoto5Big,
                        "Purchase order creator w/dummy data",
                     ],
                     [
                        bphoto6,
                        bphoto6Big,
                        "Purchase order creator w/dummy data, alternate view",
                     ],
                     [bphoto3, bphoto3Big, "Dashboard"],
                     [
                        bphoto1,
                        bphoto1Big,
                        "In-progress customer order, P.O. tab",
                     ],
                     [
                        bphoto2,
                        bphoto2Big,
                        "Closed customer order, documents tab",
                     ],
                  ],
                  description: [
                     [
                        "p",
                        "Geller Portal was a system I created for my then employer Geller International. Originally hired to perform basic tasks such as driving and delivering things, I was passively witness to their many inefficient in-office processes.",
                     ],
                     [
                        "p",
                        "Determined to help them better organize the company's data, as well as help them streamline the creation of purchase orders, invoices, reports, and statistics, I took it upon myself to develop for them a system that could help tame the chaos.",
                     ],
                     [
                        "p",
                        "I worked on Geller Portal at home after work every day for a couple of months before revealing the project to my boss. He was very pleased and quickly demanded its implementation and use.",
                     ],
                     [
                        "p",
                        "Building off the knowledge I had gained from working on Let's Ask Bobby years earlier, I once again used PHP, JavaScript, and SQL to create the system. I stored all the data in a MySQL database and retrieved it using the Geller Portal as well as Excel templates that I created to queue the database and create pre-filled documents.",
                     ],
                     [
                        "p",
                        "I remember enjoying this project very much, especially as it required working with a lot of numbers and data.",
                     ],
                  ],
               },
               "year-2053": {
                  title: "Year 2053",
                  period: "Sept 2016 to Jan 2018",
                  tech: "Java, SQLite, Android Studio, Audacity, Photoshop",
                  images: [
                     [dphoto1, dphoto1Big],
                     [dphoto2, dphoto2Big],
                     [dphoto3, dphoto3Big],
                     [dphoto4, dphoto4Big],
                     [dphoto5, dphoto5Big],
                     [dphoto6, dphoto6],
                  ],
                  description: [
                     [
                        "p",
                        "Year 2053 was a text-based choose-your-own-adventure-type text game complete with background sound effects and voice acting (myself doing all the voices). Every choice the app user makes in the game affects the story. It seemed like a fun-ish project to work on. This was my one and only foray into Android development.",
                     ],
                     [
                        "p",
                        "There were so many challenging components to this project that I had to solve. I had to figure out how to program the evolving nature of the story, especially with the algorithmic diverging and intersecting of storylines. I programmed the game to dynamically and seamlessly connect over a hundred audio files in different orders and patterns depending on choices made in the past. I made huge online diagrams to help me connect all the pieces.",
                     ],
                     [
                        "p",
                        "One interesting challenge was developing the functions that enabled the audio and text to sync up perfectly.",
                     ],
                     ["p", "With this project, I gained experience with:"],
                     [
                        "ul",
                        [
                           "Performance testing and analysis",
                           "Android development tools",
                           "Java programming and multithreading",
                           "Audio recording and editing",
                           "I also learned how to create basic graphics",
                        ],
                     ],
                     [
                        "p",
                        "I recorded the audio in a freezing-cold car (through the Indiana wintertime), which was the closest thing I had to a studio.",
                     ],
                  ],
               },
               wordpress: {
                  title: "WordPress Stuff",
                  period: "Mar 2019 to Jun 2021",
                  tech: "WordPress, Elementor, PHP, CSS, HTML, Photoshop, Illustrator, Google Analytics",
                  images: [
                     [
                        ephoto2,
                        ephoto2Big,
                        "Example of a cover image for one of my articles on one of my websites.",
                     ],
                     [
                        ephoto3,
                        ephoto3Big,
                        "I compiled information for most common chemicals used in baby wipes for one of my websites.",
                     ],
                     [
                        ephoto4,
                        ephoto4Big,
                        "I got really good at making cookies...",
                     ],
                     [
                        ephoto5,
                        ephoto5Big,
                        "..but ultimately finalized only three recipes.",
                     ],
                     [ephoto6, ephoto6Big, "Landing page."],
                     [ephoto7, ephoto7Big, "Label I designed on Illustrator."],
                  ],
                  description: [
                     [
                        "p",
                        "I discovered WordPress in 2019. I had heard of it before, but had not the slightest idea of what it was. Over a period of two years, I started about eight websites covering everything from finance to travel to parenting (even though I am not a parent myself.. it seemed like a fun project during lockdown).",
                     ],
                     [
                        "p",
                        "Since I did everything myself (writing, designing, etc), I couldn't produce enough high-quality articles to garner sufficient web traffic.",
                     ],
                     [
                        "p",
                        "None of these websites are online anymore, mostly because I couldn't afford the web hosting. I still have backups for each. Experimenting with WordPress was not super fulfilling, but I learned a lot of worthwhile information. I read countless books on marketing, time management, productivity, business management, and others. I also gained a deep understanding of the operations side of the modern internet.",
                     ],
                     [
                        "p",
                        "A few of the things I learned over the two years were:",
                     ],
                     [
                        "ul",
                        [
                           "Content writing and editing",
                           "How to create decent web graphics using Adobe products",
                           "Basic project management",
                           "How to organize large amounts of information",
                           "Legal topics (e.g., copyrights, privacy)",
                           "Web security (e.g., firewalls, Cloudflare, TLS)",
                           "UX/UI",
                           "Search engine optimization and marketing",
                           "Web analytics",
                        ],
                     ],
                     [
                        "p",
                        "My final WordPress project was Omaha Cookie Co., an online-only cookie shop specializing in premium cookies. I learned a lot about food chemistry and the like. I probably baked over a thousand cookies to test recipes, most of which I sent to my best friend by mail.",
                     ],
                     [
                        "p",
                        "For Omaha Cookie Co., I created an ingredient-management and costing system to perfectly account for per-cookie and per-product costs. I also made a nutrition facts system to generate accurate labels using my recipes.",
                     ],
                  ],
               },
            },
            allNames: [],
         },
         interests: {
            byName: {
               "interests-intro": {
                  description: [
                     [
                        "p",
                        "Every bit of this world fascinates me. I have an insatiable appetite for information and I voraciously consume it every hour of the day.",
                     ],
                     [
                        "p",
                        "Although my interests are infinitely broad, here is a less-than-infinite list of my most passionate interests:",
                     ],
                     [
                        "ul",
                        [
                           "Technology, naturally",
                           "Finance, capitalism and the global markets.",
                           "Economics and economic data",
                           "Foreign policy",
                           "Journalism (I've been obsessed with NY Times coverage for years)",
                           "Politics, both domestic and international",
                           "Human cultures and languages",
                        ],
                     ],
                     [
                        "p",
                        "My personal interests may or may not be relevant to my candidacy, but I include them here just in case this information proves valuable.",
                     ],
                  ],
               },
               "recent-books": {
                  "book-list": [
                     {
                        title: "Israel",
                        author: "Noa Tishby",
                     },
                     {
                        title: "After the Fall",
                        author: "Ben Rhodes",
                     },
                     {
                        title: "Caste",
                        author: "Isabel Wilkerson",
                     },
                     {
                        title: "How Democracies Die",
                        author: "Steven Levitsky, Daniel Ziblatt",
                     },
                     {
                        title: "The Cruelty Is the Point",
                        author: "Adam Serwer",
                     },
                     {
                        title: "Persist",
                        author: "Elizabeth Warren",
                     },
                     {
                        title: "Sapiens",
                        author: "Yuval Noah Harari",
                     },
                     {
                        title: "Antitrust",
                        author: "Amy Klobuchar",
                     },
                     {
                        title: "A People's History of the United States",
                        author: "Howard Zinn",
                     },
                     {
                        title: "How to Avoid a Climate Disaster",
                        author: "Bill Gates",
                     },
                     {
                        title: "The Price of Peace",
                        author: "Zachary D. Carter",
                     },
                     {
                        title: "Why We're Polarized",
                        author: "Ezra Klein",
                     },
                  ],
               },
               podcasts: {
                  description: [
                     [
                        "ul",
                        [
                           "Pod Save the World",
                           "Pod Save America",
                           "Sway",
                           "The Ezra Klein Show",
                           "The Weeds (Vox)",
                           "FiveThirtyEight Politics",
                           "Checks and Balance (The Economist)",
                           "Wait Wait... Don't Tell Me (NPR)",
                           "Conan O'Brien Needs a Friend",
                        ],
                     ],
                  ],
               },
               travel: {
                  description: [
                     [
                        "p",
                        "As a child, I had always dreamed of going far, far away to escape my environment, and I managed to do so on occasion, whether or not I really had the means to do so. My solo explorations at home and abroad have had a profoundly positive impact on my growth as a person after I left university.",
                     ],
                     [
                        "p",
                        "A few of the countries I have thus far been fortunate to explore include:",
                     ],
                     [
                        "ul",
                        [
                           "Canada",
                           "Mexico",
                           "Costa Rica",
                           "South Korea",
                           "Japan",
                           "Taiwan",
                           "Hong Kong",
                           "Macau",
                           "United Kingdom",
                           "France",
                           "Czech Republic",
                           "Germany",
                           "Netherlands",
                           "Belgium",
                        ],
                     ],
                     [
                        "p",
                        "I lived about a year in Taiwan, and five months in Canada.",
                     ],
                  ],
               },
            },
            allNames: [],
         },
         faq: {
            byName: {
               faq: {
                  title: "faq",
                  faq: [
                     ["When can you start?", "I can begin immediately."],
                     [
                        "Are you willing to work inside an office?",
                        "Yes, I would be very glad to.",
                     ],
                     ["Would you be willing to work remotely?", "Yes."],
                     [
                        "Are you willing to relocate if necessary?",
                        "Yes, to anywhere on this planet, especially large cities.",
                     ],
                     [
                        "How many hours per week can you work?",
                        "I am not bound by any time constraints. My focus is on delivering results and growing as an individual and professional.",
                     ],
                     [
                        "Are you fully vaccinated?",
                        "Yes, three (3) Modernas: two (2) Moderna standard doses + one (1) Moderna booster. My bloodstream is full of delicious antibodies.",
                     ],
                  ],
               },
            },
            allNames: [],
         },
         contact: {
            byName: {},
            allNames: [],
         },
      },
   },
};


/*
export const RecentBooks = () => {
   return (
      <div className="books-wrapper">
         <div className="book">
            <p className="book-title">Israel</p>
            <p className="book-author">Noa Tishby</p>
export const Online = () => {
    return (
        <div>
            <div className="online-institutions animate__animated animate__fadeIn animate__faster">
                <Institution name="Codecademy" city="Full-Stack Engineering Cert" logo={codecademyLogo} />
                <Institution name="HackerRank" city="Algorithms 6/6" logo={hackerRankLogo} />
            </div>
            <div style={{marginTop:"40px"}}>
                <p className="online-certs-links"><a href="https://www.codecademy.com/profiles/michaelPimentel9180632744/certificates/5f7e644d833c070013ef47c4" rel="noreferrer" target="_blank">Codecademy Cert</a></p>
                <p className="online-certs-links"><a href="https://www.hackerrank.com/mikecpimentel" rel="noreferrer" target="_blank">HackerRank Profile</a></p>
            </div>
        </div>
    )
}
< className="podcasts-wrapper">
            <div className="podcasts">Pod Save the World</div>
export const FAQ = () => {
    return (
        <>
            <h3
                className="section-header animate__animated animate__fadeIn animate__faster"
                style={{ marginBottom: "50px" }}
            >
                FAQ section
            </h3>
            <div className="questions-wrapper">
                <FAQBlock>
                    <Question></Question>
                    <Answer></Answer>
                </FAQBlock>
            </div>
        </>
    );
};

export const FAQBlock = (props) => {
    return (
        <div style={{marginBottom:"50px"}}>
            {props.children}
        </div>
    )
}
const Answer = (props) => {
    return (
        <div>
            <p
                style={{
                    fontWeight: "200",
                    color: "#fffa",
                    fontSize: "1em",
                    marginTop: "10px",
                    lineHeight: "1.5",
                }}
            >
                {" "}
                {"> "}
                {props.children}
            </p>
        </div>
    );
};

export const Question = (props) => {
    return (
        <div style={{fontSize:"1em", fontWeight:"200", marginBottom:"0px"}}>
            {props.children}
        </div>
    )
}
const ExtraCredit = () => {
    return (
        <div className="extra-credit baseskills-info animate__animated animate__faster">
            <SkillItem skillType="UI/UX" level="7"></SkillItem>

            <div style={{backgroundColor:"#292f3655", padding:"5px", fontWeight:"200", marginTop:"30px", fontSize:"0.8em"}}>Click rows for more information</div>
        </div>
    )
}
export const SkillsIntro = () => {
  return (
    <div className="animate__animated quick-fade-in-up animate__faster intro-text-area">
    
    <Link to="base-skills" className="intro-button">View Current Skills</Link>
    </div>
  )
}
*/

export const Section = (props) => {
    const sectionURL = props.which;

    return (
        <>
            <div className="section-top">
                <h3 className="section-header animate__animated animate__fadeIn animate__faster">
                    {props.which}
                </h3>
                <div className="sub-section-links">
                    {props.children}
                    {
                        <NavLink to={`/${sectionURL}`} end>
                            Intro
                        </NavLink>
                    }
                    {sectionState.pages.allNames.map((name) => (
                        <NavLink to={`/${sectionURL}/${name}`}>
                            {sectionState.pages.byName[name].title}
                        </NavLink>
                    ))}
                </div>
            </div>
            <div className="section-bottom">
                <Outlet context={sectionState} />
            </div>
        </>
    );
};
