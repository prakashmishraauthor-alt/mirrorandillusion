document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll("section");

    if (!sections.length) return;

    let currentIndex = 0;

    function updateStory() {

        const scrollY = window.scrollY;
        const windowH = window.innerHeight;

        sections.forEach((section, index) => {

            const rect = section.getBoundingClientRect();
            const center = rect.top + rect.height / 2;

            if (center < windowH * 0.6 && center > windowH * 0.2) {

                currentIndex = index;

                section.classList.add("active");
                section.classList.remove("dimmed");

            } else if (center < windowH) {

                section.classList.add("dimmed");
                section.classList.remove("active");

            } else {

                section.classList.remove("active", "dimmed");

            }

        });

    }

    window.addEventListener("scroll", updateStory, { passive: true });

    updateStory();

});
