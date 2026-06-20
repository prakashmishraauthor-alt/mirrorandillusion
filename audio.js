document.addEventListener("DOMContentLoaded", () => {

    const audio = document.getElementById("mi-ambient-audio");
    const toggle = document.querySelector(".audio-toggle");

    if (!audio || !toggle) return;

    let isPlaying = false;

    audio.volume = 0.25;

    function startAudio() {

        audio.play()
            .then(() => {
                isPlaying = true;
                toggle.classList.add("active");
                toggle.textContent = "◉ Sound On";
            })
            .catch(() => {
                console.log("Audio blocked until interaction");
            });

    }

    function stopAudio() {

        audio.pause();
        isPlaying = false;

        toggle.classList.remove("active");
        toggle.textContent = "◉ Sound Off";

    }

    /* Must wait for user gesture */
    const enableAudio = () => {

        startAudio();
        document.removeEventListener("click", enableAudio);

    };

    document.addEventListener("click", enableAudio, { once: true });

    toggle.addEventListener("click", (e) => {

        e.stopPropagation();

        if (isPlaying) {
            stopAudio();
        } else {
            startAudio();
        }

    });

});
