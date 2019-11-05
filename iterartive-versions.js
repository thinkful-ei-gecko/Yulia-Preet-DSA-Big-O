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
    console.log('Exponent should be >= 0')
  }
  for (let i = 0; i < exponent; i++) {
    accumulator = base*accumulator;
  }
  console.log(accumulator);
}

// powerCalculator(5, 2);