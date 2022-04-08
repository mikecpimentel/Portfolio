import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Page } from "./features/components/Page";
import { Welcome } from "./features/sections/Welcome";
import { Section } from "./features/components/Section";
import { v4 as uuid } from "uuid";
import { PokemonExplorer } from "./features/sandbox/pokemon-explorer/PokemonExplorer";
import aphoto1 from "./images/letsaskbobby_logo.gif";
import bphoto1Big from "./images/geller-portal/Folder1.png";
import bphoto2Big from "./images/geller-portal/Folder3.png";
import bphoto3Big from "./images/geller-portal/Main-Menu.png";
import bphoto4Big from "./images/geller-portal/gellerVendorsProgress1.jpg";
import bphoto5Big from "./images/geller-portal/PO-Creator.png";
import bphoto6Big from "./images/geller-portal/PO-Creator2.png";
import cphoto1Big from "./images/collabolist/1.JPG";
import cphoto2Big from "./images/collabolist/This-is-Collabolists-2.jpg";
import cphoto3Big from "./images/collabolist/This-is-Collabolists-3.jpg";
import cphoto4Big from "./images/collabolist/This-is-Collabolists-4.jpg";
import cphoto6 from "./images/collabolist/menu3.png";
import dphoto1Big from "./images/year-2053/Phone-Screenshot-1.png";
import dphoto2Big from "./images/year-2053/Phone-Screenshot-2.png";
import dphoto3Big from "./images/year-2053/Phone-Screenshot-4.png";
import dphoto4Big from "./images/year-2053/Screenshot_2017-12-24-04-59-07-576x1024.png";
import dphoto5Big from "./images/year-2053/Year-2053-Screenshot-1-576x1024.png";
import dphoto6 from "./images/year-2053/Year-2053-Logo-Revised-2-300x300.png";
import ephoto4Big from "./images/wordpress/Screenshot-2021-06-25-152251-768x656.png";
import ephoto5Big from "./images/wordpress/Screenshot-2021-06-25-152304-1024x550.png";
import ephoto6Big from "./images/wordpress/Screenshot-2021-06-25-152312-1024x526.png";
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
                              "Here are some of the technologies I am experienced with. As I spend a lot of time studying, this list is subject to frequent expansion and updating. Click a skill for more info. Values current as of April 8, 2022",
                           ],
                        },
                        {
                           element: "p",
                           children: [""],
                        },
                        {
                           element: "p",
                           children: [""],
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
                              "I studied economics at UCSB and had virtually everything paid for by the state and the university, but I withdrew a couple quarters short of graduation due to a lifetime of untreated health problems. I had health insurance for the first time in my life through the university, so I was able to access much-needed services. Please see the Q and A section for more information. I would love to discuss my history further if you have any questions.",
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
                                 large: cphoto1Big,
                                 subtitle: "Main",
                              },
                              {
                                 large: cphoto3Big,
                                 subtitle: "Row functions",
                              },
                              {
                                 large: cphoto4Big,
                                 subtitle: "Column functions",
                              },

                              {
                                 large: cphoto2Big,
                                 subtitle: "Search function",
                              },

                              {
                                 large: cphoto6,
                                 subtitle: "Early draft, column creation",
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
                                    "I worked at a company called TransPerfect where I essentially helped set up computers for employees. We frequently used unwieldy Excel files for managing passwords, and these files usually took several minutes to sync and load. I was once again witness to the inefficiency of Excel spreadsheets for some applications. Collabolist was my attempt at a solution.",
                                 ],
                              },
                              {
                                 element: "p",
                                 children: [
                                    "I worked on Collabolist every hour I was at home. Having recently worked on Geller Portal, I still had programming fresh in my mind. As with my previous projects, I used AJAX extensively to enable functionality without the need to refresh the browser page.",
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
                                    'Note: The images have the plural "Collabolists" since I changed the name at the last minute due to my preferred domain already being reserved at the time.',
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
                                 large: bphoto4Big,
                                 subtitle: "Vendor profile with dummy data",
                              },
                              {
                                 large: bphoto5Big,
                                 subtitle:
                                    "Purchase order creator w/dummy data",
                              },
                              {
                                 large: bphoto6Big,
                                 subtitle:
                                    "Purchase order creator w/dummy data, alternate view",
                              },
                              {
                                 large: bphoto3Big,
                                 subtitle: "Dashboard",
                              },
                              {
                                 large: bphoto1Big,
                                 subtitle:
                                    "In-progress customer order, P.O. tab",
                              },
                              {
                                 large: bphoto2Big,
                                 subtitle:
                                    "Closed customer order, documents tab",
                              },
                           ],
                           description: [
                              {
                                 element: "p",
                                 children: [
                                    "Geller Portal was a system I created for my employer at the time, Geller International, a tiny company with several employees. Originally hired at Geller to perform basic tasks such as driving and delivering things, I was passively witness to their many inefficient in-office processes and wanted to see if I could create something to help organize their data.",
                                 ],
                              },

                              {
                                 element: "p",
                                 children: [
                                    "I worked on Geller Portal at home, in secret, after work every day for a couple of months before revealing the project to my boss. He was very pleased and quickly demanded its implementation and use in the office. I stored much of the company's data in a MySQL database and retrieved it using the Geller Portal and a few database-connected Excel templates for the pre-filled documents.",
                                 ],
                              },
                              {
                                 element: "p",
                                 children: [
                                    "I built this system with the knowledge I gained from working on personal projects as a teenager, using many of the technologies I already knew.",
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
                                 large: dphoto1Big,
                                 subtitle: "Dialogue",
                              },
                              {
                                 large: dphoto2Big,
                                 subtitle: "Bookmarks",
                              },
                              {
                                 large: dphoto3Big,
                                 subtitle: "Title screen",
                              },
                              {
                                 large: dphoto4Big,
                                 subtitle: "Another screen",
                              },
                              {
                                 large: dphoto5Big,
                                 subtitle: "Main",
                              },
                              {
                                 large: dphoto6,
                                 subtitle: "App logo",
                              },
                           ],
                           description: [
                              {
                                 element: "p",
                                 children: [
                                    "Year 2053 was a satirical, dark-humor-laden, text-based choose-your-own-adventure-type game complete with background sound effects and voice acting (myself doing all the voices). Gameplay starts in year 2018, but was meant to eventually arrive at mid-21st-century America (specifically 2053). Every choice the game player makes affects the story. This was my one and only foray into Android development. As with all projects, I did everything from the coding to the graphic design.",
                                 ],
                              },
                              {
                                 element: "p",
                                 children: [
                                    "There were many interesting challenges to this project that I needed to solve. I had to program the evolving nature of the story, especially with the algorithmic diverging and converging of storylines. I programmed the game to dynamically and seamlessly connect over a hundred audio files in different orders and patterns depending on choices made in the past. I made huge flowcharts to help me visualize all the pieces.",
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
                                 large: ephoto4Big,
                                 subtitle:
                                    "I got really good at making cookies...",
                              },

                              {
                                 large: ephoto5Big,
                                 subtitle:
                                    "..but ultimately finalized only three recipes.",
                              },

                              {
                                 large: ephoto6Big,
                                 subtitle: "Landing page.",
                              },
                              {
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
         allPages: ["index", "collabolist", "year-2053"],
         allPageTitles: ["index", "Collabolist", "Year 2053"],
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
                           question: "What is the purpose of this Q and A?",
                           answer:
                              "I created this Q and A to help explain my deeply complex and non-traditional history. I hope to provide a satisfying explanation for the employment and education gaps in my history. I hope you will leave convinced that I would be a fantastic candidate for a role at your company despite the meandering path I took throughout life.\n\nThis page is organized in an interview-like format. There is a lot to take in (brevity is a skill I have yet to master), but I hope it proves useful for those who have questions about my ability to perform and thrive in my new role.",
                        },

                        {
                           question:
                              "Why didn't you finish university? Why didn't you seize every available opportunity?",
                           answer:
                              "I did attempt to take advantage of every opportunity. I pushed myself hard, so much so that it almost killed me. I came from the chaotic bottom of American society and worked insanely hard just to climb to the surface. Even before my first quarter at UCSB began, I had already applied and been accepted to study abroad at the University of Copenhagen for six months, all expenses paid by the school. After Copenhagen, I was planning to apply for a term at the London School of Economics. But I was a complete mess. I took hold of a slew of opportunities that I was fully incapable of seizing at the time. I was so deeply broken from a lifetime of harsh conditions that my brain eventually fell apart.",
                        },
                        {
                           question: "What harsh conditions?",
                           answer:
                              "A short history might provide some context. My mother left me when I was 5 and my father was not at all present. I drank alone and often heavily from the age of 9, already determined to numb the pain and insecurity I felt daily. At ages 12 and 13 I smoked marijuana daily and lived with a group of adult friends. I was expelled from 7th grade and dropped out in 9th grade. I never had a permanent place to live growing up. I spent most of my childhood on the floor of different relative's houses, going weekly from one house to another. I kept all my belongings in plastic bags and dreamed of one day having a permanent place to store them. I was often alone and completely in charge of my own life. Even before adolescence, I already cooked my own food most and got my own groceries on foot. I had OCD and other medical ailments that were never treated. There was rarely an adult who had my back; rarely a person to protect or guide me. No one to suggest I brush my teeth or go to bed (I slept absolutely whenever I felt the need to). To top it off, I had attrocious self-esteem issues. I was a self-hating gay kid with heavily worn clothes and uncorrected eyesight. I was deeply embarrassed to show emotion, go barefoot or even wear shorts as I was ashamed to expose too much skin.",
                        },
                        {
                           question: "How did you begin educating yourself?",
                           answer:
                              "Even from a very young age, I had an deep fascination with the world. I could have cared less about formal education and I disdained authority, but I did always love learning. Even before quitting high school, I spent countless hours educating myself on things I was fascinated with, languages and world cultures being chief among them. The Spanish I know today was self-taught starting at 13, and I can still read and write the Japanese Hiragana and Katakana I learned a year later (although I don't remember much vocabulary anymore). I eventually took the California high school equivalency exam (the CHSPE) and started classes at the community college.\n\nI knew nothing about college. For several years, my overall view of formal education was pretty dour. As I understood it at the time, community college was a place to learn basic facts with the hopes of earning an extra $3 more per hour in the long run. Community college seemed like a dead end. In my mind, not attending high school was already a death knell for my career prospects, and a regular college (i.e., university) was only available to high-achieving high school students. I therefore thought that any chance I had in this life had to come from my own efforts, to make the money myself somehow. At 15 I made incredible MySpace layouts and spent months creating my own alternative to MySpace using PHP and MySQL. I even used JSON (and raw XML) for the AJAX. I eventually realized I wasn't smart enough to get it off the ground myself, so I moved on. At ages 19-20, I read dozens of books to master stocks, currencies, and the various derivative markets like options and futures. I obsessed for many months over charts and graphs, trying my best to understand the psychology of the markets. I never had a spare dime to invest real money, so I eventually moved on from that endeavor as well. In addition to the occasional class or personal project, I also worked much of the time. One warehouse job had me commuting up to four hours daily (two hours each way). The congested commute was the most peaceful part of my day.",
                        },

                        {
                           question:
                              "How did you ultimately get accepted to university?",
                           answer:
                              "Once I was aware that community college offered a chance of transferring to UCLA, UC Berkeley, or one of the other UC schools, I started pushing myself to the extreme, way beyond any healthy boundaries. I demanded of myself perfect grades in my classes and sought to take the hardest classes the community college offered. I was fortunate to have some relatives who allowed me to sleep on their living room floor while I studied. It was awfully uncomfortable, crowded, and noisy almost 24 hours a day, but it was certainly better than nothing. I studied upwards of 20 hours per day, sleeping pitifully few hours. I wouldn't see friends for months at a time, I didn't even spend much time eating. Already suffering from truly extreme anxiety, I slipped into an even deeper depression and misery. I had trouble breathing virtually every minute of every day, often standing or pacing while studying as I was much too anxious to sit down. Whenever I managed to get any sleep, I would wake up every single hour panicking and breathless, often not knowing where I was for several seconds each episode. I felt claustrophobic and anxious while closing my eyes to apply shampoo, anxious whenever my phone rang, panic if I didn't know exactly where my car was, and even panic whenever I misplaced my phone for just a few seconds (in my mind, the phone would help me call for help if I needed it).\n\nI survived those years by feeling completely numb. While I had never known a sense of well-being in my lifetime, I never felt as broken as I did then. I was utterly miserable, more so than what was usual throughout my life, but I never once complained. Who would I complain to? If I was going to make it in this world, I had no choice but to endure, no matter the costs to my sanity. I eventually got accepted to UCSB. The state of California and the university would pay for everything, including a stipend for living expenses. I would have health insurance for the first time in my life, one which covered virtually every medical expense with zero out of pocket. But by the time I was accepted, I was exhausted and had no room for relief or positivity. To make matters worse, nobody around me even cared that I got into university. If anything, people thought I was foolish. It would have been nice to have someone who cared.",
                        },

                        {
                           question:
                              "What happened that caused you to leave university?",
                           answer:
                              "I had the summer off before my first term started. I worked a few jobs over the summer so that I could fly overseas to clear my head before classes began. I ended up getting alcohol poisoning within hours of arriving in Germany and had all of my money stolen. I woke up covered in my own vomit 12 hours after everything went black. Even on the flight to and from Europe, my heart pounded every minute I was on the plane. I arrived back in the U.S. more in crisis than when I left. Come the beginning of classes at UCSB, I was not at all excited; rather, I was desperate for the madness to end. But I wasn't giving up, I was determined to do my best and take advantage of every opportunity I could. I joined the Model UN and continued to study day and night.\n\nThe culture shock at the university was intense. I was surrounded by young adults who were a lifetime more well-rounded than I was. The average high school GPA of incoming students was more than 4.0. Before UCSB, I had never even seen a suit up close. I was astounded by the confidence and brilliance of these kids who were years younger than me. I rented a room in a home shared with a university director and the current undergraduate dean, both of whom I shared weekend meals with. I was determined to catch up with my peers and be the best person I could be, but I continued to rapidly deteriorate mentally. I got a DUI driving back from a Model UN meeting, the first social gathering I had been to in years. I didn't drink often at all (since I was always studying and had no social life), but when I did drink, I always did my best to black out in order to find some peace. A couple of weeks later, I reached a state of unending panic where I couldn't even leave my room. I finally sought help for the first time in my life. It was already too late, however. I withdrew from university, in utter despair, before my first quarter had even ended.",
                        },
                        {
                           question:
                              "Why didn't you get help before university?",
                           answer:
                              "There are plenty of reasons why I didn't get help sooner. First, health insurance is something I didn't have for almost my entire life up to that point; there was no way I could have possibly afforded mental health services out of pocket.\n\nSecond, I didn't even realize that I had a severe problem. Misery to varying degrees was all I had ever known, so it was not obvious that there was something that urgently needed fixing, or even that my issues could be fixed. I simply did not have the information to self-diagonose. In retrospect, it is obvious that I had OCD, severe anxiety, and quite a bit of trauma to work through.\n\nThird, I never had the outside perspective of a caring adult who could have recognized that something was wrong with me.",
                        },

                        {
                           question:
                              "So you got help. Why didn't you return to UCSB?",
                           answer:
                              "I returned to the university for a quarter here and there, and managed to complete most of my upper-division courses. But after my calamitous mental breakdown a year earlier, I had grown deeeply apathetic. All I could think about was how I had endured such torment for years to get to where I was, only to see my future fall apart in a matter of days. There would be no more Denmark or London to look forward to. I felt sick thinking about what a mess everything was. Even though medication ensured that I wouldn't have hourly panic attacks, I just needed to get away from Santa Barbara and take a break from life somehow. I was told I had PTSD, which I thought was absurd at the time but now accept as a reasonable assessment. A lifetime of stress flooded my mind with horrible memories and I was simply exhausted.",
                        },

                        {
                           question: "When did things start to turn around?",
                           answer:
                              "Over the next few years, there are two specific environments in which I found a great deal of healing. I spent a total of roughly one year in Taiwan and 1.5 years in rural Indiana, moving back an forth a couple of times. I went to Taiwan because I wanted to be somewhere affordable, non-English speaking, and free of other Americans like myself. I also really wanted to learn Mandarin Chinese. I found the perfect environment in one of Taiwan's minor cities. Food was as little as $0.50 a meal and my apartment was $120 per month (and after a few months there, a couple of new Taiwan friends invited me to stay at their home). My time spent in Taiwan was exactly what I needed. I made a ton of good friends and learned to speak passable Mandarin within a few months. I talked to everyone and studied the language half of every day, eventually training myself to write hundreds of characters and read most sentences. My first few months there were perhaps the best of my life. Since finding the right pharmaceutical regimen takes a long time, my anxiety was still pretty severe there, but it was far more manageable than at any point in my entire life up to that point.\n\nBack in the states, an aunt and uncle in rural Indiana offered me a place to stay with them. While Taiwan provided much needed adventure, Indiana provided me a sense of security I had never had. I helped care for my 11 and 13-year-old cousins like they were my brothers. I didn't have to worry about rent or shelter. I was able to work on getting my symptoms under control. For the first time in my life, I got to see what being in a family was like. I was baffled by what parents actually did for their children. They spoke with their kids' teachers, told the kids to do their homework, brought them to extracurricular activities. The kids didn't even have to set their own alarms or wash their own clothes. When I wasn't doing chores or engaged in activities with the kids, I learned to clean pools and even created an Android app. Over time, my panic went from a daily occurence to weekly to monthly, and it would not have been possible without the environment that my aunt and uncle offered. Between Taiwan and Indiana, my sanity was able to be glued back together.",
                        },
                        {
                           question:
                              "How did you spend your time during COVID?",
                           answer:
                              "Come early autumn 2019, I was back in California after my final 5-month stay in Taiwan. My Indiana relatives moved to Hawaii and I was back on my own. I drove to Tucson, Arizona, as it seemed like a cheap and somewhat nearby location to figure things out. When I couldn't figure things out quickly enough, I ended up living out of my car for a few weeks. It was tough, but I knew that I had no real problems to complain about. My anxiety was under control and that mattered more than anything else. I spent all day, every day, at Starbucks so that I could figure stuff out on my computer. I ended up returning to same living room I used while trying to get into university years earlier. Fortunately, this time around, not as many people were living there anymore, so it was definitely more peaceful. I got a cheap coworking space and spent practically 24 hours a day there trying to figure out what to do with my life. The novel coronavirus soon washed ashore, so the coworking thing didn't last too long. I knew I had to find my own space as soon as possible. Fortunately, the COVID relief money arrived and it changed my life.\n\nI searched for the cheapest place in the country for apartments, and Omaha, Nebraska, was high on the list. I quickly moved into an apartment in Nebraska to ride out the virus and await the arrival of a vaccine. While in Nebraska I read countless books on marketing, time-management, personal growth, and a large smattering of history and global politics books, on top of the hours I already spent each day reading the NYT. I cooked every single meal and cleaned the apartment for up the three hours a day (washing dishes took up half that time). I listened to hundreds of hours of wonderful podcasts and started around 8 or 9 internet projects. I never had such freedom and privacy in my entire life. I reveled in the uninterrupted silence and solitude. My year in Nebraska rivaled the therapeutic value of my time in Taiwan and Indiana. In Nebraska, I learned who I was, what I liked, what I disliked, and I was able to more clearly develop my dreams for the future. I felt not a hint of loneliness for at least eight months. I was just so happy to have a bed, a kitchen, a private bathroom; these luxuries were unimaginable in California for the price I was paying. My well-being and confidence in Nebraska improved week after week, and month after month. I left Nebraska a lot stronger than I had ever been.",
                        },

                        {
                           question: "Where are you now?",
                           answer:
                              "My time in Nebraska came to a close when my grandmother needed someone to live with. She has two children but simply didn't want to live with either of them. It was October 2021 and I was fully vaxxed and already in the process of searching online for a job in New York. Overburdened with empathy, I made the excruciatingly painful decision to postpone my plans and care for my grandmother. I figured I would try hard to convince her kids to care for her together somehow, allowing me to move on with a clear conscience. Within the first week, she almost died when she obstinately refused to let me take her to the emergency room for a very high fever. I had to call the ambulance to come get her. After an inauspicious, and frankly traumatic, first week, I decided that we should move near her retired son in Texas so that he might help relieve some of the burden. The move brought little value as we only see him and his wife every six weeks or so for a quick meal. I take wonderful care of my grandmother and she is so much happier with me, which I am very glad for, but my well-being has obviously taken a hit and I now realize that this arrangement is unsustainable. She wasn't always there for me when I was younger, so should I really be sacrificing so much for her? I want her to remain happy, but I feel like I have given way too much of myself. I cannot place my lifelong aspirations on hold any longer. It is more than reasonable for her two children to care for her. For the sake of much-needed brevity here (I'm still working on it!): I currently live near Houston, Texas, but actively looking to move to New York City.",
                        },

                        {
                           question:
                              "As your old projects show, you were developing software years ago, even before you went to university. Why did you ever stop?",
                           answer:
                              "Until somewhat recently, I didn't even realize that software development was a viable career option. I distinctly remember sifting through job listings on Craiglist when I was 18 and finding that virtually all positions paid about $12 per hour, and many of the listings even seemed to be fake. For some reason, that job hunt always stuck with me. From then on I just accepted that I couldn't make a living creating software. I knew of the successes of MySpace, Facebook, Google, and the like, but as far as I knew, they were all developed into their current glory by one or two brilliant people. I therefore figured that software development was an all or nothing proposition: self-publish a successful project or don't enter the field at all. I wasn't aware of the existence of a thriving middle ground. This misconception continued into adulthood owing perhaps to my limited exposure to the kinds of folks who might have known better. I have rediscovered software engineering and have no intention of ever stopping.",
                        },

                        {
                           question:
                              "Why is your professional network so sparse?",
                           answer:
                              "The concept of professional networking was completely foreign to me until a few years ago. It wasn't until long after UCSB that I began to understand the importance of nurturing a professional network. Broadening my network is high on my list of priorities.",
                        },
                        {
                           question:
                              "What are your career priorities after getting hired?",
                           answer:
                              "(1) Massively expand my skillset, (2) Grow my professional network, (3) Go to conferences and tech-related meetups, (4) Start writing tutorials and tech-related articles, (5) Buy a better computer, (6) Do everything in my power to become a capable and reliable colleague.",
                        },
                        {
                           question:
                              "How about your personal priorities? What are your dreams for the future.",
                           answer:
                              "[1st Quarter]: (1) Get very healthy, (2) Learn how to dress like an adult, (3) Buy adult clothes, (4) Make new friends, (5) See a therapist regularly, (6) Buy all the books I've been wanting to read, (7) Join toastmasters, or something similar. [2nd Quarter]: (8) Do some much-needed overseas exploration for a week (work-permitting), (9) Attend meetups to practice my Frech, Spanish and Mandarin, (10) Do some volunteer work. [3rd Quarter]: (11) Start a podcast, (12) Learn to read music and play the piano, (13) Start dating. This list is not exhaustive.",
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
                              "I am not bound by any time constraints. My focus is on delivering results and growing as an individual and as a professional.",
                        },

                        {
                           question: "Are you fully vaccinated?",
                           answer:
                              "Yes, three (3) Modernas: two Moderna standard doses + one Moderna booster. My bloodstream is teeming with antibodies.",
                        },
                        {
                           question: "Why should we hire you?",
                           answer:
                              "Because I never quit. I keep learning and growing despite punishing obstacles.",
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
                              'Although I study around the clock, I have focused less on large production-ready projects and more on specialized "mini-projects" to try to master individual concepts before putting all the pieces together. I don\'t want to just build, I want to build apps that are extremely efficient and bug-free.',
                           ],
                        },
                        {
                           element: "p",
                           children: [
                              "Or maybe I should focus on quantity over quality right now. Not sure. But things are happening.",
                           ],
                        },

                        {
                           element: "p",
                           children: ["Please stay tuned."],
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
                           children: [
                              "It uses the REST Countries API. Nothing is functional just yet.",
                           ],
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
         name: "Q and A",
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
                     <li>
                        <a
                           href="https://www.hackerrank.com/mikecpimentel"
                           target="_blank"
                           rel="noreferrer"
                        >
                           HackerRank
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
