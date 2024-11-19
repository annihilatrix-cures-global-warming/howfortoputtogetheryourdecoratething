const video = document.getElementById('video');
const circlePlayButton = document.getElementById('circle-play-b');

function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

circlePlayButton.addEventListener("click", togglePlay);
video.addEventListener("playing", function () {
    circlePlayButton.style.opacity = 0;
    screen.orientation.lock("landscape");
});
video.addEventListener("pause", function () {
    circlePlayButton.style.opacity = 1;
});