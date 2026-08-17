// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle =
    document.getElementById("menu-toggle");

const navLinks =
    document.getElementById("nav-links");


if (menuToggle && navLinks) {

    menuToggle.addEventListener(
        "click",
        () => {

            navLinks.classList.toggle(
                "active"
            );

            menuToggle.classList.toggle(
                "active"
            );


            const isOpen =
                navLinks.classList.contains(
                    "active"
                );


            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        }
    );


    const links =
        navLinks.querySelectorAll("a");


    links.forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                navLinks.classList.remove(
                    "active"
                );

                menuToggle.classList.remove(
                    "active"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });

}



// =========================
// PROJECT MODAL
// =========================

const projectModal =
    document.getElementById(
        "project-modal"
    );

const modalClose =
    document.getElementById(
        "modal-close"
    );

const modalOverlay =
    document.querySelector(
        ".modal-overlay"
    );

const modalTitle =
    document.getElementById(
        "modal-title"
    );

const modalType =
    document.getElementById(
        "modal-type"
    );

const modalDescription =
    document.getElementById(
        "modal-description"
    );

const modalTechnologies =
    document.getElementById(
        "modal-technologies"
    );

const modalDemo =
    document.getElementById(
        "modal-demo"
    );

const modalGithub =
    document.getElementById(
        "modal-github"
    );



// =========================
// PROJECT DATA
// =========================

const projects = {

    dashboard: {

        title:
            "Personal Dashboard",

        type:
            "WEB APPLICATION",

        description:
            "A personal dashboard designed to bring tasks, notes and useful information together in one clean interface. The project focuses on responsive layout, reusable components and JavaScript interactions.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        demo:
            "#",

        github:
            "#"

    },


    workout: {

        title:
            "Workout Tracker",

        type:
            "WEB APPLICATION",

        description:
            "An interactive workout tracker designed to help users organize exercises and workout routines. JavaScript is used to create an interactive experience and manage user input.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        demo:
            "#",

        github:
            "#"

    },


    calculator: {

        title:
            "JavaScript Calculator",

        type:
            "JAVASCRIPT PROJECT",

        description:
            "A responsive calculator built from scratch using HTML, CSS and JavaScript. The project focuses on JavaScript logic, user input and handling mathematical operations.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        demo:
            "#",

        github:
            "#"

    }

};



// =========================
// OPEN PROJECT MODAL
// =========================

function openProjectModal(projectId) {

    if (!projectModal) {
        return;
    }


    const project =
        projects[projectId];


    if (!project) {
        return;
    }


    modalTitle.textContent =
        project.title;

    modalType.textContent =
        project.type;

    modalDescription.textContent =
        project.description;


    modalTechnologies.innerHTML =
        "";


    project.technologies.forEach(
        (technology) => {

            const tag =
                document.createElement(
                    "span"
                );

            tag.textContent =
                technology;

            modalTechnologies.appendChild(
                tag
            );

        }
    );


    modalDemo.href =
        project.demo;

    modalGithub.href =
        project.github;


    projectModal.classList.add(
        "active"
    );

    projectModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );


    if (modalClose) {

        modalClose.focus();

    }

}



// =========================
// CLOSE PROJECT MODAL
// =========================

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

}



// =========================
// PROJECT DETAIL BUTTONS
// =========================

const projectButtons =
    document.querySelectorAll(
        ".project-details-btn"
    );


projectButtons.forEach(
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
        );

    }
);



// =========================
// CLOSE MODAL BUTTON
// =========================

if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeProjectModal
    );

}



// =========================
// CLOSE MODAL OVERLAY
// =========================

if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        closeProjectModal
    );

}



// =========================
// ESCAPE KEY
// =========================

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            projectModal &&
            projectModal.classList.contains(
                "active"
            )
        ) {

            closeProjectModal();

        }

    }
);



// =========================
// CONTACT FORM
// =========================

const contactForm =
    document.getElementById(
        "contact-form"
    );

const nameInput =
    document.getElementById(
        "name"
    );

const emailInput =
    document.getElementById(
        "email"
    );

const messageInput =
    document.getElementById(
        "message"
    );

const nameError =
    document.getElementById(
        "name-error"
    );

const emailError =
    document.getElementById(
        "email-error"
    );

const messageError =
    document.getElementById(
        "message-error"
    );

const formSuccess =
    document.getElementById(
        "form-success"
    );



// =========================
// VALIDATION HELPERS
// =========================

function showError(
    input,
    errorElement,
    message
) {

    if (!input || !errorElement) {
        return;
    }


    input
        .closest(".form-group")
        .classList.add(
            "has-error"
        );

    errorElement.textContent =
        message;

}


function clearError(
    input,
    errorElement
) {

    if (!input || !errorElement) {
        return;
    }


    input
        .closest(".form-group")
        .classList.remove(
            "has-error"
        );

    errorElement.textContent =
        "";

}



// =========================
// EMAIL VALIDATION
// =========================

function isValidEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        .test(email);

}



// =========================
// CONTACT FORM SUBMISSION
// =========================

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async (event) => {

            event.preventDefault();


            let isValid = true;


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
                    "";

            }


            // NAME

            if (
                nameInput.value
                    .trim()
                    .length < 2
            ) {

                showError(
                    nameInput,
                    nameError,
                    "Please enter your name."
                );

                isValid = false;

            }


            // EMAIL

            const email =
                emailInput.value.trim();


            if (
                !isValidEmail(email)
            ) {

                showError(
                    emailInput,
                    emailError,
                    "Please enter a valid email address."
                );

                isValid = false;

            }


            // MESSAGE

            if (
                messageInput.value
                    .trim()
                    .length < 10
            ) {

                showError(
                    messageInput,
                    messageError,
                    "Please enter at least 10 characters."
                );

                isValid = false;

            }


            if (!isValid) {

                return;

            }


            // SUBMIT

            const submitButton =
                contactForm.querySelector(
                    ".form-submit"
                );


            submitButton.disabled =
                true;

            submitButton.textContent =
                "Sending...";


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
                                "Accept":
                                    "application/json"
                            }
                        }
                    );


                if (response.ok) {

                    formSuccess.textContent =
                        "Thanks! Your message has been sent.";

                    contactForm.reset();

                } else {

                    formSuccess.textContent =
                        "Something went wrong. Please try again.";

                }


            } catch (error) {

                formSuccess.textContent =
                    "Unable to send your message. Please try again.";

            }


            submitButton.disabled =
                false;

            submitButton.textContent =
                "Send Message";

        }
    );

}



// =========================
// CURRENT YEAR
// =========================

const year =
    document.getElementById(
        "year"
    );


if (year) {

    year.textContent =
        new Date().getFullYear();

}



// =========================
// SCROLL REVEAL
// =========================

const revealElements =
    document.querySelectorAll(
        ".section-label, .section-title, .section-description, .about-content, .journey, .technology-section, .skill-card, .featured-project, .project-card, .contact-container"
    );


revealElements.forEach(
    (element) => {

        element.classList.add(
            "reveal"
        );

    }
);


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

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
            threshold: 0.12,

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