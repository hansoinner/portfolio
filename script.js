/* =========================================================
<<<<<<< HEAD
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
=======
   PROJECT DATA
========================================================= */

const projects = {

    dashboard: {
        title: "Personal Dashboard",
        type: "WEB APPLICATION",

        description:
            "A clean and responsive personal dashboard designed to organize tasks, notes, useful links and everyday information in one place.",

>>>>>>> 69ea6fb (Add project images and update portfolio styles)
        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "LocalStorage",
            "Responsive Design"
        ],
<<<<<<< HEAD
=======

>>>>>>> 69ea6fb (Add project images and update portfolio styles)
        demo: "#",
        github: "#"
    },

<<<<<<< HEAD
    todolist: {
        title: "Todo List",
        type: "JAVASCRIPT APP",
        description:
            "A responsive todo list application for creating, editing, completing and removing tasks. JavaScript manages the application state while LocalStorage keeps tasks available between browser sessions.",
=======

    todolist: {
        title: "Todo List",
        type: "JAVASCRIPT APP",

        description:
            "A responsive todo list application for creating, editing, completing and removing tasks. JavaScript manages the application state while LocalStorage keeps tasks available between browser sessions.",

>>>>>>> 69ea6fb (Add project images and update portfolio styles)
        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "LocalStorage",
            "Responsive Design"
        ],
<<<<<<< HEAD
=======

>>>>>>> 69ea6fb (Add project images and update portfolio styles)
        demo: "https://hansoinner.github.io/todo-list/",
        github: "https://github.com/hansoinner/todo-list"
    },

<<<<<<< HEAD
    portfolio: {
        title: "Developer Portfolio",
        type: "WEBSITE",
        description:
            "A responsive personal portfolio website built to showcase development skills, projects and learning progress. The site includes responsive navigation, project details, animations and a functional contact form.",
=======

    portfolio: {
        title: "Developer Portfolio",
        type: "PERSONAL WEBSITE",

        description:
            "A responsive personal portfolio website built to showcase development skills, projects and learning progress. The site includes responsive navigation, project details, animations and a functional contact form.",

>>>>>>> 69ea6fb (Add project images and update portfolio styles)
        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Responsive Design",
            "Git",
            "GitHub Pages"
        ],
<<<<<<< HEAD
=======

>>>>>>> 69ea6fb (Add project images and update portfolio styles)
        demo: "https://hansoinner.github.io/portfolio/",
        github: "https://github.com/hansoinner/portfolio"
    },

<<<<<<< HEAD
    calculator: {
        title: "Calculator",
        type: "JAVASCRIPT APP",
        description:
            "A responsive calculator application built with HTML, CSS and vanilla JavaScript.",
=======

    calculator: {
        title: "Calculator",
        type: "JAVASCRIPT APP",

        description:
            "A responsive calculator application built with HTML, CSS and vanilla JavaScript.",

>>>>>>> 69ea6fb (Add project images and update portfolio styles)
        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Responsive Design"
        ],
<<<<<<< HEAD
=======

>>>>>>> 69ea6fb (Add project images and update portfolio styles)
        demo: "#",
        github: "#"
    },

<<<<<<< HEAD
    workout: {
        title: "Workout Program",
        type: "WEB APPLICATION",
        description:
            "A responsive workout planning application designed to organize exercises and training sessions in a simple interface.",
=======

    workout: {
        title: "Workout Program",
        type: "WEB APPLICATION",

        description:
            "A responsive workout planning application designed to organize exercises and training sessions in a simple interface.",

>>>>>>> 69ea6fb (Add project images and update portfolio styles)
        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Responsive Design",
            "LocalStorage"
        ],
<<<<<<< HEAD
        demo: "#",
        github: "#"
    }
};

=======

        demo: "#",
        github: "#"
    }

};


>>>>>>> 69ea6fb (Add project images and update portfolio styles)
/* =========================================================
   DOM ELEMENTS
========================================================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

const projectModal = document.getElementById("project-modal");
const modalOverlay = document.querySelector(".modal-overlay");
const modalClose = document.getElementById("modal-close");
<<<<<<< HEAD
const modalType = document.getElementById("modal-type");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalTechnologies =
    document.getElementById("modal-technologies-list") ||
    document.getElementById("modal-technologies");
=======

const modalType = document.getElementById("modal-type");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");

const modalTechnologies =
    document.getElementById("modal-technologies-list") ||
    document.getElementById("modal-technologies");

>>>>>>> 69ea6fb (Add project images and update portfolio styles)
const modalDemo = document.getElementById("modal-demo");
const modalGithub = document.getElementById("modal-github");

const contactForm = document.getElementById("contact-form");
<<<<<<< HEAD
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const formSuccess = document.getElementById("form-success");
const yearElement = document.getElementById("year");

=======

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");

const formSuccess = document.getElementById("form-success");
const yearElement = document.getElementById("year");


>>>>>>> 69ea6fb (Add project images and update portfolio styles)
/* =========================================================
   MOBILE NAVIGATION
========================================================= */

<<<<<<< HEAD
if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        });
    });
}

=======
function openNavigation() {

    if (!menuToggle || !navLinks) {
        return;
    }

    navLinks.classList.add("active");

    menuToggle.setAttribute(
        "aria-expanded",
        "true"
    );

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

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

    menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
    );
}


function toggleNavigation() {

    if (!navLinks) {
        return;
    }

    const isOpen =
        navLinks.classList.contains("active");

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


    navLinks.querySelectorAll("a").forEach(
        (link) => {

            link.addEventListener(
                "click",
                closeNavigation
            );

        }
    );

}


>>>>>>> 69ea6fb (Add project images and update portfolio styles)
/* =========================================================
   PROJECT MODAL
========================================================= */

function setupModalLink(link, url) {
<<<<<<< HEAD
    if (!link) return;

    if (!url || url === "#") {
        link.style.display = "none";
        link.removeAttribute("href");
        return;
    }

    link.style.display = "inline-flex";
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
}

=======

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


    technologies.forEach(
        (technology) => {

            const technologyTag =
                document.createElement("span");

            technologyTag.className =
                "modal-technology";

            technologyTag.textContent =
                technology;

            modalTechnologies.appendChild(
                technologyTag
            );

        }
    );

}


>>>>>>> 69ea6fb (Add project images and update portfolio styles)
function openProjectModal(projectId) {
    const project = projects[projectId];

<<<<<<< HEAD
    if (!project || !projectModal) return;

    if (modalType) modalType.textContent = project.type;
    if (modalTitle) modalTitle.textContent = project.title;
    if (modalDescription) modalDescription.textContent = project.description;

    if (modalTechnologies) {
        modalTechnologies.innerHTML = "";

        project.technologies.forEach((technology) => {
            const tag = document.createElement("span");
            tag.className = "modal-technology";
            tag.textContent = technology;
            modalTechnologies.appendChild(tag);
        });
    }

    setupModalLink(modalDemo, project.demo);
    setupModalLink(modalGithub, project.github);

    projectModal.classList.add("active");
    projectModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
=======
    const project =
        projects[projectId];


    if (!project || !projectModal) {
        return;
    }


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


    setTimeout(
        () => {

            if (modalClose) {
                modalClose.focus();
            }

        },
        50
    );
>>>>>>> 69ea6fb (Add project images and update portfolio styles)

    window.setTimeout(() => {
        modalClose?.focus();
    }, 50);
}

<<<<<<< HEAD
=======

>>>>>>> 69ea6fb (Add project images and update portfolio styles)
function closeProjectModal() {
    if (!projectModal) return;

    projectModal.classList.remove("active");
    projectModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}

document.querySelectorAll(".project-details-btn[data-modal]").forEach((button) => {
    button.addEventListener("click", () => {
        openProjectModal(button.dataset.modal);
    });
});

modalClose?.addEventListener("click", closeProjectModal);
modalOverlay?.addEventListener("click", closeProjectModal);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && projectModal?.classList.contains("active")) {
        closeProjectModal();
    }
});

/* =========================================================
   MODAL FOCUS TRAP
========================================================= */

document.addEventListener("keydown", (event) => {
    if (
        event.key !== "Tab" ||
        !projectModal?.classList.contains("active")
    ) {
        return;
    }

    const focusable = projectModal.querySelectorAll(
        'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );

<<<<<<< HEAD
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
=======

    projectModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "modal-open"
    );
>>>>>>> 69ea6fb (Add project images and update portfolio styles)

    if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
    }
});

/* =========================================================
   CONTACT FORM VALIDATION
========================================================= */

function showError(input, errorElement, message) {
    if (!input || !errorElement) return;

    input.classList.add("has-error");
    input.setAttribute("aria-invalid", "true");
    errorElement.textContent = message;
    errorElement.classList.add("visible");
}

function clearError(input, errorElement) {
    if (!input || !errorElement) return;

<<<<<<< HEAD
    input.classList.remove("has-error");
    input.setAttribute("aria-invalid", "false");
    errorElement.textContent = "";
    errorElement.classList.remove("visible");
}

function validateName() {
    if (!nameInput) return true;

    const value = nameInput.value.trim();
=======
/* =========================================================
   PROJECT BUTTONS
========================================================= */

const projectDetailButtons =
    document.querySelectorAll(
        ".project-details-btn[data-modal]"
    );
>>>>>>> 69ea6fb (Add project images and update portfolio styles)

    if (!value) {
        showError(nameInput, nameError, "Please enter your name.");
        return false;
    }

<<<<<<< HEAD
    if (value.length < 2) {
        showError(
            nameInput,
            nameError,
            "Your name must contain at least 2 characters."
=======
projectDetailButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                const projectId =
                    button.dataset.modal;

                openProjectModal(
                    projectId
                );

            }
>>>>>>> 69ea6fb (Add project images and update portfolio styles)
        );
        return false;
    }
<<<<<<< HEAD
=======
);


/* =========================================================
   MODAL CLOSE CONTROLS
========================================================= */

if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeProjectModal
    );
>>>>>>> 69ea6fb (Add project images and update portfolio styles)

    clearError(nameInput, nameError);
    return true;
}

function validateEmail() {
    if (!emailInput) return true;

<<<<<<< HEAD
    const value = emailInput.value.trim();
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!value) {
        showError(emailInput, emailError, "Please enter your email address.");
        return false;
    }

    if (!pattern.test(value)) {
        showError(emailInput, emailError, "Please enter a valid email address.");
        return false;
    }
=======
if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        closeProjectModal
    );
>>>>>>> 69ea6fb (Add project images and update portfolio styles)

    clearError(emailInput, emailError);
    return true;
}

function validateMessage() {
    if (!messageInput) return true;

<<<<<<< HEAD
    const value = messageInput.value.trim();

    if (!value) {
        showError(messageInput, messageError, "Please enter a message.");
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

    clearError(messageInput, messageError);
    return true;
=======
/* =========================================================
   KEYBOARD CONTROLS
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {
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
            !projectModal ||
            !projectModal.classList.contains("active")
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


    input.classList.add(
        "has-error"
    );


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

>>>>>>> 69ea6fb (Add project images and update portfolio styles)
}

nameInput?.addEventListener("blur", validateName);
emailInput?.addEventListener("blur", validateEmail);
messageInput?.addEventListener("blur", validateMessage);

<<<<<<< HEAD
/* =========================================================
   CONTACT FORM SUBMISSION
=======
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
   FORM SUBMISSION
>>>>>>> 69ea6fb (Add project images and update portfolio styles)
========================================================= */

if (contactForm) {
    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const valid =
            validateName() &&
            validateEmail() &&
            validateMessage();

        if (!valid) return;

        const submitButton = contactForm.querySelector(".form-submit");
        const originalText = submitButton?.textContent || "Send Message";

<<<<<<< HEAD
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = "Sending...";
        }

        if (formSuccess) {
            formSuccess.textContent = "";
            formSuccess.classList.remove("visible");
        }

        try {
            const response = await fetch(contactForm.action, {
                method: "POST",
                body: new FormData(contactForm),
                headers: {
                    Accept: "application/json"
                }
            });

            if (!response.ok) {
                throw new Error("Form submission failed.");
            }

            contactForm.reset();
            clearError(nameInput, nameError);
            clearError(emailInput, emailError);
            clearError(messageInput, messageError);

            if (formSuccess) {
                formSuccess.textContent =
                    "Thanks! Your message has been sent successfully.";
                formSuccess.classList.add("visible");
            }
        } catch (error) {
            console.error("Form submission error:", error);

            if (formSuccess) {
                formSuccess.textContent =
                    "Something went wrong. Please try again later.";
                formSuccess.classList.add("visible");
            }
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = originalText;
            }
=======
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

>>>>>>> 69ea6fb (Add project images and update portfolio styles)
        }
    });
}

/* =========================================================
   CURRENT YEAR
========================================================= */

<<<<<<< HEAD
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
=======
/* =========================================================
   CURRENT YEAR
========================================================= */

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

>>>>>>> 69ea6fb (Add project images and update portfolio styles)
}

/* =========================================================
   PLACEHOLDER LINKS
========================================================= */

<<<<<<< HEAD
document.querySelectorAll("[data-placeholder-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
    });
});

=======
>>>>>>> 69ea6fb (Add project images and update portfolio styles)
/* =========================================================
   SCROLL REVEAL
========================================================= */

<<<<<<< HEAD
const revealElements = document.querySelectorAll(
    ".reveal, .section-label, .section-title, .section-description, .about-content, .journey, .technology-section, .skill-card, .featured-project, .project-card, .contact-container"
);

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
            rootMargin: "0px 0px -50px 0px"
=======
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

>>>>>>> 69ea6fb (Add project images and update portfolio styles)
        }
    );

    revealElements.forEach((element) => {
        element.classList.add("reveal");
        revealObserver.observe(element);
    });
} else {
    revealElements.forEach((element) => {
        element.classList.add("visible");
    });
}

<<<<<<< HEAD
/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("main section[id]");
const navigationLinks = document.querySelectorAll('.nav-links a[href^="#"]');

if ("IntersectionObserver" in window && sections.length) {
    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                const sectionId = entry.target.id;

                navigationLinks.forEach((link) => {
                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === `#${sectionId}`
                    );
                });
            });
        },
        {
            threshold: 0.2,
            rootMargin: "-80px 0px -50% 0px"
        }
    );

    sections.forEach((section) => sectionObserver.observe(section));
}

/* =========================================================
   SMOOTH SCROLL
========================================================= */

navigationLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);
        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});
=======
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

                                link.classList.remove(
                                    "active"
                                );


                                if (
                                    link.getAttribute(
                                        "href"
                                    ) ===
                                    "#" + sectionId
                                ) {

                                    link.classList.add(
                                        "active"
                                    );

                                }

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
>>>>>>> 69ea6fb (Add project images and update portfolio styles)
