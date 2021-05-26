function getAreaSum(table, pos1, pos2) {
    let sum = 0;

    //rows
    for (let i = pos1[0]; i <= pos2[0]; i++) {

        //each cell
        for (let j = pos1[1]; j <= pos2[1]; j++) {
            sum += table[i][j]
        }
    }
    return sum;
}


const sampTable = [[1, 2, 3, 4],
 [5, 6, 7, 8],
 [9, 10, 11, 12],
 [13, 14, 15, 16]]

const position1 = [0, 1]
const position2 = [2, 3]

console.log(getAreaSum(sampTable, position1, position2));
