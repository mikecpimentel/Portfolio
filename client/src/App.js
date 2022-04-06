import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Page } from "./features/components/Page";
import { Welcome } from "./features/sections/Welcome";
import { Section } from "./features/components/Section";
import { Sandbox } from "./features/sandbox/Sandbox";
import { v4 as uuid } from "uuid";
import { PokemonExplorer } from "./features/sandbox/pokemon-explorer/PokemonExplorer";
import aphoto1 from "./images/letsaskbobby_logo.gif";
import bphoto1 from "./images/geller-portal/Folder1-300x199.png";
import bphoto1Big from "./images/geller-portal/Folder1.png";
import bphoto2 from "./images/geller-portal/Folder3-300x200.png";
import bphoto2Big from "./images/geller-portal/Folder3.png";
import bphoto3 from "./images/geller-portal/Main-Menu-300x201.png";
import bphoto3Big from "./images/geller-portal/Main-Menu.png";
import bphoto4 from "./images/geller-portal/gellerVendorsProgress1-300x200.jpg";
import bphoto4Big from "./images/geller-portal/gellerVendorsProgress1.jpg";
import bphoto5 from "./images/geller-portal/PO-Creator-300x200.png";
import bphoto5Big from "./images/geller-portal/PO-Creator.png";
import bphoto6 from "./images/geller-portal/PO-Creator2-300x200.png";
import bphoto6Big from "./images/geller-portal/PO-Creator2.png";
import cphoto1 from "./images/collabolist/This-is-Collabolists-1-300x149.jpg";
import cphoto1Big from "./images/collabolist/This-is-Collabolists-1.jpg";
import cphoto2 from "./images/collabolist/This-is-Collabolists-2-300x149.jpg";
import cphoto2Big from "./images/collabolist/This-is-Collabolists-2.jpg";
import cphoto3 from "./images/collabolist/This-is-Collabolists-3-300x163.jpg";
import cphoto3Big from "./images/collabolist/This-is-Collabolists-3.jpg";
import cphoto4 from "./images/collabolist/This-is-Collabolists-4-300x147.jpg";
import cphoto4Big from "./images/collabolist/This-is-Collabolists-4.jpg";
import cphoto5 from "./images/collabolist/This-is-Collabolists-5-300x162.jpg";
import cphoto5Big from "./images/collabolist/This-is-Collabolists-5.jpg";
import dphoto1 from "./images/year-2053/Phone-Screenshot-1-169x300.png";
import dphoto1Big from "./images/year-2053/Phone-Screenshot-1.png";
import dphoto2 from "./images/year-2053/Phone-Screenshot-2-169x300.png";
import dphoto2Big from "./images/year-2053/Phone-Screenshot-2.png";
import dphoto3 from "./images/year-2053/Phone-Screenshot-4-169x300.png";
import dphoto3Big from "./images/year-2053/Phone-Screenshot-4.png";
import dphoto4 from "./images/year-2053/Screenshot_2017-12-24-04-59-07-169x300.png";
import dphoto4Big from "./images/year-2053/Screenshot_2017-12-24-04-59-07-576x1024.png";
import dphoto5 from "./images/year-2053/Year-2053-Screenshot-1-169x300.png";
import dphoto5Big from "./images/year-2053/Year-2053-Screenshot-1-576x1024.png";
import dphoto6 from "./images/year-2053/Year-2053-Logo-Revised-2-300x300.png";
import ephoto4 from "./images/wordpress/Screenshot-2021-06-25-152251-300x256.png";
import ephoto4Big from "./images/wordpress/Screenshot-2021-06-25-152251-768x656.png";
import ephoto5 from "./images/wordpress/Screenshot-2021-06-25-152304-300x161.png";
import ephoto5Big from "./images/wordpress/Screenshot-2021-06-25-152304-1024x550.png";
import ephoto6 from "./images/wordpress/Screenshot-2021-06-25-152312-300x154.png";
import ephoto6Big from "./images/wordpress/Screenshot-2021-06-25-152312-1024x526.png";
import ephoto7 from "./images/wordpress/20210404_055244-2-300x300.jpg";
import ephoto7Big from "./images/wordpress/20210404_055244-2-768x768.jpg";
import codecademyLogo from "./images/education/320px-Codecademy.svg.png";
import hackerRankLogo from "./images/education/800px-HackerRank_Icon-1000px.png";
import chaffeyLogo from "./images/education/logo-and-type.png";
import ivcLogo from "./images/education/ivc-logo-color.png";
import mtSacLogo from "./images/education/fullcolor_email.jpg";
import logo from "./images/education/navy-seal.gif";

const sectionState = {
   bySection: {
      skills: {
         name: "Skills",
         byPage: {
            index: {
               title: "List",
               content: [
                  {
                     type: "description",
                     data: [
                        {
                           element: "h3",
                           children: ["Skills Introduction"],
                        },
                        {
                           element: "p",
                           children: [
                              "Here are some of the technologies I am experienced with. As I spend a lot of time studying, this list is subject to frequent expansion and updating.",
                           ],
                        },
                        {
                           element: "p",
                           children: ["Click a skill for more info."],
                        },
                        {
                           element: "p",
                           children: ["Values current as of March 14, 2022"],
                        },
                        {
                           element: "ul",
                           children: [
                              {
                                 element: "li",
                                 children: [
                                    {
                                       element: "span",
                                       attr: [
                                          {
                                             name: "className",
                                             value: "skill-5",
                                          },
                                       ],
                                       children: ["▀ ▀ ▀ ▀ ▀"],
                                    },
                                    "Proficient (>500 hrs of study)",
                                 ],
                              },
                              {
                                 element: "li",
                                 children: [
                                    {
                                       element: "span",
                                       attr: [
                                          {
                                             name: "className",
                                             value: "skill-4",
                                          },
                                       ],
                                       children: ["▀ ▀ ▀ ▀"],
                                    },
                                    "Decently Proficient (150 to 500 hrs of study)",
                                 ],
                              },
                              {
                                 element: "li",
                                 children: [
                                    {
                                       element: "span",
                                       attr: [
                                          {
                                             name: "className",
                                             value: "skill-3",
                                          },
                                       ],
                                       children: ["▀ ▀ ▀"],
                                    },
                                    "Practical Proficiency (30 to 150 hrs of study)",
                                 ],
                              },
                              {
                                 element: "li",
                                 children: [
                                    {
                                       element: "span",
                                       attr: [
                                          {
                                             name: "className",
                                             value: "skill-2",
                                          },
                                       ],
                                       children: ["▀ ▀"],
                                    },
                                    "Some Study/Experience (3 to 30 hrs of study)",
                                 ],
                              },
                              {
                                 element: "li",
                                 children: [
                                    {
                                       element: "span",
                                       attr: [
                                          {
                                             name: "className",
                                             value: "skill-1",
                                          },
                                       ],
                                       children: ["▀"],
                                    },
                                    "Want to Learn (0 to 3 hrs of study)",
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
                           level: 5,
                           description:
                              "Extensive experience using HTML. Not much else to say!",
                        },
                        {
                           id: "skill-31",
                           skill: "CSS",
                           level: 5,
                           description:
                              "Very proficient with CSS, including things like flexbox. Can style and organize most anything on the screen without the use of any libraries.",
                        },
                        {
                           id: "skill-2",
                           skill: "React",
                           level: 4,
                           description:
                              "I am relatively new with React (around 9 months) but I spend a huge amount of time using it on a daily basis. I created this site using Reach and working on other projects as well. I know the latest features and many common libraries.",
                        },
                        {
                           id: "skill-3",
                           skill: "Redux",
                           level: 2,
                           description:
                              "Like with React, I started using Redux somewhat recently. I am confident in my ability to manage complex application state with Redux, but I am still a few months away from complete mastery. I know how to use many of its modern features including the Redux Toolkit and RT Query.",
                        },
                        {
                           id: "skill-4",
                           skill: "JavaScript",
                           level: 4,
                           description:
                              "I have extensive knowledge of JavaScript, including its modern features.",
                        },
                        {
                           id: "skill-5",
                           skill: "REST APIs",
                           level: 3,
                           description:
                              "I can create a REST API from scratch. Good understanding of how clients and servers use HTTP to communicate. Understand security concepts, CORS, cookies, API authorization, and the client-side fetch library.",
                        },
                        {
                           id: "skill-6",
                           skill: "SQL",
                           level: 4,
                           description:
                              "I have a lot of experience designing stable and efficient tables. I can use SQL adeptly to find the exact information I need. I have been using PostgreSQL recently, but most of my experience is with using MySQL.",
                        },
                        {
                           id: "skill-7",
                           skill: "Algorithms",
                           level: 3,
                           description:
                              "I have earned 6 / 6 stars for Problem Solving (i.e., Algorithms) on HackerRank and have learned many advanced data structures concepts. There's still much I need to learn, but I think I have a lot of the basics down.",
                        },
                        {
                           id: "skill-8",
                           skill: "UX/UI",
                           level: 3,
                           description:
                              "I have an intermediate understanding of web design and usability principles. It is not my strongest suit, however.",
                        },
                        {
                           id: "skill-9",
                           skill: "Mandarin",
                           level: 3,
                           description:
                              "One of my greastest passions in life is learning and using foreign languages. I have learned so many in my life, but have lost fluency in many of them due to lack of use. Mandarin is one language I can still communicate in with at least marginal competence. My ability to read and write has grown a bit stale, however.",
                        },
                        {
                           id: "skill-10",
                           skill: "Spanish",
                           level: 3,
                           description:
                              "I can speak and understand a lot of Spanish. I learned the language by purposefully watching a lot of Spanish-language television as a teenager. Long ago, I also worked in a warehouse where virtually all the other employees spoke Spanish exclusively.",
                        },
                        {
                           id: "skill-12",
                           skill: "PHP",
                           level: 2,
                           description:
                              "I have spent a lot of time using PHP in the past (my first several personal projects were coded in PHP), but my knowledge has grown stale over the years.",
                        },
                        {
                           id: "skill-13",
                           skill: "Java",
                           level: 2,
                           description:
                              "I created an Android app using Java, but that was years ago.",
                        },
                        {
                           id: "skill-32",
                           skill: "C++",
                           level: 2,
                           description:
                              "I've spent time using C++ in the past, but that was long ago.",
                        },
                        {
                           id: "skill-14",
                           skill: "Git",
                           level: 2,
                           description:
                              "I am in the process of gaining git fluency.",
                        },

                        {
                           skill: "Express",
                           id: "skill-16",
                           level: 3,
                           description:
                              "I have experience using Express to build APIs. I can create a REST API from scratch. Good understanding of how clients and servers use HTTP to communicate. Understand security concepts, CORS, cookies, and authorization.",
                        },
                        {
                           skill: "Auth/JWTs",
                           id: "skill-17",
                           level: 3,
                           description:
                              "Can build a secure authentication and authorization system from scratch using hashing algorithms (for login authentication) and JSON web tokens.",
                        },
                        {
                           skill: "TypeScript",
                           id: "skill-18",
                           level: 1,
                           description: "I plan to learn TypeScript soon.",
                        },
                        {
                           skill: "Containers",
                           id: "skill-19",
                           level: 2,
                           description:
                              "Limited knowledge of containers and containerization, but currently learning how to use them.",
                        },

                        {
                           id: "skill-24",
                           skill: "RegEx",
                           level: 2,
                           description:
                              "I've trained myself to use regular expressions, but I still need more practice.",
                        },
                        {
                           id: "skill-33",
                           skill: "Axios",
                           level: 3,
                           description:
                              "Initially using Fetch, I recently switched to using Axios for its more robust features. I can use features such as interceptors, but need more time to learn how to use the library to its fullest extent.",
                        },
                        {
                           id: "skill-25",
                           skill: "React Native",
                           level: 1,
                           description:
                              "I am not yet skilled with React Native, but I plan to soon learn it.",
                        },
                        {
                           id: "skill-34",
                           skill: "Next.js",
                           level: 1,
                           description:
                              "I plan to soon learn Next.js for server-side rendering.",
                        },
                        {
                           id: "skill-27",
                           skill: "Remote dev.",
                           level: 4,
                           description:
                              "All development for my current personal projects are done using remote servers (I currently use Digital Ocean). I know how to use SSH to securely connect to servers and use port-forwarding to connect my browser and apps to relevant ports.",
                        },
                        {
                           id: "skill-28",
                           skill: "Linux/Ubuntu",
                           level: 3,
                           description:
                              "All my development is done remotely on Ubuntu 20.04 LTS. I know how to use many CLI utilities, but there are still gaps in my knowledge that I am working to fill.",
                        },
                        {
                           id: "skill-29",
                           skill: "Visx",
                           level: 1,
                           description: "I would like to learn how to use Visx",
                        },
                        {
                           id: "skill-30",
                           skill: "React Spring",
                           level: 1,
                           description:
                              "Would like to learn React Spring. Either this, or Framer Motion (or both?)",
                        },
                        {
                           id: "skill-35",
                           skill: "Debugging",
                           level: 2,
                           description:
                              "I have some experience using VS Code's debugger.",
                        },
                        {
                           id: "skill-36",
                           skill: "Cypress",
                           level: 1,
                           description:
                              "I have some knowledge of Cypress, but wish to learn a lot more.",
                        },
                        {
                           id: "skill-37",
                           skill: "React Testing Library",
                           level: 1,
                           description:
                              "Hope to learn how to use react-testing-library to its fullest extent.",
                        },
                     ],
                  },
               ],
            },
         },
         allPages: ["index"],
         allPageTitles: ["index"],
      },
      education: {
         name: "Education",
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
                              "Here are a few of the classes I took before transferring to university. The overall course grade I received for each is indicated on the left. I had a near-perfect GPA the last couple of years I was studying (despite my brutal living conditions at the time).",
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
                                 children: ["A | General Chemistry (I) w/ Lab"],
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
                              "I studied economics at UCSB and had virtually everything paid for by the state and the university, but I withdrew a couple quarters short of graduation due to a lifetime of untreated health problems. I had health insurance for the first time in my life through the university, so I was able to access much-needed services. I would love to discuss my history further if you have any questions.",
                           ],
                        },
                        {
                           element: "p",
                           children: [
                              "Here are a few of the upper-division courses I completed at UCSB before my withdrawal.",
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
                           name: "Full-Stack Engineering Cert",
                           subheading: "Codecademy",
                           logo: codecademyLogo,
                        },
                        {
                           name: "Rest API–Intermediate Test",
                           subheading: "HackerRank",
                           logo: hackerRankLogo,
                        },
                        {
                           name: "SQL–Intermediate Test",
                           subheading: "HackerRank",
                           logo: hackerRankLogo,
                        },
                        {
                           name: "JavaScript–Basic Test",
                           subheading: "HackerRank",
                           logo: hackerRankLogo,
                        },
                        {
                           name: "Problem Solving–Basic Test",
                           subheading: "HackerRank",
                           logo: hackerRankLogo,
                        },
                        {
                           name: "CSS Test",
                           subheading: "HackerRank",
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
                              "I am eternally fascinated and in love with the world around me. I have an insatiable appetite for information and consume it every hour of the day.",
                           ],
                        },

                        {
                           element: "p",
                           children: [
                              "Although my interests are infinitely broad, my most passionate interests include:",
                           ],
                        },

                        {
                           element: "ul",
                           children: [
                              {
                                 element: "li",
                                 children: ["Technology"],
                              },
                              {
                                 element: "li",
                                 children: ["Finance"],
                              },
                              {
                                 element: "li",
                                 children: ["Economics"],
                              },
                              {
                                 element: "li",
                                 children: ["Foreign policy"],
                              },
                              {
                                 element: "li",
                                 children: ["Journalism"],
                              },
                              {
                                 element: "li",
                                 children: ["Politics"],
                              },
                              {
                                 element: "li",
                                 children: ["Languages"],
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
                           children: ["Recent Books"],
                        },
                        {
                           element: "p",
                           children: [
                              "As an adult, I've read hundreds of books on topics spanning my various interests. Most recently, I have read:",
                           ],
                        },
                     ],
                  },
                  {
                     type: "books",
                     data: [
                        {
                           title: "Antitrust",
                           author: "Amy Klobuchar",
                        },
                        {
                           title: "The Price of Peace",
                           author: "Zachary D. Carter",
                        },
                        {
                           title: "Why We're Polarized",
                           author: "Ezra Klein",
                        },
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
                           title: "A People's History of the United States",
                           author: "Howard Zinn",
                        },
                        {
                           title: "How to Avoid a Climate Disaster",
                           author: "Bill Gates",
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
                           element: "p",
                           children: [
                              "I listen to podcasts several hours a day as I clean, drive, cook, etc.",
                           ],
                        },
                        {
                           element: "ul",
                           children: [
                              {
                                 element: "li",
                                 children: ["Pod Save the World"],
                              },
                              { element: "li", children: ["Pod Save America"] },
                              { element: "li", children: ["Sway (NYT)"] },
                              {
                                 element: "li",
                                 children: ["The Ezra Klein Show (NYT)"],
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
                              "As a child, I had always dreamed of going far, far away to escape my environment, and I managed to do so on occasion, whether or not I really had the means to do so. My explorations here and abroad (and all the wonderful people I have met) have had a profoundly positive impact on my growth as a person.",
                           ],
                        },

                        {
                           element: "p",
                           children: [
                              "A few of the countries I have thus far been fortunate to [budget] explore include:",
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
                              "Owing to a largely chaotic childhood, my education has been very nontraditional. ",
                           ],
                        },
                        {
                           element: "p",
                           children: [
                              "I had very little guidance as a child. I began drinking hard liquor at age 9, lived with adult friends at age 12 and 13, was expelled from 7th grade, and dropped out of high school in 9th grade. After many horrible years, and with insane effort, I managed to get into community college and go to university. But tragically, I never took a moment to heal from it all (nor did I have the ability to do so before university).",
                           ],
                        },
                        {
                           element: "p",
                           children: [
                              "Much of my life was difficult and extremely insecure, but my hope for the future never relented. I have lived in my car and gone almost my entire life without a bed, but my goals have always kept me moving forward. Things are better today than ever before, and I am eager for what comes next.",
                           ],
                        },
                     ],
                  },
               ],
            },
         },
         allPages: ["index"],
         allPageTitles: ["index"],
      },
      "old-projects": {
         name: "Old Projects",
         byPage: {
            "lets-ask-bobby": {
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
                                 subtitle: "Logo I put together at the time.",
                              },
                           ],
                           description: [
                              {
                                 element: "p",
                                 attr: [],
                                 children: [
                                    "Let's Ask Bobby was a social networking site I developed as a teen (my name used to be Bobby, legally changed to Michael as a teen). An avid MySpace user, this was my attempt at improving what I perceived to be the many shortcomings of the platform. Like MySpace, Let's Ask Bobby had core user functionalities like a login system, profile area, and sections for uploading photos and albums.",
                                 ],
                              },
                              {
                                 element: "p",
                                 attr: [],
                                 children: [
                                    "The biggest improvement I made over MySpace was the ability to send messages and perform certain functions without needing to refresh the page (using AJAX).",
                                 ],
                              },
                              {
                                 element: "p",
                                 attr: [],
                                 children: [
                                    "I learned HTML and CSS by staring at MySpace code for hours, but I quickly learned the limits of using only client-side technologies. I learned JavaScript but also PHP, XML, JSON, AJAX, and SQL, among others.",
                                 ],
                              },
                              {
                                 element: "p",
                                 attr: [],
                                 children: [
                                    "I coded everything using the Notepad app on Windows. I remember often having to count through thousands of lines of code in different files just to locate bugs (since the editor had no line numbers). It was painfully inefficient. I didn't know better.",
                                 ],
                              },
                              {
                                 element: "p",
                                 attr: [],
                                 children: [
                                    "I never took any screenshots of this project, but I found my comically dated logo among the site files I still have.",
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
                           period: "Aug 2012 to Feb 2013",
                           tech: "HTML, CSS, JavaScript, PHP, SQL, MySQL, AJAX, XML, Apache",
                           images: [
                              {
                                 small: cphoto5,
                                 large: cphoto5Big,
                                 subtitle: "Add new row",
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
                                    "I worked at a company called TransPerfect where I essentially helped set up computers for employees. We frequently used unwieldy Excel files for managing passwords, and these files usually took several minutes to sync and load. I was once again witness to the inefficiency of Excel spreadsheets for some applications, and Collabolist was my attempt at a solution.",
                                 ],
                              },
                              {
                                 element: "p",
                                 children: [
                                    "I worked on Collabolist every hour I was not at work. Having recently worked on Geller Portal, I still had programming fresh in my mind. As with my previous projects, I used AJAX extensively to enable functionality without the need to refresh the browser page.",
                                 ],
                              },
                              {
                                 element: "p",
                                 children: [
                                    "The photos do not reflect the final product, but I cannot locate more recent screenshots.",
                                 ],
                              },
                              {
                                 element: "p",
                                 children: [
                                    'Note: The images have the plural "Collabolists" since I changed the name at the last minute due to my preferred domain already being reserved.',
                                 ],
                              },
                           ],
                        },
                     ],
                  },
               ],
            },
            index: {
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
                                    "Geller Portal was a system I created for my employer at the time, Geller International. Originally hired to perform basic tasks such as driving and delivering things, I was passively witness to their many inefficient in-office processes.",
                                 ],
                              },
                              {
                                 element: "p",
                                 children: [
                                    "Determined to help the company better organize its data and streamline the creation of documents, I took it upon myself to develop for them a system to help tame the chaos.",
                                 ],
                              },
                              {
                                 element: "p",
                                 children: [
                                    "I worked on Geller Portal at home after work every day for a couple of months before revealing the project to my boss. He was very pleased and quickly demanded its implementation and use (the company only had several employees, so this wasn't a radical change). I stored much of the company's data in a MySQL database and retrieved it using the Geller Portal as well as a few database-connected Excel templates I made to create pre-filled documents.",
                                 ],
                              },
                              {
                                 element: "p",
                                 children: [
                                    "I built this system with the knowledge I gained from working on Let's Ask Bobby years earlier, using many of the same technologies.",
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
                                 subtitle: "Dialogue",
                              },
                              {
                                 small: dphoto2,
                                 large: dphoto2Big,
                                 subtitle: "Bookmarks",
                              },
                              {
                                 small: dphoto3,
                                 large: dphoto3Big,
                                 subtitle: "Title screen",
                              },
                              {
                                 small: dphoto4,
                                 large: dphoto4Big,
                                 subtitle: "Another screen",
                              },
                              {
                                 small: dphoto5,
                                 large: dphoto5Big,
                                 subtitle: "Main",
                              },
                              {
                                 small: dphoto6,
                                 large: dphoto6,
                                 subtitle: "App logo",
                              },
                           ],
                           description: [
                              {
                                 element: "p",
                                 children: [
                                    "Year 2053 was a satirical, dark-humor-laden, text-based choose-your-own-adventure-type game complete with background sound effects and voice acting (myself doing all the voices). Gameplay starts in year 2018, but was meant to eventually arrive at mid-21st-century America. Every choice the game player makes affects the story. This was my one and only foray into Android development.",
                                 ],
                              },
                              {
                                 element: "p",
                                 children: [
                                    "There were many interesting challenges to this project that I needed to solve. I had to program the evolving nature of the story, especially with the algorithmic diverging and intersecting of storylines. I programmed the game to dynamically and seamlessly connect over a hundred audio files in different orders and patterns depending on choices made in the past. I made huge flowcharts to help me connect all the pieces.",
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
                                       children: ["Creating basic graphics"],
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
                                    "This project was a little unusual. I discovered WordPress in 2019 and started about eight or nine websites covering everything from finance to travel. None of these websites are online anymore, but I still have backups for each.",
                                 ],
                              },

                              {
                                 element: "p",
                                 children: [
                                    "Using WordPress was not the most fulfilling thing I'd ever done, but I learned a lot of useful information. I read countless books on marketing, time management, productivity, business management, and others. I learned how to create graphics, manage projects (my own), legal topics (copyrights, privacy, etc), basic web security, and web analytics, just to name a few. I gained a deep understanding of how the modern internet functions. I also learned how to take nice photos of cookies, which is of dubious usefulness in most domains of life.",
                                 ],
                              },

                              {
                                 element: "p",
                                 children: [
                                    "My final WordPress project was Omaha Cookie Co., an online-only premium cookie shop. I moved to Nebraska when the novel coronavirus struck since Omaha had some of the cheapest apartment rents in the country. Since I had an oven (albeit very cheap one), I figured I would sell cookies. I learned a lot about food chemistry and baked over a thousand cookies to test recipes, most of which I sent to my best friend by mail. I created an ingredient-management and costing system to perfectly account for per-cookie and per-product costs. I also made a nutrition facts system to generate accurate labels using my recipes.",
                                 ],
                              },
                           ],
                        },
                     ],
                  },
               ],
            },
         },
         allPages: ["index", "collabolist", "year-2053", "wordpress"],
         allPageTitles: [
            "index",
            "Collabolist",
            "Year 2053",
            "WordPress Stuff",
         ],
      },
      faq: {
         name: "FAQ",
         byPage: {
            index: {
               title: "FAQ",
               content: [
                  {
                     type: "faq",
                     data: [
                        {
                           question: "What is the purpose of this FAQ?",
                           answer:
                              "To help explain my deeply complex history and explain how I will be a great candidate. To convince you that I would be a fantastic candidate despite my non-traditional past. It may be a bit TMI, but i hope it will help answer any lingering questions you may have.",
                        },
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
                           answer: "Also yes.",
                        },

                        {
                           question:
                              "Are you willing to relocate if necessary?",
                           answer:
                              "Yes, to anywhere, but I am particularly dreaming of New York City.",
                        },

                        {
                           question: "How many hours per week can you work?",
                           answer:
                              "I am not bound by any time constraints. My focus is on delivering results and growing as an individual and professional.",
                        },

                        {
                           question: "Are you fully vaccinated?",
                           answer:
                              "Yes, three (3) Modernas: two Moderna standard doses + one Moderna booster. My bloodstream is teeming with antibodies.",
                        },

                        {
                           question:
                              "You got into a good university. Why didn't you finish? Why didn't you seize the opportunity?",
                           answer:
                              "I did, so much so that it almost killed me. I came from the torturous underbelly of American society and worked so, so hard to just climb to the surface. But I was always there to grasp every opportunity I could get. Even before my first quarter at UCSB, I had already been accepted to study abroad at the University of Copenhagen for half a year, all expenses paid. I was also already planning to apply for a term at the London School of Economics after Copenhagen. But I was a complete mess. UCSB extended to me a grand opportunity that I was fully incapable of seizing at the time. I was so deeply broken that my mind completely fell apart after a couple of months. A lifetime of harsh conditions had finally destroyed me.",
                        },
                        {
                           question: "What was life like growing up?",
                           answer:
                              "A short history might provide some context. My mother left me when I was 5 and my father was not at all present. I drank alone and often heavily from the age of 9, already determined to numb the pain and insecurity I felt daily. At ages 12 and 13 I smoked marijuana and lived with adult friends. I was expelled from 7th grade and dropped out in 9th grade. I never had a permanent place to live growing up. I spent most of my childhood on the floor of different relative's houses, going weekly from home to home over the course of a decade. I kept all my belongings in plastic bags and dreamed of one day having a permanent place to put them down permanently. I was often alone and completely in charge of my own life. Even before adolescence, I already cooked my own food and walked to store to get my own groceries. There was never an adult who really had my back, no one to protect or guide me. No one to suggest I brush my teeth or go to bed. I had OCD and other medical ailments that were never treated. I was a gay brown kid with heavily worn clothes, bad eyesight, and attrocious self-esteem, deeply embarrassed to show emotion, embarrassed to go barefoot or even wear shorts.",
                        },
                        {
                           question: "How did you begin educating yourself?",
                           answer:
                              "Even from a very young age, I had an deep fascination with the world. Even in the few months before dropping out in 9th grade, I couldn't care less about my school grades, but I spent countless hours after school and into the night learning Japanese. I have forgotten practically all vocabularly, but I can still read and write their two phonetic character systems. I eventually took the California high school equivalency exam (the CHSPE) and started community college. I knew nothing about college, so it took me a while to even recognize the opportunities. ",
                        },
                        {
                           question:
                              "While in community college, what occupied your time while classes were not in session?",
                           answer:
                              "For several years, before I realized that transferring to a university from community college was even possible, my overall view of formal education was pretty dour. In my mind, not attending high school was already a death knell for my career prospects, so it was entirely up to me, outside of the formal education system, to figure out how to escape my situation. For years, I thought my only option for escaping poverty was to make the money myself. At age 18, I read a couple dozen books to master the the stocks, options, and futures markets as well as currencies. I obsessed for months over charts and graphs. Ultimately, I didn't have a spare dime to invest. I also programmed whenever I could, thinking that building online software would be the way to make money. I even built software for jobs I was working at, not . As far as I knew at the time, community college was a dead end with no hope for. I had no concept of there was no such thing as working one's way up a ladder. I didn't even know anyone for whom that was true. Aside from diving into my various interests, I also worked much of the time. One warehouse job had me commuting up to four hours daily (two hours each way).",
                        },
                        {
                           question:
                              "How did you eventually make it to university?",
                           answer:
                              "Once I was aware of the possibility of transferring to UCLA, UC Berkeley, or other UC schools, I pushed myself to the extreme, way beyond any healthy boundaries. I demanded of myself perfect grades in my classes. I studied upwards of 20 hours per day, sleeping insanely few hours. I wouldn't see friends for months at a time; I didn't even spend much time eating. I was fortunate to have some relatives who allowed me to sleep on their living room floor, but it was awfully uncomfortable, crowded, and noisy almost 24 hours a day. Already suffering from extreme and untreated anxiety, I slipped into an even deeper depression and panic. I couldn't breathe 90% of every day. I often studied while standing or pacing because I was much too anxious to sit down. Whenever I managed to get any sleep, I would wake up every single hour panicking and breathless, not knowing where I was for several seconds each episode. I felt claustrophobic and anxious while closing my eyes to apply shampoo, anxiety whenever my phone rang, panic if I didn't know exactly where my car was, and even panic whenever my phone left my hand for even a moment (the phone was a way to call for help if I needed it, according to my brain at the time). I survived those years by feeling completely numb. The world had no color whatsoever. While I never had a sense of security or wellbeing in my life, I never felt as broken as I did  during this time. Life was utterly miserable, but I never complained. This continued for many semesters. no congratulations for getting into university. no one cared.",
                        },

                        {
                           question: "What made you leave university?",
                           answer:
                              "Fast forward to my first quarter at UCSB, I was determined to continue my progress and do.. It was all a complete culture shock since I was surrounded by young adults who were lifetimes more well-rounded than I was. I was determined to catch up. I joined the model UN where students were wearing suits. The communication skills of these young people baffled me. I had never even seen a suit up close in my life. I succeeded academically in community college, but I was not thriving. My greatest concern was just getting through each day without falling apart... I still had no concept of internships and.. After I transferred to university, the pressure I placed on myself only intensified. My anxiety eventually got so high that I couldn't even leave my room. I reached a state of unending panic. I cried for days and knew that I needed to get help. I really, really want to go back to university and finish my degree, but I also really, really want a job so that I can create for myself a long-lasting sense of stability. When I got to university, I still didn't even understand the purpose of internships, and I couldn't even fathom the idea of working for free.",
                        },
                        {
                           question:
                              "Why didn't you get help before university?",
                           answer:
                              "There are plenty of reasons why I didn't get help sooner. First, health insurance is something I didn't have for almost all of my pre-university life. Second, I didn't have the outside perspective of a caring adult who could recognize that something was wrong. Third, I myself didn't realize that my experience was terribly abnormal. I was pretty much in crisis my entire life; it had somewhat become part of who I was. I simply did not have enough information to self-diagonose. Only in retrospect was it obvious that I had OCD as a pre-teen. Misery to varying degrees was all I had ever known, so it was not obvious that there was a better way of living.",
                        },

                        {
                           question:
                              "After you got help, why didn't you return to UCSB?",
                           answer:
                              "I went back for a semester here and there, but I had by then grown deeply apathetic. I had endured such pain and torment for years to get to where I was, only to see my future fall apart in a matter of days. There would be no more Denmark or London to look forward to. but I felt sick just thinking about how awful I had felt all those years. Plus, the mind-numbing cost of living in Santa Barbara meant that my $750 rent was only enough to share a bedroom in a dirty, crowded apartment with no hot water. Mostly, I just wanted to get away from Santa Barbara. With the help of medication, I was no longer in a constant panic, but I couldn't bare thinking about the past. I was told I had PTSD, but I thought that was completely absurd. I now accept that it was. A lifetime of bad memories continuously flooded my mind. I knew I would be all right, but I needed a lot more help.",
                        },

                        {
                           questions: "When did things start to turn around?",
                           answers:
                              "First, I went to Taiwan. Food was as little as $0.50 a meal, and my apartment cost only $120 per month. It was all I had ever wanted. I made a ton of good friends and managed to speak passable Mandarin within a few months. I spent roughly one year in Taiwan total over the span of Two years. I spent a ton of time writing chinese. Back in the U.S., I had a couple of relatives in rural Indiana who offered me a place to stay with them. This was the most therapeutic period of my life. I allowed myself to regress in age a bit, which.. I was absolutely astounded by what parents actually did for their children. I worked on an android app They spoke with their kids' teachers, told them to do their homework, brought them to extracurricular activities. I felt like a belonged to something meaningful: a family. taiwan, indiana. I saw what some parents did for their kids, and I experienced some of it myself. I felt secure for the first time in my life. Even though I was already 23, it was the most therapeutic thing I had ever experienced. Today, there is nothing I cannot handle. As long as my very basic needs are met, there is nothing I cannot handle. For everything else, my therapist will be the sole recipient of my baggage. Sure, but all manifestations of such shall be limited to the office of a therapist (once I can afford to get one). Otherwise, any baggage I have remains stowed in the overhead compartment. I still have painfully memories and insecurities, but it does not affect my daily life..  No one cared. . I am no longer burdened by .. I no longer wake up e. Because your high standards are mine as well. Circumstances that had once plagued me no longer exist. I am no longer gripped by panic. Panic that I felt on an hourly basis eventually decreased to daily to weekly to monthly and eventually not at all. My sanity is no longer held together with scotch tape",
                        },
                        {
                           question:
                              "How have you spent the past several years?",
                           answer:
                              "after taiwan, homeless. not once in my life did not go a day without learning something. Every day of my life is like university. In Taiwan, I spent up to 8 hours a day or more writing chinese characters. I do not drink , smoke, no interest in video games, . read. I was always extremely productive somehow. i am caring for my grandmother right now. politics are a huge interest of mine. Until today, I read the New York Times for at least four hours a day. podcasts. helps me forget about my plight. I have voted since I was 18, and never missed a presidential debate in the primaries or general. I have no other focus than on the future. read a ton of books on marketing and self-help. covid. I read countless books on marketing and",
                        },

                        {
                           question:
                              "You were developing software years ago. Why did you stop?",
                           answer:
                              "This might sound funny, but until somewhat recently I didn't even realize that software development was a viable career option. I distinctly remember looking up development jobs years ago and virtually all of them paid around $12 per hour, with many of the listings seemingly scams. From that point on, I realized that this was never going to be something I could make a living from. I figured it was an all or nothing proposition. I far as I knew, MySpace, Facebook, Google, and all the other popular .. arrived at their current state at the hands of just one person. As far as I knew, it was Zuckerberg alone who built Facebook. I either had to do it all, or not even try; there was no existence of a middle ground. It stuck with me for years. I was obviously sorely wrong, but I didn't have anyone to tell me otherwise. And as an adult, owing to my limited professional network, I remained unexposed to tech-related professions. Now that I have gained compentence in modern software technologies, I absolutely love it.",
                        },

                        {
                           question:
                              "Why is your professional network so sparse?",
                           answer:
                              " I plan on broadening my professional network drastically. I had no concept of moving up. I had no concept of college. I didn't even fully grasp what high school was like. I am very much convinced how vital a network will prove to be.",
                        },
                        {
                           question:
                              "What are your career priorities after getting hired?",
                           answer:
                              "(1) Expand my skillset dramatically, (2) Grow my professional network, (3) Go to conferences and tech-related meetups, (4) Start writing tutorials and tech-related articles, (5) Buy a better computer. I would do everything in my power to become a capable and reliable colleague.",
                        },
                        {
                           question:
                              "What are your *personal* priorities after getting hired?",
                           answer:
                              "[1st Quarter]: (1) Get very healthy, (2) Learn how to dress like an adult, (3) Buy adult clothes, (4) Make new friends, (5) See a therapist regularly, (6) Buy all the books I've been wanting to read. (7) Join toastmasters, or something similar. [2nd Quarter]: (8) Leave the country for a week (if possible), (9) Attend meetups to practice my Frech, Spanish and Mandarin, (10) Do some volunteer work. [3rd Quarter]: (11) Start a podcast, (12) Start dating",
                        },

                        {
                           question: "Why should we hire you?",
                           answer:
                              "Because I am still doing this, despite punishing obstacles.",
                        },
                     ],
                  },
               ],
            },
         },
         allPages: ["index"],
         allPageTitles: ["index"],
      },
      "new-projects": {
         name: "Sandbox",
         byPage: {
            todo: {
               title: "To-Do List",
               content: [
                  {
                     type: "description",
                     data: [
                        {
                           element: "p",
                           children: [
                              "A basic to-do list with beefed up features.",
                           ],
                        },
                        {
                           element: "p",
                           children: ["What I used for this project:"],
                        },
                        {
                           element: "ul",
                           children: [
                              {
                                 element: "li",
                                 children: [
                                    "Redux - To manage and maintain application state across this site, as well as to cache fetched results.",
                                 ],
                              },
                              {
                                 element: "li",
                                 children: [
                                    "PostgreSQL Database - To back up data and enable data access across devices. Users must log in in order to have data saved in database.",
                                 ],
                              },
                              {
                                 element: "li",
                                 children: [
                                    "Local Storage - To persist data when user is not logged in.",
                                 ],
                              },
                              {
                                 element: "li",
                                 children: [
                                    "React - Used for the frontend components, just like the rest of this site.",
                                 ],
                              },
                              {
                                 element: "li",
                                 children: [
                                    "Express - Used to create the API which queries the database and serves the data.",
                                 ],
                              },
                              {
                                 element: "li",
                                 children: [
                                    "OAuth 2.0 w/OpenID Connect - Easy user authentication.",
                                 ],
                              },
                              {
                                 element: "li",
                                 children: [
                                    "not sure yet - Used for simple authentication (for users not comfortable with connect with their Google account.",
                                 ],
                              },
                              {
                                 element: "",
                                 children: [""],
                              },
                           ],
                        },
                        {
                           element: "p",
                           children: [
                              "Many of these features are obviously unnecessary for a simple to-do list, but it was all done for educational purposes.",
                           ],
                        },
                        {
                           element: "",
                           children: [],
                        },
                        {
                           element: "",
                           children: [],
                        },
                        {
                           element: "",
                           children: [],
                        },
                     ],
                  },
                  {
                     type: "sandbox",
                     data: "project-1",
                  },
               ],
            },
            index: {
               title: "Intro",
               content: [
                  {
                     type: "description",
                     data: [
                        {
                           element: "h3",
                           children: ["New Projects Intro"],
                        },
                        {
                           element: "p",
                           children: [
                              "Here are a couple of basic projects I have recently started.",
                           ],
                        },
                        {
                           element: "p",
                           children: [
                              'Why are there so few of them? Well, although I study around the clock, I have focused less on large production-ready projects and more on specialized "mini-projects" to try to master individual concepts before moving on to complete projects. For instance, I just spent the past couple of weeks mastering authentication and authorization using access tokens and refresh tokens. backend, front end. ',
                           ],
                        },
                        {
                           element: "p",
                           children: [
                              "Instead of connecting the auth system to a specific project, I instead moved on to trying to gain an intimitate understanding of advanced React concepts and the exact workings of hooks such as useMemo, useEffect, useContext, and all the others.",
                           ],
                        },
                        {
                           element: "p",
                           children: [
                              "Should I have focused less on quality and more on quantity? Yes, I think so. Nevertheless, here are a couple of projects I plan to focus on soon.",
                           ],
                        },
                     ],
                  },
               ],
            },
            pokemon: {
               title: "Pokemon Explorer",
               content: [
                  {
                     type: "description",
                     data: [
                        {
                           element: "h3",
                           children: ["Pokemon Explorer"],
                        },
                        {
                           element: "p",
                           children: [
                              "Super simple app that makes calls to a public API called PokeAPI. I'll probably add more features in the future. I will also add more projects to this sandbox section. I'm not into Pokemon, but this seemed like an interesting API to work with.",
                           ],
                        },
                     ],
                  },
                  {
                     type: "sandbox",
                     data: "pokemon",
                  },
               ],
            },
            "site-one": {
               title: "Site One",
               content: [
                  {
                     type: "description",
                     data: [
                        {
                           element: "p",
                           children: [
                              "I created it from scratch in order to carefully study the theory behind...",
                           ],
                        },
                        {
                           element: "p",
                           children: [
                              "I JSON web tokens (JWTs) and hashing algorithms to make the login as secure and efficient as possible. All requests are made asynchronously by communicating with my API endpoints. All user information is stored in a database and is accessible from any device.",
                           ],
                        },
                        {
                           element: "p",
                           children: ["Auth Details:"],
                        },
                        {
                           element: "ul",
                           children: [
                              {
                                 element: "li",
                                 children: [
                                    "JavaScript, React, HTML, CSS - The usual",
                                 ],
                              },
                              {
                                 element: "li",
                                 children: [
                                    "Access tokens are short-lived and stored in ephemeral JavaScript memory.",
                                 ],
                              },
                              {
                                 element: "li",
                                 children: [
                                    "Refresh tokens are stored in httponly cookies (inaccessible to JavaScript), and in a Postgres database server-side. Refresh tokens are rotated (invalidated) after each use.",
                                 ],
                              },
                              {
                                 element: "li",
                                 children: [
                                    "JWT secrets are stored in environment variables.",
                                 ],
                              },
                              {
                                 element: "li",
                                 children: [
                                    "User credentials are hashed with bcrypt using best practices and stored in the Postgres database.",
                                 ],
                              },
                              {
                                 element: "li",
                                 children: [
                                    "The authorization and resource servers are kept separate.",
                                 ],
                              },
                              {
                                 element: "li",
                                 children: [
                                    "Upon logout, all refresh tokens are invalidated and the current access token deleted.",
                                 ],
                              },
                           ],
                        },
                     ],
                  },
                  {
                     type: "sandbox",
                     data: "site-one",
                  },
               ],
            },
            "now-and-soon": {
               title: "Now & Soon",
               content: [
                  {
                     type: "description",
                     data: [
                        {
                           element: "p",
                           children: [
                              "I spend most of my time trying to master specific project components.",
                           ],
                        },
                     ],
                  },
                  {
                     type: "project-list",
                     data: [
                        {
                           item: "Contribute meaningfully to one open source project.",
                           completed: false,
                        },
                        {
                           item: "Answer one question on StackOverflow",
                           completed: false,
                        },
                     ],
                  },
               ],
            },
            globalicious: {
               title: "Globalicious",
               content: [
                  {
                     type: "description",
                     data: [
                        {
                           element: "h3",
                           children: ["Globalicious Introduction"],
                        },
                        {
                           element: "p",
                           children: ["It uses the REST Countries API."],
                        },
                        {
                           element: "p",
                           children: ["List of technologies I plan to use:"],
                        },
                        {
                           element: "ul",
                           children: [
                              {
                                 element: "li",
                                 children: ["React - User interface"],
                              },
                              {
                                 element: "li",
                                 children: ["Redux - State management"],
                              },
                              {
                                 element: "li",
                                 children: [
                                    "Redux Toolkit Query - Data retrieval and caching",
                                 ],
                              },
                              {
                                 element: "li",
                                 children: ["PostgreSQL - Store user values"],
                              },
                              {
                                 element: "li",
                                 children: ["Nodejs - Backend"],
                              },
                              {
                                 element: "li",
                                 children: ["JWT - Authentication"],
                              },
                           ],
                        },
                     ],
                  },
                  {
                     type: "sandbox",
                     data: "globalicious",
                  },
               ],
            },
         },
         allPages: ["index", "pokemon", "globalicious"],
         allPageTitles: ["Note", "Pokemon", "Globalicious"],
      },
   },
   allSections: ["skills", "education", "old-projects", "new-projects", "faq"],
};

// only query the sections
const portfolioState = {
   sections: [
      {
         name: "Skills",
         section_url: "skills",
      },
      {
         name: "Education",
         section_url: "education",
      },
      {
         name: "Old Projects",
         section_url: "old-projects",
      },

      {
         name: "New Projects",
         section_url: "new-projects",
      },
      {
         name: "FAQ",
         section_url: "faq",
      },
   ],
};

function App() {
   return (
      <div className="App">
         <header>
            <Link to="/">
               <h1>Michael Pimentel</h1>
            </Link>
         </header>
         <main>
            <div className="nav-list">
               <ul className="vertical-nav">
                  <NavLink key={uuid()} to={"/"}>
                     <li>Intro</li>
                  </NavLink>
                  {portfolioState.sections.map((section) => (
                     <NavLink key={uuid()} to={`/${section.section_url}`}>
                        {({ isActive }) =>
                           isActive ? (
                              <li>{section.name}</li>
                           ) : (
                              <li>{section.name}</li>
                           )
                        }
                     </NavLink>
                  ))}
               </ul>
               <div id="contact-info">
                  <ul>
                     <li>(408) 365-4328</li>
                     <li>mikecpimentel@gmail.com</li>
                     <li>
                        <a
                           href="https://www.linkedin.com/in/mikecpimentel/"
                           target="_blank"
                           rel="noreferrer"
                        >
                           LinkedIn
                        </a>
                     </li>
                  </ul>
               </div>
            </div>

            <div className="main-content-area">
               <Routes>
                  <Route key={uuid()} path="/" element={<Welcome />} />

                  {sectionState.allSections.map((section) => (
                     <Route
                        key={uuid()}
                        path={section}
                        element={
                           <Section
                              url={section}
                              tabs={sectionState.bySection[section].allPages}
                              titles={
                                 sectionState.bySection[section].allPageTitles
                              }
                              indexTabName={
                                 sectionState.bySection[section].byPage["index"]
                                    .title
                              }
                           />
                        }
                     >
                        {sectionState.bySection[section].allPages.map(
                           (page) => (
                              <Route
                                 key={uuid()}
                                 path={page == "index" ? undefined : page}
                                 index={page == "index" ? true : false}
                                 element={
                                    <Page
                                       url={section}
                                       data={
                                          sectionState.bySection[section]
                                             .byPage[page]
                                       }
                                    />
                                 }
                              >
                                 {page == "pokemon" ? (
                                    <Route
                                       key={uuid()}
                                       path={":pokemonName"}
                                       element={<PokemonExplorer />}
                                    />
                                 ) : null}
                              </Route>
                           )
                        )}
                     </Route>
                  ))}
               </Routes>
            </div>
         </main>
      </div>
   );
}

export default App;
