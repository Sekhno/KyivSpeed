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

    //we set visibility:hidden in the CSS to avoid an initial flash - make them visible now, but the from() tweens are going to essentially hide them anyway because their stroke position/length will be 0.
    gsap.set('.logo__st2', {
        visibility: "visible",
        fill: 'transparent',
        stroke: '#FFFFFF',
        strokeWidth: 5
    });

    gsap.set('.logo__st1', {
        autoAlpha: 0
    });

    gsap.set('.button', {
        autoAlpha: 0,
    })

    var tl = gsap.timeline({ onUpdate: updateSlider });

    tl.from('.logo__st2', {
            duration: 4,
            drawSVG: 0,
            scale: 0.5,
            transformOrigin: '50% 50%',
            ease: 'power1.inOut'
        })
        .fromTo('.logo__st2', {
            fill: 'transparent',
            strokeWidth: 5
        }, {
            duration: 1,
            fill: '#FFFFFF',
            strokeWidth: 0
        }, '-=1')
        .to('.logo__st1', 1, {
            autoAlpha: 1,
            ease: 'power1.inOut'
        })
        .to('.button', 1, {
            autoAlpha: 1,
            ease: 'power1.inOut'
        });

    

    function updateSlider() {
        // console.log("value", tl.progress() * 100);
    }

    gsap.render && gsap.render(); 
}());