$(window).scroll(function () {
    const wScroll = $(this).scrollTop();
    $('.rightSide').css('background-position', 'center ' + ((wScroll)) + 'px');


    if (wScroll > $('.skills').offset().top - ($(window).height() / 1.7)) {
        $('.rightSideSkills img').each(function (i) {
            setTimeout(function () {
                $('.rightSideSkills img').eq(i).removeClass('hideSkills');
                $('.rightSideSkills img').eq(i).addClass('showSkills');
            }, 150 * (i + 1));
        })
    }
});

$(window).ready(function () {

    setInterval(function(){
        let preload = $('.preloader');
        preload.css('opacity', 0);

        setInterval(function(){
            preload.remove(),
            parseInt(preload.css('1s')) * 1000
        });

    },1000);

    
}) 

function backToTop() {
    let button = $('.back-to-top');
    $(window).on('scroll', function(){
        if($(this).scrollTop() >= 150) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });

    button.on('click', function(e) {
        e.preventDefault();
        $('html').animate({scrollTop: 0}, 1000);
    })
}

backToTop();




