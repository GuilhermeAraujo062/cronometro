const start = document.querySelector("#istart");
const pause = document.querySelector("#ipause");
const reset = document.querySelector("#ireset");

var hor = 0;
var min = 0;
var seg = 0;

var coun;

function twoDigits(digit){
    if(digit < 10){
        return('0'+digit);
    } else {
        return(digit);
    }
}

start.addEventListener("click", function(){
    let p = document.querySelector("#ipause");
    p.style.display = 'block';

    let s = document.querySelector("#istart");
    s.style.display = 'none';

    coun = setInterval(watch, 1000);
});

pause.addEventListener("click", function(){
    let p = document.querySelector("#ipause");
    p.style.display = 'none';

    let s = document.querySelector("#istart");
    s.style.display = 'block';

    clearInterval(coun);
});

reset.addEventListener("click", function(){
    let p = document.querySelector("#ipause");
    p.style.display = 'none';

    let s = document.querySelector("#istart");
    s.style.display = 'block';

    clearInterval(coun);

    min = 0;
    seg = 0;

    document.querySelector("#watch").innerText = "00:00:00";
});

function watch(){
    seg++

    if (seg==60){
        min++;
        seg = 0;
    }

    if (min==60){
        hor++;
        min = 0;
    }

    if (hor==24){
        seg++;
        hor = 0;
    }

    document.querySelector("#watch").innerText = twoDigits(hor) + ':' + twoDigits(min) + ':' + twoDigits(seg);
}