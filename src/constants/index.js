import { deloitte, dxc, MOvix, NextGen, PromptPedia } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  azuredevops,
  postman,
  jest,
  bootstrap,
  jwt,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: azuredevops,
    name: "azuredevops",
    type: "azuredevops",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: postman,
    name: "postman",
    type: "postman",
  },
  {
    imageUrl: jest,
    name: "jest",
    type: "jest",
  },
  {
    imageUrl: bootstrap,
    name: "boots",
    type: "boots",
  },
  {
    imageUrl: jwt,
    name: "jwt",
    type: "jwt",
  },
];

export const experiences = [
  {
    title: "Software Engineer",
    company_name: "Deloitte",
    icon: deloitte,
    iconBg: "black",
    date: "March 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Led and worked with 3 teams to launch a real-time hybrid work plan tracking app for Deloitte’s clients. It tracks 18,000+ entries per client monthly, with a reporting system for client admin teams.",
      "Developed a one-to-many mapping system for high-volume transactions, accelerating data retrieval by 80% versus legacy systems. Ensured flawless data fetching across multiple clients with zero discrepancies.",
      "Implemented user routing optimization and a JWT token-based user lookup API for enhanced security and efficiency. Stored tokens in cookies for seamless authorization during POST requests, resulting in a 95% security boost over the legacy system.",
    ],
  },
  {
    title: "Associate Professional Software Engineer",
    company_name: "DXC Technology",
    icon: dxc,
    iconBg: "white",
    date: "Jun 2020 - Mar 2022",
    points: [
      "Developed a resource-usage application employing parallel processing, resulting in an 80% enhancement in resource allocation accuracy within the team.",
      "Achieved a 50% reduction in processing time and eliminated 90% of errors by automating the identification of erroneous reads, leading to precise resource utilization.",
      "Significantly decreased errors in resource tracking, minimizing under-utilization and over-utilization issues by nearly 80%.",
      "Automated the reporting process, reducing manual time for generating resource utilization reports and achieving an approximately 85% efficiency gain.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/SandeepKumar1997",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/sandeep-kumar-781748181",
  },
];

export const projects = [
  {
    iconUrl: MOvix,
    theme: "btn-back-red",
    name: "MoviePedia: Interactive Movie Exploration",
    description:
      "An interactive, aesthetically pleasing single-page movie database application. Developed using advanced frontend technologies like React, Redux, and SCSS, it offers a user-friendly platform for movie enthusiasts. The project explores core React concepts like JSX, components, props, state, component lifecycles, conditional rendering, lists, and keys, alongside Redux for state management. MoviePedia is a testament to complex JavaScript logic and interactive design, showcasing the power of React in building dynamic and engaging web applications.",
    link: "https://movie-pedia-henna.vercel.app/",
  },
  {
    iconUrl: NextGen,
    theme: "btn-back-green",
    name: "NextGen GPT-Blogger",
    description:
      "A dynamic full-stack application was developed using the latest version of Next.js 13.3 framework, showcasing a unique feature: automatic generation of blog content through integration with ChatGPT, highlighting AI's capabilities in content creation. Leveraging tools like Prisma ORM for robust database interactions and TipTap for intuitive text editing, the project ensures a seamless user experience. With TypeScript ensuring codebase reliability and Vercel enabling cost-effective deployment, this project exemplifies innovation and excellence in modern web development.",
    link: "https://nextjs-blog-app-six-alpha.vercel.app/",
  },
  {
    iconUrl: PromptPedia,
    name: "PromtPedia",
    description:
      "PromptPedia, a Next.js 13 project, pioneers file-based, dynamic, and nested routing, balancing server and client components. It enhances SEO and utilizes SSR, SSG, and ISR for efficient data fetching. Leveraging serverless route handlers for Full Stack Apps and Next API, it additionally manages special files for seamless UX.",
    link: "https://promptpedia-one.vercel.app/",
  },
];
