//My way
function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b);
  let sum = 0;
  let adder = 0;
  for (let i = 0; i < queries.length - 1; i++) {
    adder += queries[i];
    sum += adder;
  }
  return sum;
}

//Their way
function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b);

  let sum = 0;
  for (let i = 0; i < queries.length; i++) {
    const waitingTime = queries[i];
    const queriesLeft = queries.length - (i + 1);
    sum += waitingTime * queriesLeft;
  }
  return sum;
}
