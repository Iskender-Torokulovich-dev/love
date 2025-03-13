//1. Вам дана переменная a. Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.
  let a = 10
  if(a === 5|| a === 10 ){
  console.log('Верно');
}else{
    console.log('Неверно');
}

let num1 = 5
let num2 = 8
if(num1 > num2)
{function task3(a){
 if(a > 0){
  return "positive"
 }else if(a === 0){
  return "равно"
 }else{
  return 'negative'
 }
}
console.log(task3(-2));
      console.log(num1);
}else if(num1 > num2){
      console.log(num2);
}else{
      console.error("Error...");
}


const num4 = 5
let num5 = 9
if(num4 > num5){
  function task11(a){
    if(a > 0){
      return "positive"
    }else if(a === 0){
      return "ravno"
    }else{
      return "negative"
    }
  }
  console.log(task11(-2));
     console.log(num4);
}else if(num4 > num5){
  console.log(num5);
}else{
  console.error("Error...");
}


function task3( a){
  return a > 0 ?'positive' : a === 0 ?'равно' :  'negative' 
}
console.log(task3(-2));


function task4(number){
 return number % 2 === 0 ? "Четное число" : "Нечетное число"
}
console.log(task4(45));

function task5(a,b){
  return a % b === 0 ? "Четное число" : "Нечетное число"
}
console.log(task5(10,2));

function task5(a,b){
if(a % b === 0){
  return "Четное число"
}else{
  return "Нечетное число"
}
}console.log(task5(10,2));


 function task6(s){
    return typeof s
 }
 console.log(task6(true));
 console.log(task6('true'));
 console.log(task6(23));
 console.log(task6(null));


function task7(a){
if(a > 1 && a < 9){
  return 'Верно'
}else{
  return'НеВерно'
}
}
console.log(task7(3));
