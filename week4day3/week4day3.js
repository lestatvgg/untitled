// const clock = document.getElementById('clock');
//
// function hexoClock () {
//     let time = new Date();
//     let h = (time.getHours() % 12).toString();
//     let m = time.getMinutes().toString();
//
//     if (h.length < 2) {
//         h = '0' + h;
//     }
//
//     if (m.length < 2) {
//         m = '0' + m;
//     }
//
//     let clockString = h + ":" + m ;
//
//     clock.textContent = clockString;
// }
// hexoClock();
// setInterval(hexoClock, 1000);

//задание2
// const clock1 = document.getElementById('clock1');
// function hexo () {
//     let d = new Date();
//     let h = d.getHours();
//     let m = d.getMinutes();
//     let s = d.getSeconds();
//     let clockSecond  = (24*60*60) - (h*60*60) - (m*60) - s;
// }
// hexo ();
// setInterval(hexo,1000);

let date = new Date('Nov 1 2021 00:00:00')

function counts () {
    let now = new Date();
    gap = date - now;
    console.log(gap);

    let days = Math.floor(gap / 1000 / 60 / 60 /24);
    let hours = Math.floor(gap / 1000 / 60 / 60 ) % 24;
    let minutes = Math.floor(gap / 1000 / 60 ) % 60;
    let seconds = Math.floor(gap / 1000 ) % 60;
    console.log (days)

    document.getElementById('d').innerText = days;
    document.getElementById('h').innerText = hours;
    document.getElementById('m').innerText = minutes;
    document.getElementById('s').innerText = seconds;

}
counts ();
setInterval(counts, 1000)