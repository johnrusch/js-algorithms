function findRepeat(numbers) {
    if (numbers.length < 2) {
        throw new Error('need at least 2 numbers')
    }

    //finds triangular series without duplicate number
    const n = numbers.length - 1;

    //finds total sum of triangular series w/o duplicate 
    const sumWithoutDuplicate = (n * n + n) / 2;

    //find actual sum of array of numbers
    const actualSum = numbers.reduce((acc, cur) => acc + cur, 0);

    //by subtracting the triangular series total sum from the actual sum of our array we can find the number that's been duplicated in the array
    return actualSum - sumWithoutDuplicate;
}