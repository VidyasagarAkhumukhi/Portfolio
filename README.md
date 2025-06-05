# Personal Portfolio - React & Tailwind CSS

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-^18-blue?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v3-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-^5-646CFF?logo=vite)](https://vitejs.dev/)

## 📝 Description

This is a modern, responsive personal portfolio website built with **React** and styled with **Tailwind CSS**. It showcases my skills, projects, and provides a bit of information about me. The goal was to create a clean, visually appealing, and fast-loading single-page application to serve as a central hub for my professional presence online. The design is intended to be straightforward, allowing visitors to easily navigate through different sections like "Home" (Hero), "Skills," "About," and "Projects."

*(The "About Me" section in `About.jsx` describes Vidyasagar Akhumukhi, a front-end developer from Mumbai, now in Galway, passionate about crafting delightful web experiences and eager to join a collaborative team with a Stamp 1G visa.)*

## ✨ Features

* **Responsive Design:** Fully responsive layout that adapts to various screen sizes (mobile, tablet, desktop) thanks to Tailwind CSS.
* **Component-Based Architecture:** Built with reusable React components for different sections (Navbar, Hero, Skills, About, Projects).
* **Smooth Scrolling:** Implemented for navigation links (`<html class="scroll-smooth">`).
* **Hero Section:** A prominent hero section to introduce myself and my core skills.
* **Skills Showcase:** A dedicated section to display technical skills with icons and descriptions.
* **About Me:** A personal introduction and background.
* **Project Gallery:** A section to showcase key projects with images, descriptions, and links to live demos and GitHub repositories.
* **Styled with Tailwind CSS:** Utility-first CSS framework for rapid UI development and customization.
* **Data-Driven Content:** Utilizes JavaScript arrays (`data.js`) to manage content for navigation links, skills, and projects, making updates easier.
* **React Icons:** Incorporates `react-icons` for social media links and other iconography.

## 🚀 Live Demo

[Link to Live Demo](https://portfolionoto.netlify.app/) 

## 🛠️ Technologies Used

* **Frontend:**
    * React.js (v18+)
    * Vite (Build tool)
* **Styling:**
    * Tailwind CSS (v3+)
    * PostCSS
    * Autoprefixer
* **Icons:**
    * `react-icons`
* **Utilities:**
    * `nanoid` (Likely used in `data.js` for unique keys, though not explicitly shown in provided snippets)

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
    * The `tailwind.config.js` (or `.cjs`) file was configured to include paths to source files:
        ```javascript
        /** @type {import('tailwindcss').Config} */
        export default {
          content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
          theme: {
            extend: {},
          },
          plugins: [],
        };
        ```
4.  **Add Tailwind Directives:**
    * The main CSS file (`src/index.css`) includes the Tailwind directives:
        ```css
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        ```

## 📖 Usage

Once the development server is running:

* Navigate through the different sections of the portfolio using the navigation bar (Home, Skills, About, Projects).
* View project details and links in the "Projects" section.
* Social media links are available in the Hero section.

## 🏗️ Project Structure

* `src/`: Contains the main source code.
    * `components/`: Reusable React components.
        * `Navbar.jsx`: Navigation bar.
        * `Hero.jsx`: Hero section introducing yourself.
        * `Skills.jsx`: Section to display your skills.
        * `SkillsCard.jsx`: Individual card for a skill.
        * `About.jsx`: About Me section.
        * `Projects.jsx`: Section to display your projects.
        * `ProjectCard.jsx`: Individual card for a project.
        * `SectionTitle.jsx`: Reusable component for section headings.
    * `assets/`: Static assets like images (`hero.svg`, `about.svg`, project images).
    * `data.js`: (Assumed location) Contains arrays for navigation links, skills, and project details.
    * `App.jsx`: Main application component that assembles the layout.
    * `main.jsx`: Application entry point, renders the `App` component.
    * `index.css`: Global styles and Tailwind CSS directives.
* `public/`: Static assets directly served.
* `index.html`: Main HTML file.
* `tailwind.config.cjs` (or `.js`): Tailwind CSS configuration.
* `postcss.config.cjs` (or `.js`): PostCSS configuration.
* `package.json`: Project dependencies and scripts.
* `vite.config.js`: Vite configuration file.

## 🤝 Contributing

While this is a personal portfolio, suggestions or contributions for improvement are welcome!

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-enhancement`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some enhancement'`).
5.  Push to the branch (`git push origin feature/your-enhancement`).
6.  Open a Pull Request.