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

    var buttons = document.querySelector('.wrapper-buttons'),
        logo = document.querySelector('.wrapper-logo'),
        easeInOut = 'power3.out',
        timeline = gsap.timeline({
            ease: easeInOut
        });

        timeline.set(buttons, {
            opacity: 0
        });

        timeline.from(logo, 6, {
            opacity: 0,
            scale: 0,
            ease: easeInOut,
            delay: -1,
            rotationX: 270,
            transformOrigin: 'center',
            transformStyle: 'preserve-3d'
        }).then(function(){
            timeline.to(buttons, .2, {
                opacity: 1
            })
        });
    
}());