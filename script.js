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

        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "LocalStorage",
            "Responsive Design"
        ],

        demo: "https://hansoinner.github.io/personal-dashboard/",
        github: "https://github.com/hansoinner/personal-dashboard"
    },


    todolist: {
        title: "Todo List",
        type: "JAVASCRIPT APP",
        description:
            "A responsive todo list application for creating, editing, completing and removing tasks. JavaScript manages the application state while LocalStorage keeps tasks available between browser sessions.",

        image: "images/todolist.png",

        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "LocalStorage",
            "Responsive Design"
        ],

        demo: "https://hansoinner.github.io/todo-list/",
        github: "https://github.com/hansoinner/todo-list"
    },


    portfolio: {
        title: "Developer Portfolio",
        type: "WEBSITE",
        description:
            "A responsive personal portfolio website built to showcase development skills, projects and learning progress. The site includes responsive navigation, project details, animations and a functional contact form.",

        image: "images/portfolio1.png",

        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Responsive Design",
            "Git",
            "GitHub Pages"
        ],

        demo: "https://hansoinner.github.io/portfolio/",
        github: "https://github.com/hansoinner/portfolio"
    },


    weather: {
        title: "Weather App",
        type: "WEB APPLICATION",
        description:
            "A responsive weather application that allows users to search for cities and view current weather conditions, temperature, humidity, wind speed and other useful information.",

        image: "images/weather-app.png",

        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Fetch API",
            "Open-Meteo API",
            "Responsive Design"
        ],

        demo: "https://hansoinner.github.io/weather-app/",
        github: "https://github.com/hansoinner/weather-app"
    },


    calculator: {
        title: "Calculator",
        type: "JAVASCRIPT APP",
        description:
            "A responsive calculator application built with HTML, CSS and vanilla JavaScript.",

        image: "images/calculator.png",

        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Responsive Design"
        ],

        demo: "#",
        github: "#"
    },


    workout: {
        title: "Workout Program",
        type: "WEB APPLICATION",
        description:
            "A responsive workout planning application designed to organize exercises and training sessions in a simple interface.",

        image: "images/workout.png",

        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Responsive Design",
            "LocalStorage"
        ],

        demo: "#",
        github: "#"
    }

};


/* =========================================================
   DOM ELEMENTS
========================================================= */

/* ---------------------------------------------------------
   Navigation
--------------------------------------------------------- */

const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigation");
const navLinks = document.querySelectorAll(".nav-link");


/* ---------------------------------------------------------
   Project Modal
--------------------------------------------------------- */

const projectModal = document.getElementById("project-modal");

const modalOverlay =
    projectModal?.querySelector(".modal-overlay");

const modalClose =
    document.getElementById("modal-close");

const modalImage =
    document.getElementById("modal-image");

const modalType =
    document.getElementById("modal-type");

const modalTitle =
    document.getElementById("modal-title");

const modalDescription =
    document.getElementById("modal-description");

const modalTechnologies =
    document.getElementById("modal-technologies-list");

const modalDemo =
    document.getElementById("modal-demo");

const modalGithub =
    document.getElementById("modal-github");

const projectDetailsButtons =
    document.querySelectorAll(".project-details-btn");


/* ---------------------------------------------------------
   Contact Form
--------------------------------------------------------- */

const contactForm =
    document.getElementById("contact-form");

const formStatus =
    document.getElementById("form-status");


/* ---------------------------------------------------------
   Footer
--------------------------------------------------------- */

const currentYear =
    document.getElementById("current-year");


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

function openMobileMenu() {

    if (!menuToggle || !navigation) {
        return;
    }

    menuToggle.classList.add("active");
    navigation.classList.add("active");

    menuToggle.setAttribute("aria-expanded", "true");

    document.body.classList.add("menu-open");
}


function closeMobileMenu() {

    if (!menuToggle || !navigation) {
        return;
    }

    menuToggle.classList.remove("active");
    navigation.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");

    document.body.classList.remove("menu-open");
}


function toggleMobileMenu() {

    if (!navigation) {
        return;
    }

    const isOpen =
        navigation.classList.contains("active");

    if (isOpen) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}


if (menuToggle) {

    menuToggle.addEventListener(
        "click",
        toggleMobileMenu
    );

}


/* Close mobile navigation after clicking a link */

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        closeMobileMenu();

    });

});


/* Close mobile navigation when clicking outside */

document.addEventListener("click", (event) => {

    if (
        !navigation ||
        !menuToggle ||
        !navigation.classList.contains("active")
    ) {
        return;
    }

    const clickedInsideNavigation =
        navigation.contains(event.target);

    const clickedMenuButton =
        menuToggle.contains(event.target);

    if (
        !clickedInsideNavigation &&
        !clickedMenuButton
    ) {
        closeMobileMenu();
    }

});


/* =========================================================
   PROJECT MODAL
========================================================= */

function renderProjectTechnologies(technologies) {

    if (!modalTechnologies) {
        return;
    }

    modalTechnologies.innerHTML = "";

    technologies.forEach((technology) => {

        const technologyElement =
            document.createElement("span");

        technologyElement.textContent =
            technology;

        modalTechnologies.appendChild(
            technologyElement
        );

    });

}


/* ---------------------------------------------------------
   Modal Links
--------------------------------------------------------- */

function setupModalLink(element, url) {

    if (!element) {
        return;
    }

    if (!url || url === "#") {

        element.style.display = "none";

        element.removeAttribute("href");

        return;
    }

    element.style.display = "";

    element.href = url;

    element.target = "_blank";

    element.rel =
        "noopener noreferrer";
}


/* ---------------------------------------------------------
   Open Modal
--------------------------------------------------------- */

function openProjectModal(projectId) {

    if (!projectModal) {
        return;
    }

    const project =
        projects[projectId];

    if (!project) {
        console.warn(
            `Project "${projectId}" was not found.`
        );

        return;
    }


    /* -----------------------------------------------------
       Project Information
    ----------------------------------------------------- */

    if (modalType) {

        modalType.textContent =
            project.type;

    }


    if (modalTitle) {

        modalTitle.textContent =
            project.title;

    }


    if (modalDescription) {

        modalDescription.textContent =
            project.description;

    }


    /* -----------------------------------------------------
       Project Screenshot
    ----------------------------------------------------- */

    if (modalImage) {

        modalImage.src =
            project.image;

        modalImage.alt =
            `${project.title} project screenshot`;

    }


    /* -----------------------------------------------------
       Technologies
    ----------------------------------------------------- */

    renderProjectTechnologies(
        project.technologies
    );


    /* -----------------------------------------------------
       Project Links
    ----------------------------------------------------- */

    setupModalLink(
        modalDemo,
        project.demo
    );

    setupModalLink(
        modalGithub,
        project.github
    );


    /* -----------------------------------------------------
       Show Modal
    ----------------------------------------------------- */

    projectModal.setAttribute(
        "aria-hidden",
        "false"
    );

    projectModal.classList.add(
        "active"
    );

    document.body.classList.add(
        "modal-open"
    );


    /* -----------------------------------------------------
       Focus Close Button
    ----------------------------------------------------- */

    if (modalClose) {

        modalClose.focus();

    }

}


/* ---------------------------------------------------------
   Close Modal
--------------------------------------------------------- */

function closeProjectModal() {

    if (!projectModal) {
        return;
    }

    projectModal.classList.remove(
        "active"
    );

    projectModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );


    /* Reset screenshot */

    if (modalImage) {

        modalImage.src = "";

        modalImage.alt = "";

    }

}


/* ---------------------------------------------------------
   Project Details Buttons
--------------------------------------------------------- */

projectDetailsButtons.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            const projectId =
                button.dataset.modal;

            openProjectModal(
                projectId
            );

        }
    );

});


/* ---------------------------------------------------------
   Close Button
--------------------------------------------------------- */

if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeProjectModal
    );

}


/* ---------------------------------------------------------
   Overlay Click
--------------------------------------------------------- */

if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        closeProjectModal
    );

}


/* ---------------------------------------------------------
   Escape Key
--------------------------------------------------------- */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            projectModal?.classList.contains("active")
        ) {

            closeProjectModal();

        }

    }
);


/* =========================================================
   MODAL FOCUS TRAP
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key !== "Tab" ||
            !projectModal?.classList.contains("active")
        ) {
            return;
        }


        const focusableElements =
            projectModal.querySelectorAll(
                'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'
            );


        if (!focusableElements.length) {
            return;
        }


        const firstElement =
            focusableElements[0];

        const lastElement =
            focusableElements[
                focusableElements.length - 1
            ];


        if (
            event.shiftKey &&
            document.activeElement === firstElement
        ) {

            event.preventDefault();

            lastElement.focus();

        } else if (
            !event.shiftKey &&
            document.activeElement === lastElement
        ) {

            event.preventDefault();

            firstElement.focus();

        }

    }
);


/* =========================================================
   CONTACT FORM VALIDATION
========================================================= */

function showFormStatus(
    message,
    type
) {

    if (!formStatus) {
        return;
    }

    formStatus.textContent =
        message;

    formStatus.className =
        `form-status ${type}`;

}


function validateEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        email
    );

}


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async (event) => {

            event.preventDefault();


            const formData =
                new FormData(
                    contactForm
                );


            const name =
                formData.get("name")?.trim();

            const email =
                formData.get("email")?.trim();

            const message =
                formData.get("message")?.trim();


            /* -------------------------------------------------
               Validation
            ------------------------------------------------- */

            if (!name) {

                showFormStatus(
                    "Please enter your name.",
                    "error"
                );

                return;

            }


            if (!email || !validateEmail(email)) {

                showFormStatus(
                    "Please enter a valid email address.",
                    "error"
                );

                return;

            }


            if (!message) {

                showFormStatus(
                    "Please enter a message.",
                    "error"
                );

                return;

            }


            /* -------------------------------------------------
               Loading State
            ------------------------------------------------- */

            const submitButton =
                contactForm.querySelector(
                    'button[type="submit"]'
                );


            if (submitButton) {

                submitButton.disabled =
                    true;

                submitButton.textContent =
                    "Sending...";

            }


            showFormStatus(
                "Sending your message...",
                "loading"
            );


            /* -------------------------------------------------
               Submit to Formspree
            ------------------------------------------------- */

            try {

                const response =
                    await fetch(
                        contactForm.action,
                        {
                            method: "POST",
                            body: formData,
                            headers: {
                                Accept:
                                    "application/json"
                            }
                        }
                    );


                if (!response.ok) {

                    throw new Error(
                        "Form submission failed."
                    );

                }


                contactForm.reset();


                showFormStatus(
                    "Thanks! Your message has been sent.",
                    "success"
                );


            } catch (error) {

                console.error(
                    "Form error:",
                    error
                );


                showFormStatus(
                    "Something went wrong. Please try again.",
                    "error"
                );


            } finally {

                if (submitButton) {

                    submitButton.disabled =
                        false;

                    submitButton.textContent =
                        "Send Message";

                }

            }

        }
    );

}


/* =========================================================
   CURRENT YEAR
========================================================= */

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


if (
    "IntersectionObserver" in window
) {

    const revealObserver =
        new IntersectionObserver(
            (
                entries,
                observer
            ) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.1,
                rootMargin:
                    "0px 0px -50px 0px"
            }
        );


    revealElements.forEach(
        (element) => {

            revealObserver.observe(
                element
            );

        }
    );

} else {

    revealElements.forEach(
        (element) => {

            element.classList.add(
                "visible"
            );

        }
    );

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


if (
    "IntersectionObserver" in window
) {

    const sectionObserver =
        new IntersectionObserver(
            (
                entries
            ) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            const sectionId =
                                entry.target.id;


                            navLinks.forEach(
                                (link) => {

                                    link.classList.remove(
                                        "active"
                                    );


                                    const href =
                                        link.getAttribute(
                                            "href"
                                        );


                                    if (
                                        href ===
                                        `#${sectionId}`
                                    ) {

                                        link.classList.add(
                                            "active"
                                        );

                                    }

                                }
                            );

                        }

                    }
                );

            },
            {
                rootMargin:
                    "-30% 0px -60% 0px",
                threshold: 0
            }
        );


    sections.forEach(
        (section) => {

            sectionObserver.observe(
                section
            );

        }
    );

}


/* =========================================================
   SMOOTH SCROLLING
========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach((link) => {

    link.addEventListener(
        "click",
        (event) => {

            const targetId =
                link.getAttribute(
                    "href"
                );


            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(
                    targetId
                );


            if (!target) {
                return;
            }


            event.preventDefault();


            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

});


/* =========================================================
   WINDOW RESIZE
========================================================= */

window.addEventListener(
    "resize",
    () => {

        if (
            window.innerWidth > 760
        ) {

            closeMobileMenu();

        }

    }
);