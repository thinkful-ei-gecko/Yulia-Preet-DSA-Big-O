function towerOfHanoi(numberOfDiscs, source, dest, temp) {
  if (numberOfDiscs >= 1) {
    towerOfHanoi(numberOfDiscs - 1, source, temp, dest);
    console.log('first recursive call: ' + source +  ' to ' +  dest);

    towerOfHanoi(numberOfDiscs - 1, temp, dest, source);
  }
  
  return;
}

towerOfHanoi(3, 'A', 'C', 'B');

//A - source , C - destination, B - temporary pole

// A to C, A to B, C to B, A to C, B to A, B to C, A to C