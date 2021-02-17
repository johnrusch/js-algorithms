function findDuplicate(intArray) {
  const n = intArray.length - 1;

  //1. get into cycle
  //setting the position to the last node
  let positionInCycle = n + 1;
  //going through intArray 'n' times updating
  //positionInCycle along the way
  for (let i = 0; i < n; i++) {
    positionInCycle = intArray[positionInCycle - 1];
  }

  //2. find length of cycle
  const rememberedPositionInCycle = positionInCycle;
  let currentPositionInCycle = intArray[positionInCycle - 1];
  let cycleStepCount = 1;

  while (currentPositionInCycle !== rememberedPositionInCycle) {
    currentPositionInCycle = intArray[currentPositionInCycle - 1];
    cycleStepCount += 1;
  }

  // STEP 3: FIND THE FIRST NODE OF THE CYCLE
  // Start two pointers
  //   (1) at position n+1
  //   (2) ahead of position n+1 as many steps as the cycle's length
  let pointerStart = n + 1;
  let pointerAhead = n + 1;
  for (let i = 0; i < cycleStepCount; i++) {
    pointerAhead = intArray[pointerAhead - 1];
  }

  // Advance until the pointers are in the same position
  // which is the first node in the cycle
  while (pointerStart !== pointerAhead) {
    pointerStart = intArray[pointerStart - 1];
    pointerAhead = intArray[pointerAhead - 1];
  }

  // Since there are multiple values pointing to the first node
  // in the cycle, its position is a duplicate in our array
  return pointerStart;
}
