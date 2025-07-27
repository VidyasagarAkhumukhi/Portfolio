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
import imgStore from './assets/Store.png'

export const projects = [
  {
    id: nanoid(),
    img: imgStore,
    url: 'https://store-vidyasagars-projects-d688ebda.vercel.app/',
    github: 'https://github.com/VidyasagarAkhumukhi/Store',
    title: 'Store',
    text: 'Working on the full Stack store project',
  },
  {
    id: nanoid(),
    img: imgDrinkMaster,
    url: 'https://drinkmasternoto.netlify.app/',
    github: 'https://github.com/VidyasagarAkhumukhi/MixMaster',
    title: 'Drink Master',
    text: 'React app for exploring cocktails via TheCocktailDB API. Features search, recipes, React Router v6, TanStack Query for server state, and a newsletter signup.',
  },
  {
    id: nanoid(),
    img: imgImageEngine,
    url: 'https://imagesearchnoto.netlify.app/',
    github: 'https://github.com/VidyasagarAkhumukhi/Image_Search',
    title: 'image Engine',
    text: 'React image search app using Unsplash API. Features responsive gallery, persistent dark/light theme (respects OS), React Context, and TanStack Query.',
  },
  {
    id: nanoid(),
    img: imgContentFulCMS,
    url: 'https://contentfulcmsprojects.netlify.app/',
    github: 'https://github.com/VidyasagarAkhumukhi/Contentful_CMS',
    title: 'Contentful CMS Project',
    text: 'React portfolio dynamically fetching project data from Contentful CMS. Allows content updates without redeploy; features hero section and projects gallery.',
  },
  {
    id: nanoid(),
    img: imgCart,
    url: 'https://cartnoto.netlify.app/',
    github: 'https://github.com/VidyasagarAkhumukhi/Cart',
    title: 'Cart',
    text: 'React shopping cart using Context API & useReducer. Fetches product data, manages items (add, remove, quantity), and shows real-time totals & item count.',
  },
  {
    id: nanoid(),
    img: imgColorGen,
    url: 'https://colorgeneratornoto.netlify.app/',
    github: 'https://github.com/VidyasagarAkhumukhi/ColorGenerator',
    title: 'Color Palette Generator',
    text: 'React app generating color palettes (tints/shades) from hex input. Displays colors with hex/weight, offers click-to-copy, plus error handling via toasts.',
  },
  {
    id: nanoid(),
    img: imgGroceryBud,
    url: 'https://gorcerybudnoto.netlify.app/',
    github: 'https://github.com/VidyasagarAkhumukhi/GroceryBud',
    title: 'Grocery Bud - React Grocery List App',
    text: 'Simple React grocery list app with CRUD operations (add, remove, complete). Uses localStorage for persistence and provides user-friendly toast notifications.',
  },
  {
    id: nanoid(),
    img: imgMenufilter,
    url: 'https://menufilternoto.netlify.app/',
    github: 'https://github.com/VidyasagarAkhumukhi/Menu-Filter',
    title: 'React Menu Project',
    text: 'React app displaying a filterable restaurant menu from local data. Users can filter items by category using dynamically generated buttons for easy Browse.',
  },
  {
    id: nanoid(),
    img: imgStrapiStyleMenu,
    url: 'https://submenusstrapinoto.netlify.app/',
    github: 'https://github.com/VidyasagarAkhumukhi/Strapi_Interface',
    title: 'Strapi-Style Submenu Navigation',
    text: "React navigation system inspired by Strapi UI. Features responsive navbar, hero, toggleable sidebar, dynamic hover submenus, and Context API for state.",
  },
  {
    id: nanoid(),
    img: imgImgSlider,
    url: 'https://profileslider.netlify.app/',
    github: 'https://github.com/VidyasagarAkhumukhi/profileSlider',
    title: 'React Image/Quote Slider',
    text: 'Responsive React image/quote slider component. Displays items in a rotating carousel with support for both manual and automatic navigation options for users.',
  },
  {
    id: nanoid(),
    img: imgSideBar,
    url: 'https://sidebarnoto.netlify.app/',
    github: 'https://github.com/VidyasagarAkhumukhi/Sidebar',
    title: 'Sidebar and Modal Component with Context API',
    text: 'React project demonstrating Sidebar and Modal implementation. Manages component state globally using the React Context API for efficient state sharing.',
  },
  {
    id: nanoid(),
    img: imgTours,
    url: 'https://toursprojectnoto.netlify.app/',
    github: 'https://github.com/VidyasagarAkhumukhi/Tours',
    title: 'Interactive React Tours Project',
    text: 'Interactive React app fetching and displaying tour packages from an API. Users can browse details, read descriptions, and easily remove unwanted tours.',
  },
  {
    id: nanoid(),
    img: imgReviewCarousel,
    url: 'https://reviewcarouselnoto.netlify.app/',
    github: 'https://github.com/VidyasagarAkhumukhi/React-Reviews-Carousel',
    title: 'React Reviews Carousel Project',
    text: "Interactive React component displaying user reviews/testimonials. Features sequential navigation (prev/next buttons) and a 'Surprise Me' random review option.",
  },
  {
    id: nanoid(),
    img: imgFAQ,
    url: 'https://faqsnoto.netlify.app/',
    github: 'https://github.com/VidyasagarAkhumukhi/FAQ-section?tab=readme-ov-file',
    title: 'React FAQ Accordion Component',
    text: 'Simple React component displaying FAQs in an accordion style. Clicking a question reveals its answer, showing only one answer at a time for clarity.',
  },
  {
    id: nanoid(),
    img: imgBackroads,
    url: 'https://backroadstes.netlify.app/',
    github: 'https://github.com/VidyasagarAkhumukhi/temp-backroads-app',
    title: 'BackRoad Page',
    text: "Simple React-based 'Backroads' landing page for exploring various tour packages. Offers a clean interface for users to browse available tour options and destinations",
  },
];
