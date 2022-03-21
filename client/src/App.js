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
                                    "Advanced Proficiency",
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
                                    "Decent Proficiency",
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
                                    "Functional Proficiency",
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
                                    "Some Knowledge and Experience",
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
                                    "Minimal Knowledge (recently begun learning)",
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
                           skill: "HTML/CSS",
                           level: 5,
                           description:
                              "Extensive experience using HTML and CSS, including many advanced concepts. I coded this portfolio site by hand, as I do with all my projects.",
                        },
                        {
                           id: "skill-2",
                           skill: "React",
                           level: 3,
                           description:
                              "I am relatively new with React (around 8 months) but I feel fairly confident in my ability to do just about anything with the technology. I created this site using React and am working on other React projects on the side. I know the latest features and many common libraries.",
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
                           skill: "Rest APIs",
                           level: 3,
                           description:
                              "I have limited but growing experience using and creating REST APIs.",
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
                           skill: "Design",
                           level: 4,
                           description:
                              "I have an intermediate understanding of web design and usability principles. I have designed many websites (including this one), but I certainly have more to improve upon.",
                        },
                        {
                           id: "skill-9",
                           skill: "Mandarin",
                           level: 2,
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
                              "My first several personal projects were coded in PHP. It has, however, been a long time since I have used it.",
                        },
                        {
                           id: "skill-13",
                           skill: "Java",
                           level: 2,
                           description:
                              "I created an Android app using Java, but that was years ago. I also have some experience in other object-oriented programming languages.",
                        },
                        {
                           id: "skill-14",
                           skill: "Git",
                           level: 2,
                           description:
                              "I am in the process of gaining git fluency. I am actively practicing and reading a large git book to fully master the technology.",
                        },
                        {
                           skill: "HTTP",
                           id: "skill-15",
                           level: 2,
                           description:
                              "I have a basic understanding of how the JavaScript fetch and XHR APIs use HTTP to communicate with servers, and how Node APIs consume the HTTP instructions and respond. I understand CORS and the concept of pre-flighting.",
                        },
                        {
                           skill: "Express",
                           id: "skill-16",
                           level: 3,
                           description:
                              "I have basic experience using Express to handle and route HTTP requests.",
                        },
                        {
                           skill: "Authorization",
                           id: "skill-17",
                           level: 1,
                           description:
                              "Basic understanding of authorization frameworks, including OAuth 2.0. I plan to implement authorization features in my next projects.",
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
                           level: 1,
                           description:
                              "Limited knowledge of containers and containerization, but I undertand their importance and plan to soon learn the technology.",
                        },
                        {
                           skill: "Jest",
                           id: "skill-20",
                           level: 1,
                           description:
                              "I plan to thoroughly learn the Jest testing API (among others). I understand the basics of test-driven development, but have yet to put the practice into use myself.",
                        },
                        {
                           skill: "Authentication",
                           id: "skill-21",
                           level: 2,
                           description:
                              "Basic understanding of the OpenID Connect layer of OAuth 2.0, and have experience with basic authentication.",
                        },
                        {
                           id: "skill-22",
                           skill: "NPM",
                           level: 3,
                           description:
                              "I use NPM on a regular basis, but have not personally published any projects on there, private or otherwise.",
                        },
                        {
                           id: "skill-23",
                           skill: "Apache",
                           level: 2,
                           description:
                              "Basic understanding of Apache for use as a reverse-proxy and for SSL/TSL authentication.",
                        },
                        {
                           id: "skill-24",
                           skill: "RegEx",
                           level: 2,
                           description:
                              "I've trained myself to use regular expressions, but I still need more practice.",
                        },
                        {
                           id: "skill-25",
                           skill: "React Native",
                           level: 1,
                           description:
                              "I am not yet skilled with React Native, but learning to use it is high on my priority list.",
                        },
                        {
                           id: "skill-26",
                           skill: "VS Code",
                           level: 4,
                           description:
                              "A staple of any developer's toolbox. I know how to use VS Code to [almost] its full potential.",
                        },
                        {
                           id: "skill-27",
                           skill: "Remote dev.",
                           level: 4,
                           description:
                              "All development for my current personal projects are done using remote servers. I know how to use SSH to securely connect to servers and use port-forwarding to connect my browser and apps to server ports. I currently use Digital Ocean for development.",
                        },
                        {
                           id: "skill-28",
                           skill: "Linux/Ubuntu",
                           level: 2,
                           description:
                              "All my development is done remotely on Ubuntu 20.04 LTS.",
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
         allPages: ["index", "informal"],
         allPageTitles: ["index", "Informal Ed"],
      },
      "past-projects": {
         name: "Past Projects",
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
         allPages: [
            "index",
            "geller-portal",
            "collabolist",
            "year-2053",
            "wordpress",
         ],
         allPageTitles: [
            "index",
            "Geller Portal",
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
                              "Yes, three (3) Modernas: two Moderna standard doses + one Moderna booster. My bloodstream is teeming with antibodies.",
                        },
                     ],
                  },
               ],
            },
         },
         allPages: ["index"],
         allPageTitles: ["index"],
      },
      sandbox: {
         name: "Sandbox",
         byPage: {
            index: {
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
            pokemon: {
               title: "Pokemon Explorer",
               content: [
                  {
                     type: "description",
                     data: [
                        {
                           element: "p",
                           children: [
                              "Super simple app that makes calls to a public API called PokeAPI. I'll probably add more features in the future. I will also add more projects to this sandbox section.",
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
         },
         allPages: ["pokemon"],
         allPageTitles: ["pokemon"],
      },
   },
   allSections: ["skills", "education", "past-projects", "faq", "sandbox"],
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
         name: "Past Projects",
         section_url: "past-projects",
      },
      {
         name: "FAQ",
         section_url: "faq",
      },
      {
         name: "Sandbox",
         section_url: "sandbox/pokemon",
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
