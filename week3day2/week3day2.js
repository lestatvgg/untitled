
/*задание1
function go(a,b) {
    alert('a='+a+', b='+b);
}

go(1); // a=1, b=undefined
go(1,2) //a=1, b=2
go(1,2,3) // a=1, b=2

вариант2

function sum() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  alert(total);
}

sum(1,2,3,4,5,6);


 */

// function myfunc (a, b) {
//     let result = 1;
//     if (i = 0;  i > b;  i++) {
//         result +=a
//
//     }
//     return result;
// }
//
// let onetest = myfunc(0, 1)

// //задание3
// function sum (c, r) => c + r? c+r;
// function diff (a, b) => a > b ? a - b : b - a;
// function diff (a, b) => a * b ? a * b : b * a;
// function diff (a, b) => a : b ? a : b : b : a;

//задание4
function showName (гость) {
    console.log ('Здрасте гость')
}

showName('гость')
let name = ('гость')

//задание 5
const fib2 = n => {
    if(n == 0){
        return [0, 1];
    }else{
        const [prev, next] = fib2(n - 1);
        return [next, prev + next];
    }
}

const fib = n => fib2(n)[0];