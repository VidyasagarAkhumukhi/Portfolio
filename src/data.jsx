import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaPython, FaNodeJs, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiRedux, SiReactquery, SiPrisma, SiVite, SiJest } from 'react-icons/si';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-orange-500' />,
    text: 'Highly skilled in HTML5 & CSS3, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Tailwind CSS',
    icon: <SiTailwindcss className='h-16 w-16 text-teal-500' />,
    text: 'Adept at using Tailwind CSS for rapidly crafting modern, responsive, and custom-designed UIs with a utility-first approach.',
  },
  {
    id: nanoid(),
    title: 'Javascript (ES6+)',
    icon: <FaJs className='h-16 w-16 text-yellow-400' />,
    text: 'Expertise in JavaScript (ES6+), building interactive and dynamic web applications with a focus on seamless user interactions and functionality.',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-sky-500' />,
    text: 'Advanced proficiency in React, developing efficient front-end applications with component-based architecture, Context API, React Router v6, and state management solutions like Redux Toolkit.',
  }, ,
  {
    id: nanoid(),
    title: 'TypeScript',
    icon: <SiTypescript className='h-16 w-16 text-blue-600' />,
    text: 'Proficient in TypeScript, enhancing JavaScript projects with static typing for robust, scalable, and maintainable code.',
  },
  {
    id: nanoid(),
    title: 'Python',
    icon: <FaPython className='h-16 w-16 text-yellow-400' />,
    text: 'Skilled in Python for backend development and scripting, building efficient and versatile applications.',
  },
  {
    id: nanoid(),
    title: 'Next.js',
    icon: <SiNextdotjs className='h-16 w-16 text-white' />, // Adapts to dark/light mode or use text-neutral-800
    text: 'Experienced with Next.js for server-rendered React applications, focusing on performance, SEO, and enhanced user experiences.',
  },
  // {
  //   id: nanoid(),
  //   title: 'Node.js & Express.js',
  //   icon: <FaNodeJs className='h-16 w-16 text-green-500' />,
  //   text: 'Proficient in Node.js and Express.js for building fast, scalable server-side applications and RESTful APIs.',
  // },
  // {
  //   id: nanoid(),
  //   title: 'Redux Toolkit',
  //   icon: <SiRedux className='h-16 w-16 text-purple-600' />,
  //   text: 'Expertise in Redux Toolkit for predictable state management in large-scale React applications, simplifying data flow and asynchronous operations.',
  // },
  // {
  //   id: nanoid(),
  //   title: 'React Query',
  //   icon: <SiReactquery className='h-16 w-16 text-red-500' />,
  //   text: 'Skilled in React Query for streamlined server state management in React, handling data fetching, caching, and synchronization effectively.',
  // },
  // {
  //   id: nanoid(),
  //   title: 'Prisma',
  //   icon: <SiPrisma className='h-16 w-16 text-indigo-500' />, // Or text-sky-700 dark:text-sky-300
  //   text: 'Experienced with Prisma ORM for type-safe database access and management in Node.js and TypeScript projects.',
  // },
  {
    id: nanoid(),
    title: 'Git',
    icon: <FaGitAlt className='h-16 w-16 text-orange-500' />,
    text: 'Proficient in Git for version control, ensuring collaborative and organized development workflows.',
  },
  {
    id: nanoid(),
    title: 'Vite',
    icon: <SiVite className='h-16 w-16 text-yellow-500' />, // Vite's logo also uses purple, e.g., text-purple-500
    text: 'Utilizing Vite for fast front-end build tooling, enhancing development workflows with quick HMR and optimized production builds.',
  },
  // {
  //   id: nanoid(),
  //   title: 'Jest & React Testing Library',
  //   icon: <SiJest className='h-16 w-16 text-red-700' />, // Jest's specific red color
  //   text: 'Strong skills in Jest and React Testing Library for writing comprehensive unit and integration tests, ensuring application reliability and code quality.',
  // },
  {
    id: nanoid(),
    title: 'Figma',
    icon: <FaFigma className='h-16 w-16 text-pink-500' />, // Figma has various logo colors, pink/purple are common
    text: 'Competent in using Figma for UI/UX design and prototyping, translating ideas into visually appealing and user-friendly interfaces.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'first project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'second project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'third project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
];
