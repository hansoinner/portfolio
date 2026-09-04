const caseStudies = {
    dashboard: {
        title: "Personal Dashboard",
        type: "WEB APPLICATION · CASE STUDY",
        lead: "A responsive productivity dashboard designed to bring everyday tasks, notes, links and progress into one focused interface.",
        overview: [
            "The Personal Dashboard was built as a practical front-end application rather than a static mockup. The goal was to create a useful interface while demonstrating component-style thinking with plain JavaScript.",
            "The project combines responsive UI design, browser storage and interactive application state without relying on a framework."
        ],
        problem: [
            "Everyday information can become scattered across separate tools. I wanted to explore how a single lightweight dashboard could organize common tasks and information while remaining fast and simple to use."
        ],
        solution: [
            "I built a modular dashboard with task management, notes, useful links, statistics and responsive navigation. LocalStorage keeps user data available between browser sessions, making the interface behave more like a real application."
        ],
        features: [
            ["Task management", "Create, update, complete and manage tasks from a focused workflow."],
            ["Persistent storage", "Use LocalStorage to keep relevant application data between sessions."],
            ["Responsive layout", "Adapt the dashboard experience across desktop, tablet and mobile screens."],
            ["Notes & links", "Keep useful information accessible from the same workspace."],
            ["Progress overview", "Present useful statistics and progress indicators at a glance."],
            ["Accessible interactions", "Use semantic controls, keyboard-friendly navigation and clear states."]
        ],
        technologies: ["HTML5", "CSS3", "Vanilla JavaScript", "LocalStorage", "Responsive Design", "Git", "GitHub Pages"],
        challenges: [
            ["Managing application state", "I separated data handling from rendering logic so UI updates could remain predictable as features were added."],
            ["Responsive complexity", "I used a structured CSS layout and breakpoint strategy instead of designing separate desktop and mobile pages."],
            ["Keeping data persistent", "LocalStorage was integrated into the application flow so state is restored when the user returns."]
        ],
        learning: [
            "This project strengthened my understanding of state-driven interfaces, DOM updates and persistence in a browser-only application.",
            "It also taught me that good front-end architecture matters even when working without a framework: clear data structures, reusable functions and predictable UI states make future changes much easier."
        ],
        image: "images/personal-dashboard.png",
        demo: "https://hansoinner.github.io/personal-dashboard/",
        github: "https://github.com/hansoinner/personal-dashboard"
    },
    todolist: {
        title: "Todo List",
        type: "JAVASCRIPT APP · CASE STUDY",
        lead: "A focused task-management application built to practice state, CRUD interactions, filtering and browser persistence.",
        overview: [
            "The Todo List project focuses on the fundamentals behind interactive web applications. Instead of treating a task list as a simple form, I built a complete workflow around creating, editing, completing and removing tasks.",
            "The application stores its state locally so tasks remain available after refreshing or reopening the browser."
        ],
        problem: ["A useful task manager needs more than an input field: users should be able to change task state, recover from mistakes and quickly understand what remains to be done."],
        solution: ["I created a responsive interface with clear task states, filtering, completion controls, deletion and LocalStorage persistence. JavaScript owns the application state and updates the DOM when that state changes."],
        features: [
            ["Create tasks", "Add new tasks through a simple, keyboard-friendly input flow."],
            ["Edit tasks", "Update existing tasks without rebuilding the list manually."],
            ["Complete tasks", "Toggle completion and keep progress visible."],
            ["Filter tasks", "Focus on active, completed or all tasks."],
            ["Clear completed", "Remove finished work with one deliberate action."],
            ["Persistent data", "Keep tasks available using LocalStorage."]
        ],
        technologies: ["HTML5", "CSS3", "Vanilla JavaScript", "LocalStorage", "Responsive Design"],
        challenges: [
            ["Keeping UI and state synchronized", "The task array became the source of truth, with rendering functions responsible for reflecting its current state."],
            ["Handling empty states", "The interface provides clear feedback when there are no tasks instead of leaving the user with a blank screen."],
            ["Reliable persistence", "Storage is updated when task state changes and restored when the application initializes."]
        ],
        learning: [
            "The project improved my understanding of CRUD operations, array methods, event handling and LocalStorage.",
            "It also reinforced the importance of designing clear empty, active and completed states instead of focusing only on the happy path."
        ],
        image: "images/todolist.png",
        demo: "https://hansoinner.github.io/todo-list/",
        github: "https://github.com/hansoinner/todo-list"
    },
    portfolio: {
        title: "Developer Portfolio",
        type: "WEBSITE · CASE STUDY",
        lead: "A professional portfolio built from scratch to present projects, technical skills, development progress and contact information.",
        overview: [
            "The portfolio is itself a development project. I designed and built it with semantic HTML, responsive CSS and vanilla JavaScript, then deployed it with GitHub Pages.",
            "The site combines project presentation with practical front-end concerns such as accessibility, SEO, responsive navigation, project modals and a functional contact form."
        ],
        problem: ["A developer portfolio has to communicate technical ability quickly while still being easy for recruiters, clients and other developers to navigate."],
        solution: ["I created a clear content hierarchy around skills, selected projects, a resume and contact actions. Project details are interactive, while dedicated case-study pages provide deeper context for technical decision-making."],
        features: [
            ["Responsive navigation", "A mobile-friendly navigation system with accessible menu controls."],
            ["Project showcase", "Highlight selected projects with screenshots, technologies and links."],
            ["Project modal", "Expose additional project details without forcing users away from the main portfolio."],
            ["Resume page", "Provide a dedicated, print-friendly resume experience."],
            ["Contact form", "Collect project or opportunity enquiries through a functional form workflow."],
            ["SEO & accessibility", "Use metadata, structured data, semantic markup and keyboard-friendly interactions."]
        ],
        technologies: ["HTML5", "CSS3", "Vanilla JavaScript", "Git", "GitHub", "GitHub Pages", "Formspree"],
        challenges: [
            ["Balancing visual polish and performance", "I kept the site dependency-free and used lightweight CSS and browser APIs rather than adding a framework for simple interactions."],
            ["Making the portfolio accessible", "I added skip navigation, focus states, ARIA attributes, keyboard modal controls and reduced-motion support."],
            ["Presenting projects professionally", "Project cards, screenshots, live demos, source links and case studies create multiple levels of detail for different visitors."]
        ],
        learning: [
            "Building the portfolio taught me to treat a personal website as a real product: content, UX, accessibility, SEO, performance and maintainability all matter.",
            "It also gave me a place to continuously apply improvements from every new project I build."
        ],
        image: "images/portfolio1.png",
        demo: "https://hansoinner.github.io/portfolio/",
        github: "https://github.com/hansoinner/portfolio"
    },
    weather: {
        title: "Weather App",
        type: "WEB APPLICATION · CASE STUDY",
        lead: "A responsive weather application that combines city search, API requests and clear presentation of current weather data.",
        overview: [
            "The Weather App was built to practice working with external APIs and asynchronous JavaScript while maintaining a simple, responsive user experience.",
            "Users can search for a city and view current weather information such as temperature, conditions, humidity and wind data."
        ],
        problem: ["Weather data is useful only when it is presented clearly and retrieved reliably. The interface needs to handle loading, successful responses and errors without confusing the user."],
        solution: ["I built a responsive search-driven interface using the Fetch API and Open-Meteo. The application separates the request flow from UI updates and provides clear feedback when a search is loading or cannot be completed."],
        features: [
            ["City search", "Search for weather information using a city-based workflow."],
            ["API integration", "Retrieve live weather data through browser fetch requests."],
            ["Current conditions", "Present temperature and useful weather details in a readable layout."],
            ["Weather details", "Show information including humidity, wind and feels-like temperature."],
            ["Loading state", "Give feedback while external data is being retrieved."],
            ["Error handling", "Handle failed searches and API issues with user-friendly feedback."]
        ],
        technologies: ["HTML5", "CSS3", "Vanilla JavaScript", "Fetch API", "Open-Meteo API", "Responsive Design"],
        challenges: [
            ["Asynchronous data", "The UI needs to wait for external data without blocking the rest of the page."],
            ["API failures", "Network errors and invalid searches require a clear fallback instead of broken UI."],
            ["Responsive information density", "Weather details were structured so the interface remains readable on smaller screens."]
        ],
        learning: [
            "This project strengthened my understanding of Fetch, promises, async workflows and working with API response data.",
            "It also showed how important loading and error states are when an application depends on services outside the browser."
        ],
        image: "images/weather-app.png",
        demo: "https://hansoinner.github.io/weather-app/",
        github: "https://github.com/hansoinner/weather-app"
    }
};

const params = new URLSearchParams(window.location.search);
const projectKey = params.get("project") || "dashboard";
const project = caseStudies[projectKey] || caseStudies.dashboard;

const textBlocks = (items) => items.map((item) => `<p>${item}</p>`).join("");
const linkButton = (href, label, primary = false) =>
    `<a class="button ${primary ? "button-primary" : "button-secondary"}" href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;

function renderCaseStudy() {
    document.title = `${project.title} Case Study | Sondre G`;
    document.getElementById("case-type").textContent = project.type;
    document.getElementById("case-title").textContent = project.title;
    document.getElementById("case-lead").textContent = project.lead;

    const actions = `${linkButton(project.demo, "Live Demo", true)}${linkButton(project.github, "GitHub")}`;
    document.getElementById("case-actions").innerHTML = actions;
    document.getElementById("case-actions-bottom").innerHTML = `${actions}<a class="button button-secondary" href="index.html#projects">Back to Portfolio</a>`;

    document.getElementById("overview").innerHTML = textBlocks(project.overview);
    document.getElementById("problem").innerHTML = textBlocks(project.problem);
    document.getElementById("solution").innerHTML = textBlocks(project.solution);
    document.getElementById("learning").innerHTML = textBlocks(project.learning);

    document.getElementById("features").innerHTML = project.features.map(
        ([title, description], index) => `<article class="feature-card"><span>Feature ${String(index + 1).padStart(2, "0")}</span><h3>${title}</h3><p>${description}</p></article>`
    ).join("");

    document.getElementById("technologies").innerHTML = project.technologies.map((tech) => `<span>${tech}</span>`).join("");

    document.getElementById("challenges").innerHTML = project.challenges.map(
        ([title, description]) => `<article class="challenge-card"><h3>${title}</h3><p>${description}</p></article>`
    ).join("");

    const image = document.getElementById("case-image");
    image.src = project.image;
    image.alt = `${project.title} project screenshot`;
    document.getElementById("case-caption").textContent = `${project.title} — project preview`;

    const schema = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": `${project.title} Case Study`,
        "author": { "@type": "Person", "name": "Sondre G", "url": "https://hansoinner.github.io/portfolio/" },
        "url": `https://hansoinner.github.io/portfolio/project.html?project=${projectKey}`,
        "image": `https://hansoinner.github.io/portfolio/${project.image}`,
        "keywords": project.technologies.join(", ")
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
}

const year = document.getElementById("current-year");
if (year) year.textContent = new Date().getFullYear();

renderCaseStudy();
