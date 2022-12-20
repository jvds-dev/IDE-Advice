var $target = $('.animate'),
    animationClass = '.animate-start';

function animateScroll() {
    var documentTop = $(document).scrollTop();

    $target.each(function() {
        var itemTop = $(this).offset().top;
        if(documentTop > itemTop) {
            $(this).addClass(animationClass);
        } else {
            $(this).removeClass(animationClass);
        }
    })
}

animateScroll();