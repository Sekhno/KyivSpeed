(function(){
    
    var canvasVideo = new CanvasVideoPlayer({
        videoSelector: '.video',
        canvasSelector: '.canvas',
        timelineSelector: false,
        autoplay: true,
        makeLoop: true,
        pauseOnClick: false,
        audio: false
    });

    canvasVideo.play();
}());