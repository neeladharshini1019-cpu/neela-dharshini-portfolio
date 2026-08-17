/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("show");

    });

}


/* =====================================================
   CLOSE MOBILE MENU AFTER CLICK
===================================================== */

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

    });

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section[id]");
const navigationLinks =
    document.querySelectorAll(".nav-links a");


function updateActiveNavigation() {

    let current = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 160;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navigationLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);

updateActiveNavigation();



/* =====================================================
   GITHUB BUTTONS
===================================================== */

document.querySelectorAll(".github-link").forEach(function (button) {

    button.addEventListener("click", function (event) {

        const githubLink =
            this.getAttribute("data-github");


        /*
           Your resume does not contain the individual
           GitHub project URLs.

           Therefore, this prevents a broken link until
           you add the real URL.
        */

        if (
            !githubLink ||
            githubLink.startsWith("YOUR_")
        ) {

            event.preventDefault();

            alert(
                "GitHub link will be added here. Please provide the GitHub link for this project."
            );

            return;

        }


        this.href = githubLink;

    });

});