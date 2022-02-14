/*11111111111111111*/
let array = [1, 5, 10, 20]
let newArray = array.map((num) => num + 20);
console.log(newArray);
/*222222222222222222*/
let first = 2;
let second = 4;
let third = 6;
/*33333333*/
let num = 1;
let result = 'zima';
if (num == 1) {
  result == 'zima'
} else if (num == 2) {
  result == 'vesna'
} else if (num == 3) {
  result == 'leto'
} else if (num == 4) {
  result == 'osen'
}
console.log(result);
/*444444444444*/
let obj = {green: 'зеленый', red: 'красный', blue: 'синий'}
for (let prop in obj) {
  console.log(prop + " = " + obj[prop]);
}
/*555555555555*/
let nick = 'Ivan';
if (nick == true) {
  console.log(`Приветствую, ${nick}!`);
} else if (nick == 'Nasiba') {
  console.log(`Привествую, Насиба!`);
} else { 
  console.log(`Я Вас не знаю`);
}