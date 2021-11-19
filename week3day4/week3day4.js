//задание1
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
// }
//
// function name(obj)  {
//     for (let [key, value] of Object.entries(obj)) {
//         console.log(`${key}: ${value}`);
//     }
// }
// name(obj);
// const user = {a: 1, b: 2, c: 3}
// console.log(Object.keys(user));
//
//
// let user1 = {a: 1, b: 2, c: 3};
// for (let value of Object.values(user1)) {
//     console.log(value);
// }

//задание2
// let user1 = {a: 1, b: 2, c: 3};
// for (let value of Object.values(user1)) {
//     alert(value);
// }

//Задание3
// let map = new Map();
//
// map.set("1", "str1");
// map.set(1, "num1");
// map.set(true, "bool1")

// let recipeMap = new Map([
//     ["огурец", 500],
//     ["помидор", 350],
//     ["лук",    50]
// ]);
// for (let vegetable of recipeMap.keys()) {
//     alert(vegetable);
// }
//
// for (let amount of recipeMap.values()) {
//     console.log(amount);
// }
// for (let entry of recipeMap.entries()) {
//     console.log(entry);
// // }
//
// //задание4
// let carMap = new Map ( [['honda', 200], ['Audi', 1000], ['Gaz',100]] )
// for (let cars of carMap.entries()) {
//     console.log(cars);
// }
//
// //или
//
// const map = new Map([["surname", "Chidume"],["firstname","Nnamdi"]])
// for(const a of map) {
//     log(a)
// }
// //  It logs:
// // ["surname", "Chidume"]
// // ["firstname","Nnamdi"]
// for(const [key, value] of map) {
// //     log(`key: ${key}, value: ${value}`)
// }
// It logs:
// key: surname, value: Chidume
// key: firstname, value: Nnamdi

//задание5
//
// let mySet = new Set();
//
// mySet.add(1)
// mySet.add(2)
// mySet.add(3)
//
// console.log(mySet)

//Задание6
// let mySet = new Set ([1, 2, 3]);
// console.log(mySet.has(4))
// console.log(mySet.has(3))

// //задание7
//
// const groups = {
//     group1: { header: 9, trigger: [10,11] },
//     group2: { header: 15, trigger: [11, 17] }
// }
//
// const addGroupTrigger = (triggersSet, [, group]) => {
//     for (const trigger of group.trigger) {
//         triggersSet.add(trigger)
//     }
//     return triggersSet
// }
//
// console.log(
//     Array.from(Object.entries(groups).reduce(addGroupTrigger, new Set()))
// )

//задание8

let myMap = new Map ([['понедельник', 'monday'] , ['вторник' , 'tuesday'],  ['среда', 'wednesday']]);

 for (let entry of myMap.values()) {
    console.log(entry);
 }
