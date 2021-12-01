//day5 часть1

//Задание1
// const divs = document.querySelector('.container__list');
// console.log(divs)

// const conteinerlist = document.getElementsByClassName('container__list');
// console.log(conteinerlist);

//const divs1 = document.querySelector('.main__container');
// console.log(divs1)

// const mainlist = document.getElementsByClassName('main__container');
// console.log(mainlist);

//задание2
// const nameStyle = document.querySelector(".style__item");
// // console.log(nameStyle.className)
// //
// // nameStyle.className = "Offf"
// id = 'black'
// console.log (id)
// console.log(nameStyle.classList);
// nameStyle.classList.backgroundColor = 'green'

//Задание3
// const divs2 = document.querySelector('.style__item');
// console.log( divs2);
// divs2.style.width = '20px';

//задание4
// const ullist = document.querySelector ('.container__list')
// console.log(ullist.classList)
// const testarray = ullist.classList;
// testarray.forEach(text2 => {
//     console.log(text2)
// })
// const ullist = document.querySelectorAll ('.text2');
//
// for (let ullist of document.querySelectorAll('.text2')) {
//     ullist.style.background = 'grey';
//     ullist.style.fontWeight = 'bold';
// }







//Часть2
//Задание1

// let counterVal = 0;
//
// function incrementClick() {
//     updateDisplay(++counterVal);
// }
//
// function resetCounter() {
//     counterVal = 0;
//     updateDisplay(counterVal);
// }
//
// function updateDisplay(val) {
//     document.getElementById("counter-label").innerHTML = val;
// }


// let counterVal = 0;
//
// function incrementClick() {
//     updateDisplay(++counterVal);
// }
//
// function resetCounter() {
//     counterVal = 0;
//     updateDisplay(counterVal);
// }
//
// function updateDisplay(val) {
//     document.getElementById("counter-label").innerHTML = val;
// }


//задание3

// const tableNum = document.querySelectorAll('.number');
//
// tableNum.forEach(el => {
//     el.addEventListener('click', () => {
//         let currentNum = el.innerHTML;
//         el.innerHTML = currentNum ** 2;
//     });
// });





//задание4
// const table1 = document.querySelector('.table1')
// table.onclick = function(event) {
//     let td = event.target.closest('td');
//
//     if (!td) return;
//
//     if (!table.contains(td)) return;
//
//     highlight(td);
// };

//задание7
//  const button1 = document.querySelector('.delete-btn')
//
// <button class="delete-btn" onclick="deleteFunc(this)">delete button</button>
// const deleteFunc = el => {
//     let btn = el;
//     btn.remove();
// }

