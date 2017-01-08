(function () {
    var scope = this;

    this.initMainSlider = function () {
        $('.main-slider').carousel({
            interval: false,
            pause: null
        });
    };
    this.placeCaption = function () {
        let position = $('.slider__controls').position();
        let top = position.top - $('.slider__controls').outerHeight()/2;
        $('.slider__caption').css({
            top: top
        })
    };


    $(document).ready(function () {
        scope.initMainSlider();
        scope.placeCaption();
    });
})();