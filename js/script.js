/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader =
            document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }, 2000);

});


/* =========================
   TYPEWRITER EFFECT
========================= */

const teacherName =
    "Er. Shruti Tiwari";

let index = 0;

function typeWriter() {

    if (index < teacherName.length) {

        document.getElementById("typing")
            .innerHTML += teacherName.charAt(index);

        index++;

        setTimeout(typeWriter, 120);
    }
}

typeWriter();


/* =========================
   FADE IN SECTIONS
========================= */

const sections =
    document.querySelectorAll(".fade-section");

const observer =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");
            }

        });

    }, {
        threshold: 0.25
    });

sections.forEach(section => {

    observer.observe(section);

});


/* =========================
   COUNTER ANIMATION
========================= */

const counters =
    document.querySelectorAll(".counter");

const speed = 100;

counters.forEach(counter => {

    const animateCounter = () => {

        const target =
            +counter.getAttribute("data-target");

        const count =
            +counter.innerText;

        const increment =
            Math.ceil(target / speed);

        if (count < target) {

            counter.innerText =
                count + increment;

            setTimeout(
                animateCounter,
                20
            );

        } else {

            counter.innerText =
                target;
        }

    };

    animateCounter();

});


/* =========================
   RESEARCH PAPER MODAL
========================= */

function openModal(
    title,
    description,
    link
) {

    document.getElementById(
        "paperTitle"
    ).innerText = title;

    document.getElementById(
        "paperDescription"
    ).innerText = description;

    document.getElementById(
        "paperLink"
    ).href = link;


    /* QR CODE */

    document.getElementById(
        "paperQR"
    ).src =
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="
    + encodeURIComponent(link);


    document.getElementById(
        "paperModal"
    ).style.display = "block";

}


function closeModal() {

    document.getElementById(
        "paperModal"
    ).style.display = "none";

}


/* =========================
   CLOSE MODAL OUTSIDE CLICK
========================= */

window.onclick = function(event) {

    const modal =
        document.getElementById(
            "paperModal"
        );

    if (event.target == modal) {

        modal.style.display =
            "none";
    }

};


/* =========================
   HERO PARALLAX EFFECT
========================= */

window.addEventListener(
    "scroll",
    function() {

        const hero =
            document.querySelector(
                ".hero"
            );

        let scrollValue =
            window.scrollY;

        hero.style.backgroundPositionY =
            scrollValue * 0.5 + "px";

    }
);


/* =========================
   SOCIAL ICON HOVER GLOW
========================= */

const socialIcons =
    document.querySelectorAll(
        ".social a"
    );

socialIcons.forEach(icon => {

    icon.addEventListener(
        "mouseenter",
        () => {

            icon.style.textShadow =
            "0 0 20px #d4af37";
        }
    );

    icon.addEventListener(
        "mouseleave",
        () => {

            icon.style.textShadow =
            "none";
        }
    );

});


/* =========================
   SMOOTH APPEAR FOR CARDS
========================= */

const cards =
    document.querySelectorAll(
        ".glass"
    );

const cardObserver =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (
                entry.isIntersecting
            ) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";
            }

        });

    });

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(60px)";

    card.style.transition =
        "all 1s ease";

    cardObserver.observe(card);

});
