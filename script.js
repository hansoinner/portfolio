/* =========================================================
   PORTFOLIO JAVASCRIPT
========================================================= */

"use strict";

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = {
    dashboard: {
        title: "Personal Dashboard",
        type: "WEB APPLICATION",
        description:
            "A clean and responsive personal dashboard designed to organize tasks, notes, useful links and everyday information in one place.",
        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "LocalStorage",
            "Responsive Design"
        ],
        demo: "#",
        github: "#"
    },

    todolist: {
        title: "Todo List",
        type: "JAVASCRIPT APP",
        description:
            "A responsive todo list application for creating, editing, completing and removing tasks. JavaScript manages the application state while LocalStorage keeps tasks available between browser sessions.",
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

    calculator: {
        title: "Calculator",
        type: "JAVASCRIPT APP",
        description:
            "A responsive calculator application built with HTML, CSS and vanilla JavaScript.",
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

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

const projectModal = document.getElementById("project-modal");
const modalOverlay = document.querySelector(".modal-overlay");
const modalClose = document.getElementById("modal-close");

const modalType = document.getElementById("modal-type");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");

const modalTechnologies =
    document.getElementById("modal-technologies-list") ||
    document.getElementById("modal-technologies");

const modalDemo = document.getElementById("modal-demo");
const modalGithub = document.getElementById("modal-github");

const contactForm = document.getElementById("contact-form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");

const formSuccess = document.getElementById("form-success");

const yearElement = document.getElementById("year");


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

function openNavigation() {
    if (!menuToggle || !navLinks) {
        return;
    }

    navLinks.classList.add("active");
    menuToggle.classList.add("active");

    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute(
        "aria-label",
        "Close navigation menu"
    );
}


function closeNavigation() {
    if (!menuToggle || !navLinks) {
        return;
    }

    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
    );
}


function toggleNavigation() {
    if (!navLinks) {
        return;
    }

    const isOpen = navLinks.classList.contains("active");

    if (isOpen) {
        closeNavigation();
    } else {
        openNavigation();
    }
}


if (menuToggle && navLinks) {
    menuToggle.addEventListener(
        "click",
        toggleNavigation
    );

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener(
            "click",
            closeNavigation
        );
    });
}


/* =========================================================
   PROJECT MODAL
========================================================= */

function setupModalLink(link, url) {
    if (!link) {
        return;
    }

    if (!url || url === "#") {
        link.style.display = "none";
        link.removeAttribute("href");
        link.removeAttribute("target");
        link.removeAttribute("rel");

        return;
    }

    link.style.display = "inline-flex";
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
}


function renderProjectTechnologies(technologies) {
    if (!modalTechnologies) {
        return;
    }

    modalTechnologies.innerHTML = "";

    technologies.forEach((technology) => {
        const technologyTag =
            document.createElement("span");

        technologyTag.className =
            "modal-technology";

        technologyTag.textContent =
            technology;

        modalTechnologies.appendChild(
            technologyTag
        );
    });
}


function openProjectModal(projectId) {
    const project = projects[projectId];

    if (!project || !projectModal) {
        return;
    }

    if (modalType) {
        modalType.textContent = project.type;
    }

    if (modalTitle) {
        modalTitle.textContent = project.title;
    }

    if (modalDescription) {
        modalDescription.textContent =
            project.description;
    }

    renderProjectTechnologies(
        project.technologies
    );

    setupModalLink(
        modalDemo,
        project.demo
    );

    setupModalLink(
        modalGithub,
        project.github
    );

    projectModal.classList.add("active");

    projectModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );

    setTimeout(() => {
        if (modalClose) {
            modalClose.focus();
        }
    }, 50);
}


function closeProjectModal() {
    if (!projectModal) {
        return;
    }

    projectModal.classList.remove("active");

    projectModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );
}


/* =========================================================
   PROJECT BUTTONS
========================================================= */

const projectDetailButtons =
    document.querySelectorAll(
        ".project-details-btn[data-modal]"
    );

projectDetailButtons.forEach((button) => {
    button.addEventListener(
        "click",
        () => {
            const projectId =
                button.dataset.modal;

            openProjectModal(projectId);
        }
    );
});


/* =========================================================
   MODAL CLOSE CONTROLS
========================================================= */

if (modalClose) {
    modalClose.addEventListener(
        "click",
        closeProjectModal
    );
}

if (modalOverlay) {
    modalOverlay.addEventListener(
        "click",
        closeProjectModal
    );
}


/* =========================================================
   KEYBOARD CONTROLS
========================================================= */

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
        }

        if (
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

function showError(
    input,
    errorElement,
    message
) {
    if (!input || !errorElement) {
        return;
    }

    input.classList.add("has-error");

    input.setAttribute(
        "aria-invalid",
        "true"
    );

    errorElement.textContent =
        message;

    errorElement.classList.add(
        "visible"
    );
}


function clearError(
    input,
    errorElement
) {
    if (!input || !errorElement) {
        return;
    }

    input.classList.remove(
        "has-error"
    );

    input.setAttribute(
        "aria-invalid",
        "false"
    );

    errorElement.textContent = "";

    errorElement.classList.remove(
        "visible"
    );
}


function validateName() {
    if (!nameInput) {
        return true;
    }

    const value =
        nameInput.value.trim();

    if (!value) {
        showError(
            nameInput,
            nameError,
            "Please enter your name."
        );

        return false;
    }

    if (value.length < 2) {
        showError(
            nameInput,
            nameError,
            "Your name must contain at least 2 characters."
        );

        return false;
    }

    clearError(
        nameInput,
        nameError
    );

    return true;
}


function validateEmail() {
    if (!emailInput) {
        return true;
    }

    const value =
        emailInput.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!value) {
        showError(
            emailInput,
            emailError,
            "Please enter your email address."
        );

        return false;
    }

    if (!emailPattern.test(value)) {
        showError(
            emailInput,
            emailError,
            "Please enter a valid email address."
        );

        return false;
    }

    clearError(
        emailInput,
        emailError
    );

    return true;
}


function validateMessage() {
    if (!messageInput) {
        return true;
    }

    const value =
        messageInput.value.trim();

    if (!value) {
        showError(
            messageInput,
            messageError,
            "Please enter a message."
        );

        return false;
    }

    if (value.length < 10) {
        showError(
            messageInput,
            messageError,
            "Your message must contain at least 10 characters."
        );

        return false;
    }

    clearError(
        messageInput,
        messageError
    );

    return true;
}


/* =========================================================
   LIVE FORM VALIDATION
========================================================= */

if (nameInput) {
    nameInput.addEventListener(
        "blur",
        validateName
    );
}

if (emailInput) {
    emailInput.addEventListener(
        "blur",
        validateEmail
    );
}

if (messageInput) {
    messageInput.addEventListener(
        "blur",
        validateMessage
    );
}


/* =========================================================
   CONTACT FORM SUBMISSION
========================================================= */

if (contactForm) {
    contactForm.addEventListener(
        "submit",
        async (event) => {
            event.preventDefault();

            const isNameValid =
                validateName();

            const isEmailValid =
                validateEmail();

            const isMessageValid =
                validateMessage();

            if (
                !isNameValid ||
                !isEmailValid ||
                !isMessageValid
            ) {
                return;
            }

            const submitButton =
                contactForm.querySelector(
                    ".form-submit"
                );

            const originalButtonText =
                submitButton
                    ? submitButton.textContent
                    : "Send Message";

            if (submitButton) {
                submitButton.disabled = true;

                submitButton.textContent =
                    "Sending...";
            }

            if (formSuccess) {
                formSuccess.textContent = "";

                formSuccess.classList.remove(
                    "visible"
                );
            }

            try {
                const response =
                    await fetch(
                        contactForm.action,
                        {
                            method: "POST",

                            body:
                                new FormData(
                                    contactForm
                                ),

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

                clearError(
                    nameInput,
                    nameError
                );

                clearError(
                    emailInput,
                    emailError
                );

                clearError(
                    messageInput,
                    messageError
                );

                if (formSuccess) {
                    formSuccess.textContent =
                        "Thanks! Your message has been sent successfully.";

                    formSuccess.classList.add(
                        "visible"
                    );
                }

            } catch (error) {
                console.error(
                    "Form submission error:",
                    error
                );

                if (formSuccess) {
                    formSuccess.textContent =
                        "Something went wrong. Please try again later.";

                    formSuccess.classList.add(
                        "visible"
                    );
                }

            } finally {
                if (submitButton) {
                    submitButton.disabled =
                        false;

                    submitButton.textContent =
                        originalButtonText;
                }
            }
        }
    );
}


/* =========================================================
   CURRENT YEAR
========================================================= */

if (yearElement) {
    yearElement.textContent =
        new Date().getFullYear();
}


/* =========================================================
   PLACEHOLDER LINKS
========================================================= */

document
    .querySelectorAll(
        "[data-placeholder-link]"
    )
    .forEach((link) => {
        link.addEventListener(
            "click",
            (event) => {
                event.preventDefault();
            }
        );
    });


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );

if ("IntersectionObserver" in window) {
    const revealObserver =
        new IntersectionObserver(
            (
                entries,
                observer
            ) => {
                entries.forEach(
                    (entry) => {
                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );
                    }
                );
            },
            {
                threshold: 0.15
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
        "main section[id]"
    );

const navigationLinks =
    document.querySelectorAll(
        '.nav-links a[href^="#"]'
    );

if (
    "IntersectionObserver" in window &&
    sections.length
) {
    const sectionObserver =
        new IntersectionObserver(
            (entries) => {
                entries.forEach(
                    (entry) => {
                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }

                        const sectionId =
                            entry.target.id;

                        navigationLinks.forEach(
                            (link) => {
                                link.classList.toggle(
                                    "active",
                                    link.getAttribute(
                                        "href"
                                    ) ===
                                    `#${sectionId}`
                                );
                            }
                        );
                    }
                );
            },
            {
                threshold: 0.3,

                rootMargin:
                    "-80px 0px -50% 0px"
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
   SMOOTH SCROLL
========================================================= */

navigationLinks.forEach(
    (link) => {
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

                const targetElement =
                    document.querySelector(
                        targetId
                    );

                if (!targetElement) {
                    return;
                }

                event.preventDefault();

                targetElement.scrollIntoView(
                    {
                        behavior: "smooth",
                        block: "start"
                    }
                );
            }
        );
    }
);
