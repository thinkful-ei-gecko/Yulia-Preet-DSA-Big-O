'use strict';

//Q1: Counting sheep
function countSheep(num){
  for(let i = num; i > 0; i--){
    console.log(`${i}: Another sheep jumps over the fence`);
  }
  console.log('All sheep jumped over the fence');
}
console.log(countSheep(3));