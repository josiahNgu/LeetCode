var updateMatrix = function (mat) {
    const result = new Array(mat.length);
    const visited = new Map();
    // if visited, you can just get the value from there??
    for (let i = 0; i < result.length; i++) {
        result[i] = new Array(mat[i].length).fill(0);
    }
    console.log(result);
    const bfs = (i, j) => {
        let count = 0;
        console.log(' mat[i].length :>> ', mat[i].length);
        console.log(' i :>> ', i);
        console.log(' j :>> ', j);
        if (i < 0 || j < 0 || i > mat.length - 1 || j > mat[i].length - 1) return count;
        if (mat[i][j] === 0) return count;
        console.log(' ==============mat[i][j] :>> ', mat[i][j]);
        count++;
        const top = count + bfs(i - 1, j);
        const left = count + bfs(i, j - 1);
        const bottom = count + bfs(i + 1, j);
        const right = count + bfs(i, j + 1);
        return Math.min(top, left, bottom, right);
    }
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === 0) continue;
            console.log('i :>> ', i);
            console.log('j :>> ', j);
            result[i][j] = bfs(i, j);
        }
    }
    console.log(result);
    return result;
};
updateMatrix([[0, 0, 0], [0, 1, 0], [1, 1, 1]]);