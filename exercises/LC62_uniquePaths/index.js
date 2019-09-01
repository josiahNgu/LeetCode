/*Time complexity: O(M*N) where M and N are dimensions of Matrix
  Space Complexity: O(M*N) DP Matrix Size depends on Input Matrix
*/

function uniquePaths(m, n) {
    const dpMatrix =[];
    for(let row = 1; row<=n;row++){
        dpMatrix.push([]);
    }
    //fill the first row with 1 
    for(let row =0;row<n;row++){
        dpMatrix[row][0] = 1;
    }
    //fill the first column with 1 
    for(let col=0;col<m;col++){
        dpMatrix[0][col] =1;
    }
    for(let row=1;row<n;row++){
        for(let col=1;col<m;col++){
            dpMatrix[row][col] = dpMatrix[row-1][col] + dpMatrix[row][col-1];
        }
    }
    return dpMatrix[dpMatrix.length-1][m-1];
}

module.exports = uniquePaths;
