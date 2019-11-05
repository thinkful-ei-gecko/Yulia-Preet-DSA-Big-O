'use strict';

//Q1: Counting sheep
function countSheep(num){
  for(let i = num; i > 0; i--){
    console.log(`${i}: Another sheep jumps over the fence`);
  }
  console.log('All sheep jumped over the fence');
}
//console.log(countSheep(3));

//Q2: Power Calculator
function powerCalculator(base, exponent) {
  let accumulator = 1;
  if (exponent < 0) {
    console.log('Exponent should be >= 0');
  }
  for (let i = 0; i < exponent; i++) {
    accumulator = base*accumulator;
  }
  console.log(accumulator);
}

// powerCalculator(5, 2);

//Q3: Reverse string 
function reverseString(str){
  let result = '';
  for(let i = str.length - 1; i >= 0; i--){
    result += str.slice(i, i + 1);
  }
  return result; 
}
// console.log(reverseString('hello'));

//Q4: Triangular number

function triangularNumber(num) {
  let result = num;
  if (num === 1) {
    return 1;
  }
  for (let i = 1; i<num; i++) {
    result += i;
  }
  return result;
}
// console.log(triangularNumber(5));


//Q5: String splitter - to finish
function stringSplitter(str, separator){
  let result = [];
  let index = str.indexOf(separator);

  for (let i = 0; i < str.length; i++){
    //console.log(str);
    if(index !== -1){
      result.push(str.slice(0, index));
    }
    else {
      result.push(str); 
    }
    str = str.slice(index + 1);
  }
  return result; 
}
// console.log((stringSplitter('01/21/2018', '/')));

//Q6: Factorial
function factorial(num){
  let result = 1;
  for(let i = 0; i < num; i++){
    result *=(num - i);
  }
  return result;
}
//console.log(factorial(5));

//Q7 Fib

function fibonacci(num) {
  let startSeq = [0, 1];
  for ( let i = 2; i<=num; i++) {
    startSeq.push(startSeq[i-1]+startSeq[i-2]);
  }
  return startSeq;
}
console.log(fibonacci(7));