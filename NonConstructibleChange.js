function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b);
  if (coins.length === 0 || coins[0] !== 1) {
    return 1;
  }
  let counter = 1;

  for (let i = 1; i < coins.length; i++) {
    if (coins[i] > counter + 1) {
      return counter + 1;
    }
    if (coins[i] <= counter + 1) {
      counter = counter + coins[i];
    }
  }

  return counter + 1;
}

function nonConstructibleChange2(coins) {
  coins.sort((a, b) => a - b);
  if (coins.length === 0 || coins[0] !== 1) {
    return 1;
  }
  let counter = 2;
  let extra = 0;

  for (let i = 1; i < coins.length; i++) {
    if (coins[i] < counter || coins[i] === counter + extra) {
      extra += coins[i];
      if (extra >= counter) {
        extra = extra - counter;
        counter = counter * 2;
      }
    } else if (coins[i] === counter) {
      counter = counter * 2;
    } else {
      return counter + extra;
    }
  }
  return counter + extra;
}
