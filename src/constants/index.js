import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  vue,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  flash,
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
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vue,
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
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "BACHELOR OF SCIENCE IN PHYSICS",
    company_name: "Lycee Mokhtar ssoussi",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2012 - 2013",
    points: [
  
    ],
  },
  {
    title: "TECHNICAL UNIVERSITY DEGREE , COMPUTER ENGINEERING",
    company_name: "Superior School of Technology , Essaouirra , Morocco",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2014 - 2016",
    points: [
    ],
  },
  {
    title: "PROFESSIONAL LICENSE - BUSINESS INTELLIGENCE",
    company_name: "Higher School of Technology Guelmim, Morocco",
    icon: shopify,
    iconBg: "#383E56",
    date: "2017 - 2018",
    points: [
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Flash Web",
    icon: flash,
    iconBg: "#E6DEDD",
    date: "2020 - 2021",
    points: [
      "Work with a team of three developper to build a dashboard client web application with laravel.",
      "Build real time REST APIs for calculing data in an agro system with laravel.",
    ],
  },{
    title: "Full stack Developer",
    company_name: "GreenSolutions ",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2021 - Present",
    points: [
      "Work with a variety of different languages, platforms, frameworks such as JavaScript, TypeScript,Laravel and Vuejs.",
      "Work with a team of three developper to build a dashboard client web application with laravel.",
      "Build real time REST APIs for calculing data in an agro system with laravel.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Yobeen Cloud",
    description:
      " Yobeen Cloud is an application for easy, interactive, reliable and efficient management of farm irrigation. and management of measured and forecast meteorological data.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "http://cloud.yobeen.com/",
  },
  {
    name: "Yobeen Avertissement",
    description:
      " Yobeen Avertissement is a simple to use application, which makes you connect with Towasoil device by Bluetooth, Yobeen Avertissement allows almost real monitoring of water piloting parameters in the soil.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://avertissement.yobeen.com/",
  },
  {
    name: "Agadir IT",
    description:
      "Agadir IT is a web agency web agency which is characterized by the mastery of its subjects, the availability of its agents and by its results.Specialized in the creation, monitoring and maintenance of showcase sites, commercial sites, and tailor-made sites.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/jalloulabdo/AgadirIt-NuxtJs-Firebase",
  },
];

export { services, technologies, experiences, testimonials, projects };