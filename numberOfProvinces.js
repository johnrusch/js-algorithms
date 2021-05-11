/*
There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.

*/


var findCircleNum = function(isConnected) {
    let rows = isConnected.length;
    let columns = isConnected[0].length;
    const visited = Array(rows).fill(0);
    let count = 0;
    
    for (let i = 0; i < rows; i++) {
        if (visited[i] === 0) {
            dfs(isConnected, visited, i, columns);
            count++;
        }
    }
    return count;
};

function dfs(grid, visitedArray, row, columns) {
    for (let j = 0; j < columns; j++) {
        if (grid[row][j] === 1 && visitedArray[j] === 0) {
            visitedArray[j] = 1;
            dfs(grid, visitedArray, j, columns);
        }
    }
}