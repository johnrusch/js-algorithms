function sortedSquaredArray(array) {
    // Write your code here.
      const squaredArray = [];
      let i = 0;
      let j = array.length - 1;
      while (i <= j) {
          let leftValue = Math.abs(array[i]);
          let rightValue = Math.abs(array[j]);
          if (leftValue >= rightValue) {
              squaredArray.unshift(leftValue * leftValue);
              i++;
          } else {
              squaredArray.unshift(rightValue * rightValue);
              j--;
          }
      }
    return squaredArray;
  }