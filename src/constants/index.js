import {

  algoZenith,
  devTown1,
  devTown2,
  devTown3,
  devTown4,
  gdsc1,
  gdsc2,
  glug,
  google,
  hackerRank1,
  hackerRank2,
  linkedIn1,
  linkedIn2,
  linkedIn3,
  mlsa1,
  mlsa2,
  msLinkedIn,
  sparks,
  swoc,
  udemy,

    mobile,
    backend,
    creator,
    web,
    javascript,
  
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    meta,
    starbucks,
    tesla,
    shopify,
    memories,
    synapse,
    weather,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Open-source Contributor",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
 
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
 
  ];
  
  const experiences = [
    {
      title: "Python developer in TDOC",
      company_name: "GLUG",
      icon: starbucks,
      iconBg: "black",
      date: "December 2022 - January 2023",
      points: [
        "Winner of Ten Days Of Code, a flagship event organised by GNU Linux group, NIT Dgp",
        "Developed Synapse, an API Testing platform  where HTTP requests like Get, Post, Put, Patch, Delete, and downloading the HTML responses can be done.",
        "Learnt the use of Tkinter Library in Python and implemented it to develop UI of Synapse.",
        "Participated in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "The Sparks Foundation",
      icon: tesla,
      iconBg: "#383E56",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developed a Chraity website with Razorpay integration where user can donate any amount of money to charity.",
        "Implemented RazorPay integration to the website. ",
        "Provided constructive feedback to other developers.",
      ],
    },
    {
      title: "Open-Source Contributer",
      company_name: "Social Winter Of Code",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2023 - March 2023",
      points: [
        "Contributed in the Open-Source Projects in SWOC season 3 hackathon.",
        "Discussing over issues and improvements of projects with project-mentor, other participants and designers to fix the issues and create a better version.",
        "Contributed in Terminal Portfolio, using JS where I have corrected the social stat orientation, improvised its look and fixed typos",
        
      ],
    },
    {
      title: "Campus Ambassador in Coding Ninjas",
      company_name: "Coding Ninjas",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Serving as the Campus Ambassador for Coding Ninjas.",
        "Promoting about their events and competetions organized routinely in Social media",
        "Provisions of sponsorships, coupons and subsidiaries on behalf of Coding Ninjas.",
       
      ],
    },
  ];
  
  const testimonials = [
    {
      name: "Sara Lee",
      image: algoZenith,
    },
    {
      name: "Chris Brown",
      image: devTown1,
    },
    {
      name: "Lisa Wang", 
      image: devTown2,
    },
    {
      name: "we",
      image: devTown3,
    },
    {
      name: "Lisa Wang", 
      image: devTown4,
    },
    {
      name: "we",
      image: gdsc1,
    },
    {
      name: "we",
      image: gdsc2,
    },
    {
      name: "we",
      image: glug,
    },
    {
      name: "we",
      image: google,
    },
    {
      name: "we",
      image: hackerRank1,
    },
    {
      name: "we",
      image: hackerRank2,
    },
    {
      name: "we",
      image: linkedIn1,
    },
    {
      name: "we",
      image: linkedIn2,
    },
    {
      name: "we",
      image: linkedIn3,
    },
    {
      name: "we",
      image: mlsa1,
    },
    {
      name: "we",
      image: mlsa2,
    },
    {
      name: "we",
      image: msLinkedIn,
    },
    {
      name: "we",
      image: sparks,
    },
    {
      name: "we",
      image: swoc,
    },
    {
      name: "we",
      image: udemy,
    },
    
  ];
  
  const projects = [
    {
      name: "Memories- Blogsite",
      description:
        "Web-app that allows users to create, update, delete, search, like, comment, and manage blog-posts from various providers,with additional pagination feature, search by tags feature and recommendation of posts feature making it an allin one pack bolgsite app for the user.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: memories,
      source_code_link: "https://github.com/Shubhodaya/memoriesFrontend",
    },
   
    {
      name: "Weather Booth",
      description:
        "A weather casting application wher user can search for any location preferably by city and the Weather-booth will fetch all the weather details of that place immediately including Temperature, Wind speed, Humidity and Cloud percentage in the sky. Not only that but it is also facilitated with the ability to show other important parameters like live Time and Date.",
      tags: [
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://github.com/Shubhodaya/Weather-App",
    },
    {
      name: "Synapse- API Tester",
      description:
        "Synapse is an API Testing platform  where HTTP requests like Get, Post, Put, Patch, Delete, and downloading the HTML responses can be done using Request Library. UI is made using Tkinter.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
        {
          name: "tkinter",
          color: "pink-text-gradient",
        },
      ],
      image: synapse,
      source_code_link: "https://github.com/Shubhodaya/Synapse",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };