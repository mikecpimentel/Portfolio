import { Outlet, NavLink } from "react-router-dom";
import "./Section.css";
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
import codecademyLogo from "../../images/education/320px-Codecademy.svg.png";
import hackerRankLogo from "../../images/education/800px-HackerRank_Icon-1000px.png";
import chaffeyLogo from "../../images/education/logo-and-type.png";
import ivcLogo from "../../images/education/ivc-logo-color.png";
import mtSacLogo from "../../images/education/fullcolor_email.jpg";
import logo from "../../images/education/navy-seal.gif";
import { v4 as uuid } from "uuid";

const sectionState = {
   bySection: {
      skills: {
         byPage: {
            index: {
               title: "List",
               content: [
                  {
                     type: "description",
                     data: [
                        {
                           element: "p",
                           children: [
                              "I could list a few hundred things I plan to learn this decade, but my immediate priority is to learn anything and everything that will make me a more effective team member and employee. High on my priority list are Python, server-side rendering technologies (Next.js), GraphQL, and so, so many others.",
                           ],
                        },
                        {
                           element: "p",
                           children: [
                              "A few other things I might learn in the near future include:",
                           ],
                        },
                        {
                           element: "ul",
                           children: [
                              {
                                 element: "li",
                                 children: [
                                    "Using code to create internal and consumer financial products",
                                 ],
                              },
                              {
                                 element: "li",
                                 children: [
                                    "Learning how to use artificial intelligence to improve decision making",
                                 ],
                              },
                              {
                                 element: "li",
                                 children: [
                                    "Learning blockchain technology and its potential applications",
                                 ],
                              },
                              {
                                 element: "li",
                                 children: [
                                    "Mastering a few more spoken languages",
                                 ],
                              },
                           ],
                        },
                     ],
                  },
                  {
                     type: "skills",
                     data: [
                        {
                           id: "skill-1",
                           skill: "HTML",
                           level: 9,
                           description:
                              "Extensive experience using HTML and CSS, including many advanced concepts. I'm also great at optimizing pages for small screens. I have not yet fully optimized this site for mobile, however 😐 It's coming soon.",
                        },
                        {
                           id: "skill-2",
                           skill: "React",
                           level: 4,
                           description:
                              "I am relatively new with React but have a firm grasp of the technology (this site was created using React). I know the latest API features and have used various common libraries, including react-router-dom, which is used extensively on this site. I will no doubt gain a lot more advanced knowledge over the coming months.",
                        },
                        {
                           id: "skill-3",
                           skill: "Redux",
                           level: 4,
                           description:
                              "Like with React, my experience with Redux is relatively recent but growing. I have used it for managing application state, and have implemented many of its modern features including those included in Redux Toolkit (e.g., RTK Query). I am gaining more experience with Redux every day.",
                        },
                        {
                           id: "skill-4",
                           skill: "JavaScript",
                           level: 8,
                           description:
                              "I have extensive knowledge of JavaScript, from many of its most modern features to some of its older, now-obsolete features (useful for understanding legacy code, perhaps). My recent use of JavaScript has centered much around Node development.",
                        },
                        {
                           id: "skill-5",
                           skill: "APIs",
                           level: 4,
                           description:
                              "My understanding is solid but my experience is incomplete. I have some experience using and creating REST APIs, but I have room to learn things in greater depth. I have used Express and have a basic knowledge of authentication and security concerns, including the use of Express middlewares.",
                        },
                        {
                           id: "skill-6",
                           skill: "Databases",
                           level: 7,
                           description:
                              "I love databases (perhaps it reflects my love for data in general). I have a decent amount of experience designing stable and efficient tables, and using SQL to find exactly what I need. I have been using PostgreSQL recently, but I also have much past experience using MySQL. I have much to learn to fully master many of the most advanced features, but I have already had a pretty good start.",
                        },
                        {
                           id: "skill-7",
                           skill: "Algorithms",
                           level: 5,
                           description:
                              "I have earned 6 / 6 stars for Problem Solving (i.e., Algorithms) on HackerRank. There's still much to learn, but I think I have a lot of the basics down. I can create algorithms that are efficient in runtime and memory use.",
                        },
                        {
                           id: "skill-8",
                           skill: "Design",
                           level: 7,
                           description:
                              "I have an intermediate understanding of web design and usability principles. I have designed many websites (including this one, of course), but I certainly have more to improve upon.",
                        },
                        {
                           id: "skill-9",
                           skill: "Mandarin",
                           level: 5,
                           description:
                              "One of my greastest passions in life is learning and using foreign languages. I have learned so many in my life, far more than the two listed here, but I have lost language skills in many of them due to lack of opportunity for use. Mandarin is one language I can still communicate in with at least marginal competence. I used to be able to read and write many traditional characters, but that knowledge has recently grown a bit stale.",
                        },
                        {
                           id: "skill-10",
                           skill: "Spanish",
                           level: 5,
                           description:
                              "I can speak and understand a lot of Spanish, but I've never spent too much time around Spanish speakers. When I was younger, I used to work in a warehouse where virtually all the other employees spoke only Spanish. Working there allowed me to practice my Spanish over a relatively extended period of time, but that time has long passed.",
                        },
                        {
                           id: "skill-12",
                           skill: "PHP",
                           level: 5,
                           description:
                              "My first several personal projects were coded in PHP. However, it has been a long while since I have used it.",
                        },
                        {
                           id: "skill-13",
                           skill: "Java",
                           level: 3,
                           description:
                              "I have created an Android app using Java, but that was years ago. I have also used c++ in the past, so overall I have some experience with object-oriented programming.",
                        },
                     ],
                  },
               ],
            },
         },
         allPages: ["index"],
      },
      education: {
         byPage: {
            index: {
               title: "Formal Ed",
               content: [
                  {
                     type: "description",
                     data: [
                        {
                           element: "h3",
                           children: ["Pre-University"],
                        },
                     ],
                  },
                  {
                     type: "institution-box",
                     data: [
                        {
                           name: "Mt. San Antonio College",
                           subheading: "Walnut, CA",
                           logo: mtSacLogo,
                        },
                        {
                           name: "Irvine Valley College",
                           subheading: "Irvine, CA",
                           logo: ivcLogo,
                        },
                        {
                           name: "Chaffey College",
                           subheading: "Rancho Cucamonga, CA",
                           logo: chaffeyLogo,
                        },
                     ],
                  },
                  {
                     type: "description",
                     data: [
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
                                    "A | Calculus III (Multivariate & Vector Calculus)",
                                 ],
                              },
                              {
                                 element: "li",
                                 attr: [],
                                 children: [
                                    "A | Linear Algebra & Differential Equations",
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
                                    "A | General Chemistry (I) w/ Lab",
                                 ],
                              },
                              {
                                 element: "li",
                                 attr: [],
                                 children: [
                                    "B | General Chemistry (II) w/ Lab",
                                 ],
                              },
                           ],
                        },
                     ],
                  },
                  {
                     type: "description",
                     data: [
                        {
                           element: "h3",
                           children: ["University"],
                        },
                     ],
                  },
                  {
                     type: "institution-box",
                     data: [
                        {
                           name: "University of California",
                           subheading: "Santa Barbara, CA (INCOMPLETE)",
                           logo: logo,
                        },
                     ],
                  },
                  {
                     type: "description",
                     data: [
                        {
                           element: "p",
                           children: [
                              "A few of the upper-division economics courses I completed at UCSB before my withdrawal.",
                           ],
                        },
                        {
                           element: "ul",
                           children: [
                              {
                                 element: "li",
                                 children: ["Econometrics I"],
                              },
                              {
                                 element: "li",
                                 children: ["Probability and Statistics I"],
                              },
                              {
                                 element: "li",
                                 children: [
                                    "Intermediate Microeconomic Theory I",
                                 ],
                              },
                              {
                                 element: "li",
                                 children: [
                                    "Intermediate Microeconomic Theory II",
                                 ],
                              },
                              {
                                 element: "li",
                                 children: [
                                    "Intermediate Macroeconomic Theory",
                                 ],
                              },
                              {
                                 element: "li",
                                 children: ["Economic Development"],
                              },
                              {
                                 element: "li",
                                 children: ["Intermediate Accounting I"],
                              },
                              {
                                 element: "li",
                                 children: ["Foundations of Computer Science"],
                              },
                           ],
                        },
                     ],
                  },
                  {
                     type: "description",
                     data: [
                        {
                           element: "h3",
                           children: ["Online"],
                        },
                     ],
                  },
                  {
                     type: "institution-box",
                     data: [
                        {
                           name: "Codecademy",
                           subheading: "Full-Stack Engineering Cert",
                           logo: codecademyLogo,
                        },
                        {
                           name: "HackerRank",
                           subheading: "Algorithms 6/6",
                           logo: hackerRankLogo,
                        },
                     ],
                  },
                  {
                     type: "description",
                     data: [
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
               ],
            },
            informal: {
               title: "Informal Ed",
               content: [
                  {
                     type: "description",
                     data: [
                        {
                           element: "h3",
                           children: ["Major Interests"],
                        },
                        {
                           element: "p",
                           children: [
                              "Every bit of this world fascinates me. I have an insatiable appetite for information and I voraciously consume it every hour of the day.",
                           ],
                        },

                        {
                           element: "p",
                           children: [
                              "Although my interests are infinitely broad, here is a less-than-infinite list of my most passionate interests:",
                           ],
                        },

                        {
                           element: "ul",
                           children: [
                              {
                                 element: "li",
                                 children: ["Technology, naturally"],
                              },
                              {
                                 element: "li",
                                 children: [
                                    "Finance, capitalism and the global markets.",
                                 ],
                              },
                              {
                                 element: "li",
                                 children: ["Economics and economic data"],
                              },
                              {
                                 element: "li",
                                 children: ["Foreign policy"],
                              },
                              {
                                 element: "li",
                                 children: [
                                    "Journalism (I've been obsessed with NY Times coverage for years)",
                                 ],
                              },
                              {
                                 element: "li",
                                 children: [
                                    "Politics, both domestic and international",
                                 ],
                              },
                              {
                                 element: "li",
                                 children: ["Human cultures and languages"],
                              },
                           ],
                        },

                        {
                           element: "p",
                           children: [
                              "My personal interests may or may not be relevant to my candidacy, but I include them here just in case this information proves valuable.",
                           ],
                        },
                     ],
                  },
                  {
                     type: "description",
                     data: [
                        {
                           element: "h3",
                           children: ["Recent Books"],
                        },
                     ],
                  },
                  {
                     type: "books",
                     data: [
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
                  {
                     type: "description",
                     data: [
                        {
                           element: "h3",
                           children: ["Podcasts"],
                        },
                        {
                           element: "ul",
                           children: [
                              {
                                 element: "li",
                                 children: ["Pod Save the World"],
                              },
                              { element: "li", children: ["Pod Save America"] },
                              { element: "li", children: ["Sway"] },
                              {
                                 element: "li",
                                 children: ["The Ezra Klein Show"],
                              },
                              { element: "li", children: ["The Weeds (Vox)"] },
                              {
                                 element: "li",
                                 children: ["FiveThirtyEight Politics"],
                              },
                              {
                                 element: "li",
                                 children: [
                                    "Checks and Balance (The Economist)",
                                 ],
                              },
                              {
                                 element: "li",
                                 children: ["Wait Wait... Don't Tell Me (NPR)"],
                              },
                              {
                                 element: "li",
                                 children: ["Conan O'Brien Needs a Friend"],
                              },
                           ],
                        },
                     ],
                  },
                  {
                     type: "description",
                     data: [
                        {
                           element: "h3",
                           children: ["Travel"],
                        },
                        {
                           element: "p",
                           children: [
                              "As a child, I had always dreamed of going far, far away to escape my environment, and I managed to do so on occasion, whether or not I really had the means to do so. My solo explorations at home and abroad have had a profoundly positive impact on my growth as a person after I left university.",
                           ],
                        },

                        {
                           element: "p",
                           children: [
                              "A few of the countries I have thus far been fortunate to explore include:",
                           ],
                        },

                        {
                           element: "ul",
                           children: [
                              { element: "li", children: ["Canada"] },
                              { element: "li", children: ["Mexico"] },
                              { element: "li", children: ["Costa Rica"] },
                              { element: "li", children: ["South Korea"] },
                              { element: "li", children: ["Japan"] },
                              { element: "li", children: ["Taiwan"] },
                              { element: "li", children: ["Hong Kong"] },
                              { element: "li", children: ["Macau"] },
                              { element: "li", children: ["United Kingdom"] },
                              { element: "li", children: ["France"] },
                              { element: "li", children: ["Czech Republic"] },
                              { element: "li", children: ["Germany"] },
                              { element: "li", children: ["Netherlands"] },
                              { element: "li", children: ["Belgium"] },
                           ],
                        },

                        {
                           element: "p",
                           children: [
                              "I lived about a year in Taiwan, and five months in Canada.",
                           ],
                        },
                     ],
                  },
                  {
                     type: "description",
                     data: [
                        {
                           element: "h3",
                           children: ["Life"],
                        },
                        {
                           element: "p",
                           children: [
                              "My life's endeavor to educate myself has been fraught but unceasing. Owing to a largely chaotic childhood, my life has been decidedly nontraditional, especially when it came to education. I was expelled from 7th grade, dropped out permanently in 9th grade — but ultimately got into community college.",
                           ],
                        },
                        {
                           element: "p",
                           children: [
                              "By the time I got accepted to university, my mind had essentially melted from a lifetime of sickening stress and anxiety. I had health insurance and decent medical care for the first time in my life through the university, but world-class health insurance was not enough to erase two decades of insecurity. I withdrew — in good standing — from the university shortly before graduating in order to work on myself full-time.",
                           ],
                        },
                        {
                           element: "p",
                           children: [
                              "I've lived in my car in the past and have gone almost my entire life without a bed, but my optimism for the future has been unrelenting. A bright-eyed vision for the future is how I stay alive.",
                           ],
                        },
                     ],
                  },
               ],
            },
         },
         allPages: ["index", "informal"],
      },
      "past-projects": {
         byPage: {
            index: {
               title: "Let's Ask Bobby",
               content: [
                  {
                     type: "project",
                     data: [
                        {
                           title: "Let's Ask Bobby",
                           period: "Sept 2007 to July 2008",
                           tech: "HTML, CSS, JavaScript, PHP, SQL, MySQL, AJAX, XML, Apache",
                           images: [
                              {
                                 small: aphoto1,
                                 large: aphoto1,
                              },
                           ],
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
                     ],
                  },
               ],
            },
            collabolist: {
               title: "Collabolist",
               content: [
                  {
                     type: "project",
                     data: [
                        {
                           title: "Collabolist",
                           period: "Aug 2012 to Feb 2013; Feb 2015 to Jan 2016",
                           tech: "HTML, CSS, JavaScript, PHP, SQL, MySQL, AJAX, XML, Apache",
                           images: [
                              {
                                 small: cphoto5,
                                 large: cphoto5Big,
                                 subtitle: "Add new row (dummy data)",
                              },
                              {
                                 small: cphoto4,
                                 large: cphoto4Big,
                                 subtitle: "Column functions",
                              },
                              {
                                 small: cphoto3,
                                 large: cphoto3Big,
                                 subtitle: "Row functions",
                              },
                              {
                                 small: cphoto2,
                                 large: cphoto2Big,
                                 subtitle: "Search function",
                              },
                              {
                                 small: cphoto1,
                                 large: cphoto1Big,
                                 subtitle: "Alternate view",
                              },
                           ],
                           description: [
                              {
                                 element: "p",
                                 children: [
                                    "Collabolist was my attempt at creating a quicker, simpler, and more convenient alternative to Excel for list creation.",
                                 ],
                              },
                              {
                                 element: "p",
                                 children: [
                                    "At the time, I worked at a company called TransPerfect where I helped set up computers, essentially. We frequently used unwieldy Excel files for managing passwords, and these files usually took several minutes to sync and load. I was once again witness to the inefficiency of Excel spreadsheets. Collabolist was my attempt at a solution.",
                                 ],
                              },
                              {
                                 element: "p",
                                 children: [
                                    "I worked on Collabolist every hour I was not at work. I had just recently finished work on Geller Portal, so programming was still fresh in my mind. As with my previous projects, I used AJAX extensively to enable functionality without the need to refresh the browser page.",
                                 ],
                              },
                              {
                                 element: "p",
                                 children: [
                                    "The photos do not reflect the final product, but I cannot locate other, more recent screenshots.",
                                 ],
                              },
                              {
                                 element: "p",
                                 children: [
                                    'Note: The images have the plural "Collabolists" since I ultimately changed the name due to the singular already being reserved. I preferred the singular, however.',
                                 ],
                              },
                           ],
                        },
                     ],
                  },
               ],
            },
            "geller-portal": {
               title: "Geller Portal",
               content: [
                  {
                     type: "project",
                     data: [
                        {
                           title: "Geller Portal",
                           period: "Jan 2012 to June 2012",
                           tech: "HTML, CSS, JavaScript, PHP, SQL, MySQL, AJAX, XML, Apache",
                           images: [
                              {
                                 small: bphoto4,
                                 large: bphoto4Big,
                                 subtitle: "Vendor profile with dummy data",
                              },
                              {
                                 small: bphoto5,
                                 large: bphoto5Big,
                                 subtitle:
                                    "Purchase order creator w/dummy data",
                              },
                              {
                                 small: bphoto6,
                                 large: bphoto6Big,
                                 subtitle:
                                    "Purchase order creator w/dummy data, alternate view",
                              },
                              {
                                 small: bphoto3,
                                 large: bphoto3Big,
                                 subtitle: "Dashboard",
                              },
                              {
                                 small: bphoto1,
                                 large: bphoto1Big,
                                 subtitle:
                                    "In-progress customer order, P.O. tab",
                              },
                              {
                                 small: bphoto2,
                                 large: bphoto2Big,
                                 subtitle:
                                    "Closed customer order, documents tab",
                              },
                           ],
                           description: [
                              {
                                 element: "p",
                                 children: [
                                    "Geller Portal was a system I created for my then employer Geller International. Originally hired to perform basic tasks such as driving and delivering things, I was passively witness to their many inefficient in-office processes.",
                                 ],
                              },
                              {
                                 element: "p",
                                 children: [
                                    "Determined to help them better organize the company's data, as well as help them streamline the creation of purchase orders, invoices, reports, and statistics, I took it upon myself to develop for them a system that could help tame the chaos.",
                                 ],
                              },
                              {
                                 element: "p",
                                 children: [
                                    "I worked on Geller Portal at home after work every day for a couple of months before revealing the project to my boss. He was very pleased and quickly demanded its implementation and use.",
                                 ],
                              },
                              {
                                 element: "p",
                                 children: [
                                    "Building off the knowledge I had gained from working on Let's Ask Bobby years earlier, I once again used PHP, JavaScript, and SQL to create the system. I stored all the data in a MySQL database and retrieved it using the Geller Portal as well as Excel templates that I created to queue the database and create pre-filled documents.",
                                 ],
                              },
                              {
                                 element: "p",
                                 children: [
                                    "I remember enjoying this project very much, especially as it required working with a lot of numbers and data.",
                                 ],
                              },
                           ],
                        },
                     ],
                  },
               ],
            },
            "year-2053": {
               title: "Year 2053",
               content: [
                  {
                     type: "project",
                     data: [
                        {
                           title: "Year 2053",
                           period: "Sept 2016 to Jan 2018",
                           tech: "Java, SQLite, Android Studio, Audacity, Photoshop",
                           images: [
                              {
                                 small: dphoto1,
                                 large: dphoto1Big,
                                 subtitle: "",
                              },
                              {
                                 small: dphoto2,
                                 large: dphoto2Big,
                                 subtitle: "",
                              },
                              {
                                 small: dphoto3,
                                 large: dphoto3Big,
                                 subtitle: "",
                              },
                              {
                                 small: dphoto4,
                                 large: dphoto4Big,
                                 subtitle: "",
                              },
                              {
                                 small: dphoto5,
                                 large: dphoto5Big,
                                 subtitle: "",
                              },
                              { small: dphoto6, large: dphoto6, subtitle: "" },
                           ],
                           description: [
                              {
                                 element: "p",
                                 children: [
                                    "Year 2053 was a text-based choose-your-own-adventure-type text game complete with background sound effects and voice acting (myself doing all the voices). Every choice the app user makes in the game affects the story. It seemed like a fun-ish project to work on. This was my one and only foray into Android development.",
                                 ],
                              },
                              {
                                 element: "p",
                                 children: [
                                    "There were so many challenging components to this project that I had to solve. I had to figure out how to program the evolving nature of the story, especially with the algorithmic diverging and intersecting of storylines. I programmed the game to dynamically and seamlessly connect over a hundred audio files in different orders and patterns depending on choices made in the past. I made huge online diagrams to help me connect all the pieces.",
                                 ],
                              },
                              {
                                 element: "p",
                                 children: [
                                    "One interesting challenge was developing the functions that enabled the audio and text to sync up perfectly.",
                                 ],
                              },
                              {
                                 element: "p",
                                 children: [
                                    "With this project, I gained experience with:",
                                 ],
                              },

                              {
                                 element: "ul",
                                 children: [
                                    {
                                       element: "li",
                                       children: [
                                          "Performance testing and analysis",
                                       ],
                                    },
                                    {
                                       element: "li",
                                       children: ["Android development tools"],
                                    },
                                    {
                                       element: "li",
                                       children: [
                                          "Java programming and multithreading",
                                       ],
                                    },
                                    {
                                       element: "li",
                                       children: [
                                          "Audio recording and editing",
                                       ],
                                    },
                                    {
                                       element: "li",
                                       children: [
                                          "I also learned how to create basic graphics",
                                       ],
                                    },
                                 ],
                              },
                              {
                                 element: "p",
                                 children: [
                                    "I recorded the audio in a freezing-cold car (through the Indiana wintertime), which was the closest thing I had to a studio.",
                                 ],
                              },
                           ],
                        },
                     ],
                  },
               ],
            },
            wordpress: {
               title: "WordPress Stuff",
               content: [
                  {
                     type: "project",
                     data: [
                        {
                           title: "WordPress",
                           period: "Mar 2019 to Jun 2021",
                           tech: "WordPress, Elementor, PHP, CSS, HTML, Photoshop, Illustrator, Google Analytics",
                           images: [
                              {
                                 small: ephoto2,
                                 large: ephoto2Big,
                                 subtitle:
                                    "Example of a cover image for one of my articles on one of my websites.",
                              },

                              {
                                 small: ephoto3,
                                 large: ephoto3Big,
                                 subtitle:
                                    "I compiled information for most common chemicals used in baby wipes for one of my websites.",
                              },

                              {
                                 small: ephoto4,
                                 large: ephoto4Big,
                                 subtitle:
                                    "I got really good at making cookies...",
                              },

                              {
                                 small: ephoto5,
                                 large: ephoto5Big,
                                 subtitle:
                                    "..but ultimately finalized only three recipes.",
                              },

                              {
                                 small: ephoto6,
                                 large: ephoto6Big,
                                 subtitle: "Landing page.",
                              },
                              {
                                 small: ephoto7,
                                 large: ephoto7Big,
                                 subtitle: "Label I designed on Illustrator.",
                              },
                           ],
                           description: [
                              {
                                 element: "p",
                                 children: [
                                    "I discovered WordPress in 2019. I had heard of it before, but had not the slightest idea of what it was. Over a period of two years, I started about eight websites covering everything from finance to travel to parenting (even though I am not a parent myself.. it seemed like a fun project during lockdown).",
                                 ],
                              },

                              {
                                 element: "p",
                                 children: [
                                    "Since I did everything myself (writing, designing, etc), I couldn't produce enough high-quality articles to garner sufficient web traffic.",
                                 ],
                              },

                              {
                                 element: "p",
                                 children: [
                                    "None of these websites are online anymore, mostly because I couldn't afford the web hosting. I still have backups for each. Experimenting with WordPress was not super fulfilling, but I learned a lot of worthwhile information. I read countless books on marketing, time management, productivity, business management, and others. I also gained a deep understanding of the operations side of the modern internet.",
                                 ],
                              },

                              {
                                 element: "p",
                                 children: [
                                    "A few of the things I learned over the two years were:",
                                 ],
                              },

                              {
                                 element: "ul",
                                 children: [
                                    {
                                       element: "li",
                                       children: [
                                          "Content writing and editing",
                                       ],
                                    },
                                    {
                                       element: "li",
                                       children: [
                                          "How to create decent web graphics using Adobe products",
                                       ],
                                    },
                                    {
                                       element: "li",
                                       children: ["Basic project management"],
                                    },
                                    {
                                       element: "li",
                                       children: [
                                          "How to organize large amounts of information",
                                       ],
                                    },
                                    {
                                       element: "li",
                                       children: [
                                          "Legal topics (e.g., copyrights, privacy)",
                                       ],
                                    },
                                    {
                                       element: "li",
                                       children: [
                                          "Web security (e.g., firewalls, Cloudflare, TLS)",
                                       ],
                                    },
                                    { element: "li", children: ["UX/UI"] },
                                    {
                                       element: "li",
                                       children: [
                                          "Search engine optimization and marketing",
                                       ],
                                    },
                                    {
                                       element: "li",
                                       children: ["Web analytics"],
                                    },
                                 ],
                              },

                              {
                                 element: "p",
                                 children: [
                                    "My final WordPress project was Omaha Cookie Co., an online-only cookie shop specializing in premium cookies. I learned a lot about food chemistry and the like. I probably baked over a thousand cookies to test recipes, most of which I sent to my best friend by mail.",
                                 ],
                              },

                              {
                                 element: "p",
                                 children: [
                                    "For Omaha Cookie Co., I created an ingredient-management and costing system to perfectly account for per-cookie and per-product costs. I also made a nutrition facts system to generate accurate labels using my recipes.",
                                 ],
                              },
                           ],
                        },
                     ],
                  },
               ],
            },
         },
         allPages: [
            "index",
            "geller-portal",
            "collabolist",
            "year-2053",
            "wordpress",
         ],
      },
      faq: {
         byPage: {
            index: {
               title: "FAQ",
               content: [
                  {
                     type: "faq",
                     data: [
                        {
                           question: "When can you start?",
                           answer: "I can begin immediately.",
                        },

                        {
                           question:
                              "Are you willing to work inside an office?",
                           answer: "Yes, I would be very glad to.",
                        },

                        {
                           question: "Would you be willing to work remotely?",
                           answer: "Yes.",
                        },

                        {
                           question:
                              "Are you willing to relocate if necessary?",
                           answer:
                              "Yes, to anywhere on this planet, especially large cities.",
                        },

                        {
                           question: "How many hours per week can you work?",
                           answer:
                              "I am not bound by any time constraints. My focus is on delivering results and growing as an individual and professional.",
                        },

                        {
                           question: "Are you fully vaccinated?",
                           answer:
                              "Yes, three (3) Modernas: two (2) Moderna standard doses + one (1) Moderna booster. My bloodstream is full of delicious antibodies.",
                        },
                     ],
                  },
               ],
            },
         },
         allPages: ["index"],
      },
      "new-projects": {
         byPage: {
            index: {
               title: "Mikenomics (this site)",
               content: [
                  {
                     type: "description",
                     data: [
                        { element: "p", children: ["random text... testing"] },
                     ],
                  },
               ],
            },
            pokemon: {
               title: "Pokemon Explorer",
               content: [{ type: "pokemon", data: null }],
            },
         },
      },
   },
};

/*

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
   const sectionURL = props.url;
   const sectionName = props.name;
   const sectionPath = sectionState.bySection[sectionURL];

   return (
      <>
         <div className="section-top">
            <h3 className="section-header">{sectionName}</h3>

            <div className="sub-section-links">
               {sectionPath.allPages.length > 1 ? (
                  <NavLink key={uuid()} to={`/${sectionURL}`} end>
                     Intro
                  </NavLink>
               ) : null}
               {sectionPath.allPages.map((name) =>
                  name !== "index" ? (
                     <NavLink key={uuid()} to={`/${sectionURL}/${name}`}>
                        {sectionPath.byPage[name].title}
                     </NavLink>
                  ) : null
               )}
            </div>
         </div>
         <div className="section-bottom">
            <Outlet context={[sectionPath, sectionURL]} />
         </div>
      </>
   );
};
