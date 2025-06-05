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

import imgDrinkMaster from './assets/DrinkMaster.png'
import imgImageEngine from './assets/ImageEngine.png'
import imgContentFulCMS from './assets/ContentFulCMS.png'
import imgCart from './assets/Cart.png'
import imgMenufilter from './assets/Menufilter.png'
import imgColorGen from './assets/ColorGen.png'
import imgGroceryBud from './assets/GroceryBud.png'
import imgSideBar from './assets/SideBar.png'
import imgStrapiStyleMenu from './assets/StrapiStyleMenu.png'
import imgImgSlider from './assets/ImgSlider.png'
import imgTours from './assets/Tours.png'
import imgBackroads from './assets/Backroads.png'
import imgReviewCarousel from './assets/ReviewCarousel.png'
import imgFAQ from './assets/FAQ.png'

export const projects = [
  {
    id: nanoid(),
    img: imgDrinkMaster,
    url: 'https://drinkmasternoto.netlify.app/',
    github: 'https://github.com/VidyasagarAkhumukhi/MixMaster',
    title: 'Drink Master',
    text: 'Drink Master is a dynamic web application built with React that allows users to explore a vast database of cocktails. Users can search for their favorite drinks, view detailed recipes including ingredients and instructions, and discover new concoctions. The application leverages TheCocktailDB API for fetching drink data and utilizes modern React features like React Router v6 for navigation and data loading, and TanStack Query (React Query) for efficient server state management. It also includes a newsletter signup feature.',
  },
  {
    id: nanoid(),
    img: imgImageEngine,
    url: 'https://imagesearchnoto.netlify.app/',
    github: 'https://github.com/VidyasagarAkhumukhi/Image_Search',
    title: 'image Engine',
    text: "This is a web application built with React that allows users to search for high-quality images using the official Unsplash API. Users can enter keywords to find relevant images, which are then displayed in a responsive gallery. The project also features a dark/light theme toggle that persists the user's preference in local storage and respects their operating system's color scheme preference. It demonstrates best practices for API integration, client-side state management with React Context, and server state management with TanStack Query (React Query).",
  },
  {
    id: nanoid(),
    img: imgContentFulCMS,
    url: 'https://contentfulcmsprojects.netlify.app/',
    github: 'https://github.com/VidyasagarAkhumukhi/Contentful_CMS',
    title: 'Contentful CMS Project',
    text: "This project is a React-based portfolio project website that dynamically fetches and displays project information from Contentful, a headless Content Management System (CMS). It demonstrates how to integrate a React frontend with Contentful to manage website content (like project details, images, and links) without needing to redeploy the frontend application for content updates. The application features a hero section and a projects gallery where each project's data is pulled directly from Contentful.",
  },
  {
    id: nanoid(),
    img: imgCart,
    url: 'https://cartnoto.netlify.app/',
    github: 'https://github.com/VidyasagarAkhumukhi/Cart',
    title: 'Cart',
    text: "This project is a functional shopping cart interface built with React, demonstrating robust state management using the Context API and the useReducer hook. It fetches product data from an external API and allows users to manage cart items effectively. Key features include adding items (implicitly via fetched data), removing items, adjusting item quantities (increase/decrease), and clearing the entire cart. The application efficiently manages the cart state using a JavaScript Map data structure for optimized item lookups and updates. It also calculates and displays the total number of items and the total cost in real-time.",
  },
  {
    id: nanoid(),
    img: imgColorGen,
    url: 'https://colorgeneratornoto.netlify.app/',
    github: 'https://github.com/VidyasagarAkhumukhi/ColorGenerator',
    title: 'Color Palette Generator',
    text: "This is a web application built with React that allows users to generate color palettes (tints and shades) based on a single input color. Enter a hex color code (or use the color picker), and the application will display a range of related colors, each showing its weight percentage and hex value. Clicking on any generated color swatch instantly copies its hex code to your clipboard. It's a useful tool for designers and developers looking for color variations or building color schemes. Error handling is included for invalid color inputs, utilizing toast notifications for a smooth user experience.",
  },
  {
    id: nanoid(),
    img: imgGroceryBud,
    url: 'https://gorcerybudnoto.netlify.app/',
    github: 'https://github.com/VidyasagarAkhumukhi/GroceryBud',
    title: 'Grocery Bud - React Grocery List App',
    text: "Grocery Bud is a straightforward grocery list application built with React. It allows users to easily add, remove, and mark items as complete. The list persists across browser sessions thanks to the use of localStorage. User actions like adding, deleting, or attempting to add an empty item are accompanied by helpful toast notifications. It's a practical example of a CRUD (Create, Read, Update, Delete) application using React hooks and local storage.",
  },
  {
    id: nanoid(),
    img: imgMenufilter,
    url: 'https://menufilternoto.netlify.app/',
    github: 'https://github.com/VidyasagarAkhumukhi/Menu-Filter',
    title: 'React Menu Project',
    text: 'A React application that displays a restaurant menu from a local data source and allows users to filter the items by category using dynamically generated buttons.',
  },
  {
    id: nanoid(),
    img: imgStrapiStyleMenu,
    url: 'https://submenusstrapinoto.netlify.app/',
    github: 'https://github.com/VidyasagarAkhumukhi/Strapi_Interface',
    title: 'Strapi-Style Submenu Navigation',
    text: "This project implements a responsive navigation system inspired by Strapi's UI, built with React. It features a main navbar, a hero section, a toggleable sidebar for smaller screens, and dynamic submenus that appear when hovering over navigation links in the main navbar. The application utilizes the React Context API for global state management, handling the sidebar's open/closed state and tracking the currently active page link to display the corresponding submenu. The menu structure and content are driven by a centralized data file (data.jsx), making it easy to customize navigation links and submenu items.",
  },
  {
    id: nanoid(),
    img: imgImgSlider,
    url: 'https://profileslider.netlify.app/',
    github: 'https://github.com/VidyasagarAkhumukhi/profileSlider',
    title: 'React Image/Quote Slider',
    text: 'This project is a simple and responsive image or quote slider component built with React. It allows you to display a list of items (in this case, people with images, names, titles, and quotes) in a rotating carousel with both manual and automatic navigation.',
  },
  {
    id: nanoid(),
    img: imgSideBar,
    url: 'https://sidebarnoto.netlify.app/',
    github: 'https://github.com/VidyasagarAkhumukhi/Sidebar',
    title: 'Sidebar and Modal Component with Context API',
    text: 'This project demonstrates how to implement and manage the state of a Sidebar and a Modal component in a React application using the Context API for global state management. It features a main page with buttons to toggle the visibility of both the sidebar and the modal. The state (whether the sidebar or modal is open) is handled globally via a custom context hook (useGlobalContext), making it accessible throughout the component tree without prop drilling. The content for the sidebar links and social icons is dynamically loaded from a separate data file.',
  },
  {
    id: nanoid(),
    img: imgTours,
    url: 'https://toursprojectnoto.netlify.app/',
    github: 'https://github.com/VidyasagarAkhumukhi/Tours',
    title: 'Interactive React Tours Project',
    text: 'An interactive web application built with React that fetches and displays tour package information from an API. Users can browse tours, read descriptions, and remove tours they are not interested in.',
  },
  {
    id: nanoid(),
    img: imgReviewCarousel,
    url: 'https://reviewcarouselnoto.netlify.app/',
    github: 'https://github.com/VidyasagarAkhumukhi/React-Reviews-Carousel',
    title: 'React Reviews Carousel Project',
    text: 'An interactive component built with React to display and cycle through user reviews or testimonials. Users can navigate sequentially using previous/next buttons or view a random review with the "Surprise Me" button.',
  },
  {
    id: nanoid(),
    img: imgFAQ,
    url: 'https://faqsnoto.netlify.app/',
    github: 'https://github.com/VidyasagarAkhumukhi/FAQ-section?tab=readme-ov-file',
    title: 'React FAQ Accordion Component',
    text: 'A simple React component that displays a list of frequently asked questions (FAQs) in an accordion style. Clicking on a question reveals its answer, and only one answer can be shown at a time.',
  },
  {
    id: nanoid(),
    img: imgBackroads,
    url: 'https://backroadstes.netlify.app/',
    github: 'https://github.com/VidyasagarAkhumukhi/temp-backroads-app',
    title: 'BackRoad Page',
    text: 'A Simple React based backroads page to explore Various tours.',
  },

];
