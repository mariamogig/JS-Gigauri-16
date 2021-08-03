// 1
let cars = ['audi', 'bmw', 'lexus', 'volkswagen', 'porsche', 'audi'];

for (let i=1; i < cars.length; i++) {
    console.log(cars[i]);
}
// 2
const firstNames = ['gvantsa', 'giorgi', 'mariami', 'nino', 'saba', 'ana', 'le'];

for (names of firstNames){
    if(names.length > 3) {
        console.log(names);
    }
}

for (let j = 0; j< firstNames.length; j++) {
    if(firstNames[j].length > 3) {
        console.log(firstNames[j]);
    }
}

// 3
const array = [1, 2, 3, 4, 7, 9, 10];
//kenti
for (let odd of array) {
    if (odd % 2 != 0){
        console.log(odd);
    }
}
//luwi
for (let x = 0; x < array.length; x++) {
    if (array[x] % 2 === 0) {
        console.log(array[x]);
    }
}
// 4
let numbers= [15, 67, 100, 5, 7, [80, 500] ]; 
console.log(numbers[5][1]);
// 5
var person = {
    firstname: "john",
    lastname: "doe",
    age: 50,
    eyecolor: "blue"
  };
  console.log (person.eyecolor);
// 6
var colors = ['red', 'yellow', 'blue', 'green'];
for (var i=0; i < colors.length; i++) {
    console.log(colors[i]);
}
// 7
let name = ['sandro', 'soso', 'salome', 'nene', 'nia', 'nino', 'nika'];
if (name.length == 5 && name[name.length - 1] == 'Nika') {
    console.log("მასივის რაოდენობა: 5 და ბოლო ელემენტია ნიკა");
}

if (name.length == 7 || name[0] == 'sandro') {
    console.log("მასივის რაოდენობა: 7 და პირველი ელემენტია სანდრო");
}
// 8
console.log(6 === '6');;
//dabrundeba false