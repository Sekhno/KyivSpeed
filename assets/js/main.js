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
    gsap.set('.st2', {
        visibility: "visible",
        fill: 'transparent',
        stroke: '#FFFFFF',
        strokeWidth: 5
    });

    gsap.set('.st1', {
        autoAlpha: 0
    });

    gsap.set('.wrapper-buttons', {
        autoAlpha: 0
    })

    var tl = gsap.timeline({ onUpdate: updateSlider });

    //animate the plugin text first, drawing to 100%
    tl.from('.st2', {
            duration: 4,
            drawSVG: 0,
            scale: 0.5,
            transformOrigin: '50% 50%',
            ease: 'power1.inOut'
        })
        //now animate the logo strokes (note we use '102% as FireFox 34 miscalculates the length of a few strokes)
        .fromTo('.st2', {
            // drawSVG: 0,
            fill: 'transparent',
            strokeWidth: 5
        }, {
            duration: 1,
            fill: '#FFFFFF',
            // drawSVG: '102%',
            strokeWidth: 0
        }, '-=1')
        //fade in the real logo and the rest of the text
        .to('.st1', 1, {
            autoAlpha: 1,
            ease: 'power1.inOut'
        })
        .to('.wrapper-buttons', 1, {
            autoAlpha: .5,
            ease: 'power1.inOut'
        })
        //hide the logo strokes that are now obscured by the real logo (just to improve rendering performance)
        // .set("svg", {
        //     visibility: "hidden"
        // });

    //--- SLIDER ---
    // $slider.slider({
    //     range: false,
    //     min: 0,
    //     max: 100,
    //     step: 0.02,
    //     value: 0,
    //     slide: function (event, ui) {
    //         tl.progress(ui.value / 100).pause();
    //     }
    // });

    function updateSlider() {
        console.log("value", tl.progress() * 100);
    }
    // var $replayIcon = $("#replayIcon"),
    //     $replay = $("#replay").mouseenter(function () {
    //         gsap.to($replayIcon, {
    //             duration: 0.4,
    //             rotation: "+=360"
    //         });
    //         gsap.to($replay, {
    //             duration: 0.4,
    //             opacity: 1
    //         });
    //     }).mouseleave(function () {
    //         gsap.to($replay, {
    //             duration: 0.4,
    //             opacity: 0.65
    //         });
    //     }).click(function () {
    //         tl.restart();
    //     });

    gsap.render && gsap.render(); //lazy rendering (a performance optimization) can cause the initial render to be delayed by 1 tick, causing the logo to be visible for a brief moment, so we force a render here immediately. Another option would be to set lazy:false on the tween(s), but this is easier/faster.
}());