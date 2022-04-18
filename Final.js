

let videos = document.getElementsByTagName('video');



function Play() {
    for (video of videos) {
        video.play(); 
    }
};



function Pause() {
    for (video of videos) {
        video.pause(); 
    }
};

