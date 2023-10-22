
function getSecondsSinceStartOfDay() {
    return (
    new Date().getSeconds() +
    new Date().getMinutes() * 60 +
    new Date().getHours() * 3600
    );
}

//  In the case for our clock we want it to update every 1000 milliseconds
const addZero = (ele) => (ele < 10 ? `0${ele}` : ele);

let x = 0;
let audio = new Audio("./clock-ticking-4.mp3");
setInterval(function () {

    audio.play();
    var time = getSecondsSinceStartOfDay();
    // console.log(time);

    document.getElementById("seconds").style.transform = `rotate(${x}deg)`;
    document.getElementById("minutes").style.transform = `rotate(${Math.floor(
    ((time % 3600) / 60) * 6
    )}deg)`;
    document.getElementById("hour").style.transform = `rotate(${
    Math.floor(((time / 3600 + 11) % 12) + 1) * 30
    }deg)`;

    document.querySelector(".hours").innerText = addZero(Math.floor(time / 3600));
    document.querySelector(".mnts").innerText = addZero(
    Math.floor((time % 3600) / 60)
    );
    document.querySelector(".secs").innerText = addZero(
    Math.floor((time % 3600) % 60)
    );

    x += 10;
}, 1000);