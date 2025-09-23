# Personal Portfolio - React & Tailwind CSS

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-^18-blue?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v3-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-^5-646CFF?logo=vite)](https://vitejs.dev/)

## 📝 Description

This is a modern, responsive personal portfolio website built with **React** and styled with **Tailwind CSS**. It showcases my skills, projects, and provides a bit of information about me. The goal was to create a clean, visually appealing, and fast-loading single-page application to serve as a central hub for my professional presence online. The design is intended to be straightforward, allowing visitors to easily navigate through different sections like "Home" (Hero), "Skills," "About," and "Projects."

_(The "About Me" section in `About.jsx` describes Vidyasagar Akhumukhi, a front-end developer in Galway, passionate about crafting delightful web experiences and eager to join a collaborative team with a Stamp 1G visa.)_

## ✨ Features

- **Responsive Design:** Fully responsive layout that adapts to various screen sizes (mobile, tablet, desktop) thanks to Tailwind CSS.
- **Component-Based Architecture:** Built with reusable React components for different sections (Navbar, Hero, Skills, About, Projects).
- **Smooth Scrolling:** Implemented for navigation links (`<html class="scroll-smooth">`).
- **Hero Section:** A prominent hero section to introduce myself and my core skills.
- **Skills Showcase:** A dedicated section to display technical skills with icons and descriptions.
- **About Me:** A personal introduction and background.
- **Project Gallery:** A section to showcase key projects with images, descriptions, and links to live demos and GitHub repositories.
- **Styled with Tailwind CSS:** Utility-first CSS framework for rapid UI development and customization.
- **Data-Driven Content:** Utilizes JavaScript arrays (`data.js`) to manage content for navigation links, skills, and projects, making updates easier.
- **React Icons:** Incorporates `react-icons` for social media links and other iconography.

## 🚀 Live Demo

[Link to Live Demo](https://portfolio-vert-zeta-he84qqil5j.vercel.app/)

## 🛠️ Technologies Used

- **Frontend:**
  - React.js (v18+)
  - Vite (Build tool)
- **Styling:**
  - Tailwind CSS (v3+)
  - PostCSS
  - Autoprefixer
- **Icons:**
  - `react-icons`
- **Utilities:**
  - `nanoid` (Likely used in `data.js` for unique keys, though not explicitly shown in provided snippets)

## ⚙️ Setup and Installation

To get this project up and running locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    cd <your-repository-directory-name>
    ```

2.  **Install dependencies:**
    Make sure you have Node.js and npm (or yarn) installed.

    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will typically start the Vite development server and open the application in your default browser (e.g., at `http://localhost:5173`).

### Tailwind CSS Setup (as per project)

This project was set up with Vite and Tailwind CSS using the following steps:

1.  **Initialize Vite Project:**
    ```bash
    npm create vite@latest my-project -- --template react
    cd my-project
    ```
2.  **Install Tailwind CSS & Dependencies:**
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```
3.  **Configure Tailwind:**
    - The `tailwind.config.js` (or `.cjs`) file was configured to include paths to source files:
      ```javascript
      /** @type {import('tailwindcss').Config} */
      export default {
        content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
        theme: {
          extend: {},
        },
        plugins: [],
      };
      ```
4.  **Add Tailwind Directives:**
    - The main CSS file (`src/index.css`) includes the Tailwind directives:
      ```css
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
      ```

## 📖 Usage

Once the development server is running:

- Navigate through the different sections of the portfolio using the navigation bar (Home, Skills, About, Projects).
- View project details and links in the "Projects" section.
- Social media links are available in the Hero section.

## 🏗️ Project Structure

- `src/`: Contains the main source code.
  - `components/`: Reusable React components.
    - `Navbar.jsx`: Navigation bar.
    - `Hero.jsx`: Hero section introducing yourself.
    - `Skills.jsx`: Section to display your skills.
    - `SkillsCard.jsx`: Individual card for a skill.
    - `About.jsx`: About Me section.
    - `Projects.jsx`: Section to display your projects.
    - `ProjectCard.jsx`: Individual card for a project.
    - `SectionTitle.jsx`: Reusable component for section headings.
  - `assets/`: Static assets like images (`hero.svg`, `about.svg`, project images).
  - `data.js`: (Assumed location) Contains arrays for navigation links, skills, and project details.
  - `App.jsx`: Main application component that assembles the layout.
  - `main.jsx`: Application entry point, renders the `App` component.
  - `index.css`: Global styles and Tailwind CSS directives.
- `public/`: Static assets directly served.
- `index.html`: Main HTML file.
- `tailwind.config.cjs` (or `.js`): Tailwind CSS configuration.
- `postcss.config.cjs` (or `.js`): PostCSS configuration.
- `package.json`: Project dependencies and scripts.
- `vite.config.js`: Vite configuration file.

## 🤝 Contributing

While this is a personal portfolio, suggestions or contributions for improvement are welcome!

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-enhancement`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some enhancement'`).
5.  Push to the branch (`git push origin feature/your-enhancement`).
6.  # Open a Pull Request.

# Modern Personal Portfolio - React & Tailwind CSS v4

[![React](https://img.shields.io/badge/React-^19-blue?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-^6-646CFF?logo=vite)](https://vitejs.dev/)

## 🎨 Overview

A **cutting-edge, professional portfolio** built with the latest web technologies, featuring modern design patterns, smooth animations, and interactive components. This portfolio showcases advanced React development skills with a focus on user experience, performance, and visual appeal.

**Built by:** Vidyasagar Akhumukhi - Frontend Developer  
**Purpose:** To demonstrate modern web development skills and attract top-tier opportunities

## ✨ Key Features

### 🎯 **Modern Design & Animations**

- **Glassmorphism Effects:** Translucent cards with backdrop blur throughout
- **Gradient Backgrounds:** Dynamic color schemes with purple/blue gradients
- **Scroll-Triggered Animations:** Intersection Observer API for smooth reveals
- **Micro-interactions:** Hover effects, state transitions, and visual feedback
- **Floating Particles:** Ambient animations for enhanced visual depth

### 🚀 **Hero Section**

- **TrueFocus Text Animation:** Custom animated text effect for "Frontend Developer"
- **Modern Layout:** Clean design with glassmorphism containers
- **Resume Integration:** Direct PDF download with visual feedback
- **Responsive Design:** Perfect scaling across all devices

### 💻 **Skills Showcase**

- **Interactive Skill Cards:** Hover effects with gradient borders
- **Staggered Animations:** Cards animate in sequence for visual impact
- **Tech Stack Highlights:** Modern frameworks and tools with descriptions
- **Background Effects:** Subtle animations and gradient overlays

### 👨‍💻 **About Section**

- **Story-Driven Cards:** Information broken into digestible, themed sections
- **Professional Journey:** Mumbai → Galway transition highlighted
- **Interactive Elements:** Hover effects on content cards
- **Visual Hierarchy:** Icons, gradients, and typography for easy scanning

### 🎪 **Projects Gallery**

- **Smart Filtering System:** Full Stack, React Apps, All Projects, E-commerce categories
- **Default to Full Stack:** Showcases most impressive projects first
- **Modern Project Cards:** Glassmorphism design with hover overlays
- **Dual Action Buttons:** Separate "Live Demo" and "Code" buttons
- **Loading States:** Skeleton animations while images load
- **Stats Dashboard:** Project metrics with animated counters

### 📧 **Contact Section**

- **Copy-to-Clipboard:** Email functionality with visual feedback
- **Multiple Contact Methods:** Email, LinkedIn with styled buttons
- **Professional Status:** Work authorization and availability indicators
- **Response Time Display:** Sets expectations for communication

### 🎨 **Modern UI/UX**

- **Consistent Design Language:** Purple/blue gradients throughout
- **Dark Theme Optimized:** Professional dark color scheme
- **Accessibility Focus:** Proper contrast ratios and interactive states
- **Performance Optimized:** Efficient animations and asset loading

## 🛠️ Technologies & Architecture

### **Frontend Stack**

- **React 19** - Latest React with modern hooks and patterns
- **Vite 6** - Lightning-fast build tool and dev server
- **Tailwind CSS v4** - Utility-first styling with custom animations
- **Motion/React** - Professional animation library
- **React Icons** - Comprehensive icon library

### **Development Tools**

- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Cross-browser compatibility

### **Animation & Effects**

- **Custom TrueFocus Component** - Unique text animation
- **Intersection Observer API** - Performance-optimized scroll triggers
- **CSS Transforms & Transitions** - Smooth, hardware-accelerated animations
- **Glassmorphism** - Modern translucent design pattern

## 🚀 Live Demo

**[View Live Portfolio](https://portfolio-vert-zeta-he84qqil5j.vercel.app/)**

## ⚡ Quick Start

```bash
# Clone the repository
git clone https://github.com/VidyasagarAkhumukhi/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Architecture

```
src/
├── components/           # React components
│   ├── Navbar.jsx       # Fixed navigation with glassmorphism
│   ├── Hero.jsx         # Landing section with TrueFocus animation
│   ├── Skills.jsx       # Tech stack with background effects
│   ├── SkillsCard.jsx   # Individual skill cards with hover effects
│   ├── About.jsx        # Story-driven about section
│   ├── Projects.jsx     # Filterable project gallery
│   ├── ProjectCard.jsx  # Modern project cards with overlays
│   ├── Connect.jsx      # Contact section with copy functionality
│   ├── ProfileCard.jsx  # Reusable profile component
│   └── SectionTitle.jsx # Consistent section headings
├── animations/          # Custom animation components
│   ├── TrueFocus.jsx   # Custom text animation
│   └── Beams.jsx       # Background effects (optional)
├── assets/             # Static assets
│   ├── images/         # Project screenshots and illustrations
│   └── Resume.pdf      # Downloadable resume
├── data.jsx           # Content management (skills, projects, etc.)
├── App.jsx            # Main application component
├── main.jsx           # Application entry point
└── index.css          # Global styles and Tailwind directives
```

## 🎯 Performance Features

- **Code Splitting:** Optimized bundle sizes with dynamic imports
- **Image Optimization:** Efficient loading with placeholder states
- **Animation Performance:** Hardware-accelerated transforms
- **Responsive Images:** Optimized for different screen densities
- **Fast Build Times:** Vite's lightning-fast development experience

## 🎨 Design Highlights

### **Color Palette**

- **Primary:** Purple gradients (#8b5cf6 → #a855f7)
- **Secondary:** Blue accents (#3b82f6 → #6366f1)
- **Background:** Dark grays (#0f172a → #1e293b)
- **Text:** White to gray spectrum for perfect contrast

### **Typography**

- **Headings:** Bold, modern fonts with gradient text effects
- **Body:** Clean, readable typography with proper line spacing
- **Code:** Monospace fonts for technical elements

### **Animations**

- **Entrance:** Smooth slide-ins with staggered delays
- **Hover:** Scale transforms and color transitions
- **Background:** Subtle particle effects and gradients

## 🔧 Customization

### **Adding New Projects**

Update `src/data.jsx` with new project objects:

```javascript
{
  id: nanoid(),
  img: yourImage,
  url: 'https://your-live-demo.com',
  github: 'https://github.com/your-repo',
  title: 'Project Name',
  text: 'Project description for filtering and display'
}
```

### **Modifying Skills**

Add new skills to the skills array in `src/data.jsx`:

```javascript
{
  id: nanoid(),
  title: 'Technology Name',
  icon: <YourIcon className='h-16 w-16 text-color' />,
  text: 'Description of your expertise with this technology'
}
```

### **Custom Animations**

Extend Tailwind configuration in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    animation: {
      'your-custom-animation': 'yourKeyframes 1s ease-in-out'
    },
    keyframes: {
      yourKeyframes: {
        '0%': { /* start state */ },
        '100%': { /* end state */ }
      }
    }
  }
}
```

## 🌟 Professional Impact

This portfolio demonstrates:

- **Modern React Patterns:** Hooks, Context, Performance optimization
- **Advanced CSS:** Tailwind v4, custom animations, glassmorphism
- **UX Design:** Intuitive navigation, visual feedback, accessibility
- **Performance:** Optimized builds, efficient animations, fast loading
- **Maintainability:** Clean code, component architecture, documentation

## 📄 License

MIT License - feel free to use this as inspiration for your own portfolio!

## 🤝 Connect

- **Portfolio:** [portfolionoto.netlify.app](https://portfolionoto.netlify.app/)
- **LinkedIn:** [Vidyasagar Akhumukhi](https://www.linkedin.com/in/vidyasagar-akhumukhi/)
- **Email:** sagar112113@gmail.com
- **GitHub:** [VidyasagarAkhumukhi](https://github.com/VidyasagarAkhumukhi)

---

# _Built with ❤️ using React 19, Tailwind CSS v4, and modern web technologies_

#### Projects

- explore "projects" array in data.jsx
- create Projects and ProjectsCard components
- setup return and render in App.jsx

Projects.jsx

```js
import ProjectsCard from "./ProjectsCard";
import { projects } from "../data";
import SectionTitle from "./SectionTitle";
const Projects = () => {
  return (
    <section className="py-20 align-element" id="projects">
      <SectionTitle text="web creations" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
```

ProjectsCard.jsx

```js
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
const ProjectsCard = ({ url, img, github, title, text }) => {
  return (
    <article className="bg-white rounded-lg shadow-md block hover:shadow-xl duration-300">
      <img
        src={img}
        alt={title}
        className="w-full object-cover rounded-t-lg h-64 "
      />
      <div className="capitalize p-8">
        <h2 className="text-xl tracking-wide font-medium">{title}</h2>
        <p className="mt-4 text-slate-700 leading-loose">{text}</p>
        <div className="mt-4 flex gap-x-4">
          <a href={url}>
            <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
          <a href={github}>
            <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
};
export default ProjectsCard;
```

#### Extra Challenge

- setup projects in CMS
  > > > > > > > 393053b2c5a08df5bc9bff4aa02a54db096dc92a
