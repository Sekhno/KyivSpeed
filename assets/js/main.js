window.addEventListener('DOMContentLoaded', function(){
    console.log('DOMContentLoaded');

    var video = document.getElementById('video'),
        canvas = document.getElementById('canvas'),
        enter = document.getElementById('enter'),
        buttons = document.querySelectorAll('.buttons'),
        promise = video.play(),
        logo = document.querySelector('.logo'),
        easeInOut = 'power3.out',
        logoAnim = gsap.timeline({
            ease: easeInOut
        }),
        buttonsAnim = gsap.timeline({
            ease: easeInOut
        });

    
    console.log(video.getBoundingClientRect());

    logoAnim.set(logo, {
        opacity: 0
    });

    if (promise !== undefined) {
        promise.then(_ => {
            // Autoplay started!
            console.log('Autoplay started!');
            animLogo();
            paintVideo();
            // onTimeupdate();
            animButtons();
        }).catch(error => {
            console.log(error);
            // Autoplay was prevented.
            // Show a "Play" button so that user can start playback.
            enter.style.visibility = 'visible';
            enter.addEventListener('click', function listener(){
                // video.play();
                animLogo();
                animButtons();
                this.style.visibility = 'hidden';
                this.removeEventListener('click', listener, false);
            }, false)
        });
    }

    buttonsAnim.set(buttons, {
        opacity: 0
    });

    // WORK!
    // function onTimeupdate() {
    //     video.addEventListener('timeupdate', function listener() {
    //         console.log(this.currentTime);
    //         if (this.currentTime > 6) {
    //             buttonsAnim.fromTo(
    //                 buttons, {
    //                     opacity: 0,
    //                 }, {
    //                     opacity: 1,
    //                     duration: .3,
    //                     ease: easeInOut
    //                 }
    //             );
    //             this.removeEventListener('timeupdate', listener, false);

    //         }
    //     }, false);
    // }

    video.addEventListener('ended', function listener() {
        console.log('Ended!')
        this.currentTime = 0;
        this.loop = true;
        this.play();
        this.removeEventListener('ended', listener, false);
    }, false);
    
    

    function paintVideo() {
        if (canvas) {
            canvas.width = video.videoWidth = window.innerWidth;
            canvas.height = video.videoHeight = window.innerHeight;
            canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
            if (!video.paused) {
                requestAnimationFrame(paintVideo);
            }
        }
    }

    function animLogo() {
        console.log('animation logo');

        logoAnim.set(logo, {
            opacity: 1
        });

        logoAnim.from(logo, video.duration, {
            opacity: 0,
            scale: 0.4,
            ease: easeInOut,
            delay: 1,
            rotationX: 270,
            transformOrigin: 'bottom',
            transformStyle: 'preserve-3d'
        });
    }

    function animButtons() {
        buttonsAnim.fromTo(
            buttons, {
                opacity: 0,
            }, {
                opacity: 1,
                duration: .3,
                delay: 6,
                ease: easeInOut
            }
        );
    }
    
})