
let NUM_CARS = 2;
let CHANGE_LOCK = false;

function changeTrainCar(currentCar: any, nextCar: any, direction: String): void{
    CHANGE_LOCK = true;

    let currentCarMove: String;
    let vertical = false;

    switch(direction){
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
    if(vertical) {
        currentCar.stop().animate({
            top: currentCarMove
        }, 750);

        nextCar.stop().animate({
            top: '0'
        }, 750);
    } else {
        currentCar.stop().animate({
            left: currentCarMove
        }, 750);

        nextCar.stop().animate({
            left: '0'
        }, 740);
    }
    setTimeout(function () {
        currentCar.removeClass('traincar-active');
        CHANGE_LOCK = false
    }, 750);

}

function moveCar(key: number){
    if(!CHANGE_LOCK) {
        if (key == 37) {
            // left
            let currentCar = $('.traincar-active').first();
            currentCar.promise().done(function (this) {
                let currentPosition = parseInt(this.attr('data-car-id'));
                changeTrainCar(this, $('#car-' + ((((currentPosition - 1) % NUM_CARS) + NUM_CARS) % NUM_CARS).toString()), 'left');
            });

        } else if (key == 39) {
            // right
            let currentCar = $('.traincar-active').first();
            currentCar.promise().done(function (this) {
                let currentPosition = parseInt(this.attr('data-car-id'));
                changeTrainCar(this, $('#car-' + ((((currentPosition + 1) % NUM_CARS) + NUM_CARS) % NUM_CARS).toString()), 'right');
            });
        }
    }
}

$('body').on('keydown', function (e) {
    let key = e.which || e.keyCode;
    if(key == 37 || key == 39){
        moveCar(key);
    }
});

$('#navigation-left').on('click', function () {
    moveCar(37);
});

$('#navigation-right').on('click', function () {
    moveCar(39);
});

function checkWidth(){
    let width = $(this).width();
    if(width > 758){
        $('.left').removeClass("text-center");
        $('.right').removeClass("text-center").addClass("text-right");
    } else{
        $('.left').addClass("text-center");
        $('.right').removeClass("text-right").addClass("text-center");
    }
}


$(function jQueryResize (){
    $(window).resize(function(){
        checkWidth();
    });
});

$(function () {
    checkWidth();
});