
let NUM_CARS = $(".traincar-car").length;
let CHANGE_LOCK = false;

function changeTrainCar(currentCar: any, nextCar: any, direction: String, speed: number = 750): void{
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
        }, speed);

        nextCar.stop().animate({
            top: '0'
        }, speed);
    } else {
        currentCar.stop().animate({
            left: currentCarMove
        }, speed);

        nextCar.stop().animate({
            left: '0'
        }, speed);
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
    } else if(key == 32){
        moveCar(39);
    }
});

$('#navigation-left').on('click', function () {
    moveCar(37);
});

$('#navigation-right').on('click', function () {
    moveCar(39);
});

function changeToSpecificCar(id: number){
    if(!CHANGE_LOCK) {

        let currentCar = $('.traincar-active').first();

        currentCar.promise().done(function (this) {
            let currentPosition = parseInt(this.attr('data-car-id'));
            if (currentPosition != id) {
                let direction = 'right';
                if(currentPosition > id){
                    direction = 'left';
                }
                changeTrainCar(this, $('#car-' + id.toString()), direction, 0)
            }

            $('#dropdown').removeClass('fa-angle-up').addClass('fa-angle-down');
            $('.dropdownNav').addClass("hidden");
            $('.hidable').removeClass("hidden");
        });


    }
}

$('.navItem').on('click', function (this) {
    changeToSpecificCar(parseInt($(this).attr('data-car-id')));
});

$('#dropdown').on('click', function () {
    if($(this).hasClass('fa-angle-down')){
        $(this).removeClass('fa-angle-down').addClass('fa-angle-up');
        $('.hidable').addClass("hidden");
        $('.dropdownNav').removeClass("hidden");
    } else {
        $(this).removeClass('fa-angle-up').addClass('fa-angle-down');
        $('.dropdownNav').addClass("hidden");
        $('.hidable').removeClass("hidden");
    }
});

function checkWidth(){
    let width = $(window).width();
    if(width > 991){
        $('.left').removeClass("text-center");
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




let xDown = null;
function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
}

function handleTouchMove(evt) {
    if (!xDown) {
        return;
    }


    let xDiff = xDown - evt.touches[0].clientX;
    console.log(xDiff);
    if (xDiff > 5) {
        moveCar(39);
    } else if (xDiff < -5){
        moveCar(37);
    }
    xDown = null;
}


document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);