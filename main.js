if (window.matchMedia("(min-width: 768px)").matches) {
    let mousePosX = 0,
        mousePosY = 0,
        mouseCircle = document.getElementById("mouse-circle");

    document.onmousemove = (e) => {
        mousePosX = e.pageX;
        mousePosY = e.pageY;
    };

    let delay = 1,
        revisedMousePosX = 0,
        revisedMousePosY = 0;

    function delayMouseFollow() {
        requestAnimationFrame(delayMouseFollow);

        revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
        revisedMousePosY += (mousePosY - revisedMousePosY) / delay;

        mouseCircle.style.top = revisedMousePosY + "px";
        mouseCircle.style.left = revisedMousePosX + "px";
    }
    delayMouseFollow();
}

document.getElementById('phonebtn').addEventListener('click', () => {
    audio. play(url='https://soundboardguy.com/sounds/fnaf-1-phone-call-night-1/');
})

document.getElementById('Camera_1A').addEventListener('click', function () {
    console.log("camera is working");
    document.getElementById('img1').style.display = 'flex';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('img3').style.display = 'none';
    document.getElementById('img5').style.display = 'none';
});

document.getElementById('Camera_1C').addEventListener('click', function () {
    console.log("camera is working");
    document.getElementById('img2').style.display = 'flex';
    document.getElementById('img1').style.display = 'none';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('img3').style.display = 'none';
    document.getElementById('img5').style.display = 'none';
});

document.getElementById('Camera_3').addEventListener('click', function () {
    console.log("camera is working");
    document.getElementById('img3').style.display = 'flex';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img1').style.display = 'none';
    document.getElementById('img5').style.display = 'none';
});

document.getElementById('Camera_2B').addEventListener('click', function () {
    console.log("camera is working");
    document.getElementById('img4').style.display = 'flex';
    document.getElementById('img3').style.display = 'none';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img1').style.display = 'none';
    document.getElementById('img5').style.display = 'none';
});

document.getElementById('Camera_6').addEventListener('click', function () {
    console.log("camera is working");
    document.getElementById('img5').style.display = 'flex';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('img3').style.display = 'none';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img1').style.display = 'none';
});

document.getElementById('abledcams').addEventListener('click', function (){
    console.log("abled cams is working")
});


document.getElementById('taskshoverbarOpen').addEventListener('click', function () {
    console.log("task bar is working");
    document.getElementById('taskshoverbarOpen').style.display = 'none';
    document.getElementById('taskshoverbarClose').style.display = 'flex';
    document.getElementById('phonebtn').style.display = 'none'
});

document.getElementById('taskshoverbarClose').addEventListener('click', function () {
    console.log("task bar is working");
    document.getElementById('taskshoverbarClose').style.display = 'none';
    document.getElementById('taskshoverbarOpen').style.display = 'flex';
    document.getElementById('phonebtn').style.display = 'flex'
});


