/* =========================================================
   PROJECT DATA
========================================================= */

const projects = {
    dashboard: {
        title: "Personal Dashboard",
        type: "WEB APPLICATION",
        description:
            "A clean and responsive personal dashboard designed to organize tasks, notes, useful links and everyday information in one place.",
        image: "images/personal-dashboard.png",
        technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage", "Responsive Design"],
        demo: "https://hansoinner.github.io/personal-dashboard/",
        github: "https://github.com/hansoinner/personal-dashboard"
    },
    todolist: {
        title: "Todo List",
        type: "JAVASCRIPT APP",
        description:
            "A responsive todo list application for creating, editing, completing and removing tasks. JavaScript manages the application state while LocalStorage keeps tasks available between browser sessions.",
        image: "images/todolist.png",
        technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage", "Responsive Design"],
        demo: "https://hansoinner.github.io/todo-list/",
        github: "https://github.com/hansoinner/todo-list"
    },
    portfolio: {
        title: "Developer Portfolio",
        type: "WEBSITE",
        description:
            "A responsive personal portfolio website built to showcase development skills, projects and learning progress. The site includes responsive navigation, project details, animations and a functional contact form.",
        image: "images/portfolio1.png",
        technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git", "GitHub Pages"],
        demo: "https://hansoinner.github.io/portfolio/",
        github: "https://github.com/hansoinner/portfolio"
    },
    weather: {
        title: "Weather App",
        type: "WEB APPLICATION",
        description:
            "A responsive weather application that allows users to search for cities and view current weather conditions, temperature, humidity, wind speed and other useful information.",
        image: "images/weather-app.png",
        technologies: ["HTML5", "CSS3", "JavaScript", "Fetch API", "Open-Meteo API", "Responsive Design"],
        demo: "https://hansoinner.github.io/weather-app/",
        github: "https://github.com/hansoinner/weather-app"
    }
};


/* =========================================================
   DOM ELEMENTS
========================================================= */

const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("nav-links");
const navLinks = document.querySelectorAll(".nav-link");

const projectModal = document.getElementById("project-modal");
const modalOverlay = projectModal?.querySelector(".modal-overlay");
const modalClose = document.getElementById("modal-close");
const modalImage = document.getElementById("modal-image");
const modalType = document.getElementById("modal-type");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalTechnologies = document.getElementById("modal-technologies-list");
const modalDemo = document.getElementById("modal-demo");
const modalGithub = document.getElementById("modal-github");
const projectDetailsButtons = document.querySelectorAll(".project-details-btn");

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-success");
const currentYear = document.getElementById("year");


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

function updateMenuAccessibility(isOpen) {
    if (!menuToggle) return;

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
}

function openMobileMenu() {
    if (!menuToggle || !navigation) return;

    menuToggle.classList.add("active");
    navigation.classList.add("active");
    updateMenuAccessibility(true);
    document.body.classList.add("menu-open");
}

function closeMobileMenu() {
    if (!menuToggle || !navigation) return;

    menuToggle.classList.remove("active");
    navigation.classList.remove("active");
    updateMenuAccessibility(false);
    document.body.classList.remove("menu-open");
}

function toggleMobileMenu() {
    if (!navigation) return;

    navigation.classList.contains("active")
        ? closeMobileMenu()
        : openMobileMenu();
}

if (menuToggle) {
    menuToggle.addEventListener("click", toggleMobileMenu);
}

navLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
});

document.addEventListener("click", (event) => {
    if (!navigation || !menuToggle || !navigation.classList.contains("active")) return;

    if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) {
        closeMobileMenu();
    }
});


/* =========================================================
   PROJECT MODAL
========================================================= */

let lastModalTrigger = null;

function renderProjectTechnologies(technologies = []) {
    if (!modalTechnologies) return;

    modalTechnologies.replaceChildren();

    technologies.forEach((technology) => {
        const technologyElement = document.createElement("span");
        technologyElement.textContent = technology;
        modalTechnologies.appendChild(technologyElement);
    });
}

function setupModalLink(element, url) {
    if (!element) return;

    if (!url || url === "#") {
        element.hidden = true;
        element.removeAttribute("href");
        return;
    }

    element.hidden = false;
    element.href = url;
    element.target = "_blank";
    element.rel = "noopener noreferrer";
}

function handleModalImageError() {
    if (!modalImage) return;

    modalImage.alt = "Project screenshot unavailable";
    modalImage.style.display = "none";
}

function openProjectModal(projectId, trigger = null) {
    if (!projectModal) return;

    const project = projects[projectId];

    if (!project) {
        console.warn(`Project "${projectId}" was not found.`);
        return;
    }

    lastModalTrigger = trigger || document.activeElement;

    if (modalType) modalType.textContent = project.type;
    if (modalTitle) modalTitle.textContent = project.title;
    if (modalDescription) modalDescription.textContent = project.description;

    if (modalImage) {
        modalImage.style.display = "block";
        modalImage.src = project.image;
        modalImage.alt = `${project.title} project screenshot`;
    }

    renderProjectTechnologies(project.technologies);
    setupModalLink(modalDemo, project.demo);
    setupModalLink(modalGithub, project.github);

    projectModal.setAttribute("aria-hidden", "false");
    projectModal.classList.add("active");
    document.body.classList.add("modal-open");

    requestAnimationFrame(() => modalClose?.focus());
}

function closeProjectModal() {
    if (!projectModal) return;

    projectModal.classList.remove("active");
    projectModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    if (modalImage) {
        modalImage.src = "";
        modalImage.alt = "";
        modalImage.style.display = "";
    }

    const trigger = lastModalTrigger;
    lastModalTrigger = null;

    if (trigger && document.contains(trigger)) {
        requestAnimationFrame(() => trigger.focus());
    }
}

projectDetailsButtons.forEach((button) => {
    button.addEventListener("click", () => {
        openProjectModal(button.dataset.modal, button);
    });
});

if (modalClose) {
    modalClose.addEventListener("click", closeProjectModal);
}

if (modalOverlay) {
    modalOverlay.addEventListener("click", closeProjectModal);
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        if (projectModal?.classList.contains("active")) {
            closeProjectModal();
        } else if (navigation?.classList.contains("active")) {
            closeMobileMenu();
            menuToggle?.focus();
        }
    }
});


/* =========================================================
   MODAL FOCUS TRAP
========================================================= */

document.addEventListener("keydown", (event) => {
    if (event.key !== "Tab" || !projectModal?.classList.contains("active")) return;

    const focusableElements = [
        ...projectModal.querySelectorAll(
            'a[href]:not([hidden]), button:not([disabled]):not([hidden]), input:not([disabled]):not([hidden]), textarea:not([disabled]):not([hidden]), select:not([disabled]):not([hidden]), [tabindex]:not([tabindex="-1"]):not([hidden])'
        )
    ].filter((element) => element.offsetParent !== null);

    if (!focusableElements.length) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
    }
});

if (modalImage) {
    modalImage.addEventListener("error", handleModalImageError);
}


/* =========================================================
   CONTACT FORM VALIDATION
========================================================= */

function showFormStatus(message, type) {
    if (!formStatus) return;

    formStatus.textContent = message;
    formStatus.className = `form-status ${type}`;
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

if (contactForm) {
    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get("name")?.trim();
        const email = formData.get("email")?.trim();
        const message = formData.get("message")?.trim();

        if (!name) {
            showFormStatus("Please enter your name.", "error");
            return;
        }

        if (!email || !validateEmail(email)) {
            showFormStatus("Please enter a valid email address.", "error");
            return;
        }

        if (!message) {
            showFormStatus("Please enter a message.", "error");
            return;
        }

        const submitButton = contactForm.querySelector('button[type="submit"]');

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = "Sending...";
        }

        showFormStatus("Sending your message...", "loading");

        try {
            const response = await fetch(contactForm.action, {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" }
            });

            if (!response.ok) {
                throw new Error("Form submission failed.");
            }

            contactForm.reset();
            showFormStatus("Thanks! Your message has been sent.", "success");
        } catch (error) {
            console.error("Form error:", error);
            showFormStatus("Something went wrong. Please try again.", "error");
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = "Send Message";
            }
        }
    });
}


/* =========================================================
   CURRENT YEAR
========================================================= */

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        }
    );

    revealElements.forEach((element) => revealObserver.observe(element));
} else {
    revealElements.forEach((element) => element.classList.add("visible"));
}


/* =========================================================
   INITIAL STATE
========================================================= */

if (menuToggle) {
    updateMenuAccessibility(false);
}

if (projectModal) {
    projectModal.setAttribute("aria-hidden", "true");
}
