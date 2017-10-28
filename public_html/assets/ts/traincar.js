var first = true;
var infoCar = $("#car-2");
var NUM_CARS = 4;
var CHANGE_LOCK = false;
function changeTrainCar(currentCar, nextCar, direction) {
    CHANGE_LOCK = true;
    if (currentCar == infoCar) {
        $('#card-tooltip').fadeOut(1000);
    }
    var currentCarMove;
    var vertical = false;
    switch (direction) {
        case 'up':
            currentCarMove = '-100%';
            vertical = true;
            nextCar.css({
                'left': '0%',
                'top': '100%'
            });
            break;
        case 'down':
            currentCarMove = '100%';
            vertical = true;
            nextCar.css({
                'left': '0%',
                'top': '-100%'
            });
            break;
        case 'left':
            currentCarMove = '100%';
            nextCar.css({
                'left': '-100%',
                'top': '0%'
            });
            break;
        case 'right':
            currentCarMove = '-100%';
            nextCar.css({
                'left': '100%',
                'top': '0%'
            });
            break;
    }
    nextCar.addClass('traincar-active');
    if (vertical) {
        currentCar.stop().animate({
            top: currentCarMove
        }, 750);
        nextCar.stop().animate({
            top: '0'
        }, 750);
    }
    else {
        currentCar.stop().animate({
            left: currentCarMove
        }, 750);
        nextCar.stop().animate({
            left: '0'
        }, 740);
    }
    setTimeout(function () {
        currentCar.removeClass('traincar-active');
        CHANGE_LOCK = false;
    }, 750);
    if (first && nextCar == infoCar) {
        first = false;
        $('#card-tooltip').fadeIn(2000);
    }
}
function moveCar(key) {
    if (!CHANGE_LOCK) {
        if (key == 37) {
            // left
            var currentCar = $('.traincar-active').first();
            currentCar.promise().done(function () {
                var currentPosition = parseInt(this.attr('data-car-id'));
                changeTrainCar(this, $('#car-' + ((((currentPosition - 1) % NUM_CARS) + NUM_CARS) % NUM_CARS).toString()), 'left');
            });
        }
        else if (key == 39) {
            // right
            var currentCar = $('.traincar-active').first();
            currentCar.promise().done(function () {
                var currentPosition = parseInt(this.attr('data-car-id'));
                changeTrainCar(this, $('#car-' + ((((currentPosition + 1) % NUM_CARS) + NUM_CARS) % NUM_CARS).toString()), 'right');
            });
        }
    }
}
$('body').on('keydown', function (e) {
    var key = e.which || e.keyCode;
    if (key == 37 || key == 39) {
        $('#direction-tooltip').fadeOut(1000);
        moveCar(key);
    }
});
$('#navigation-left').on('click', function () {
    moveCar(37);
});
$('#navigation-right').on('click', function () {
    moveCar(39);
});
