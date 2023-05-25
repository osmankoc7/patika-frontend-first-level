let name = prompt("Adınız nedir?");
let info = document.querySelector("#myName").innerHTML=`${name}`;
let clock = document.querySelector("#myClock");

let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
showTime();

function showTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let day = date.getDay();
    m = correctTime(m);
    s = correctTime(s);

    let time = `${h}:${m}:${s} ${days[day]}`;

    clock.innerHTML = time;

    setTimeout(showTime, 1000);
}

function correctTime(i){
    if (i<10)
        i = "0" + i;
    return i;
}
