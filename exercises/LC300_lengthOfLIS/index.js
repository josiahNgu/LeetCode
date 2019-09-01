/* Time Complexity: O(n^2) - we do up to N work for all N elements
   Space Complexity: O(n) - we store the answer up to N Sub problems
*/
function lengthOfLIS(nums) {
    if(nums.length ===0) return 0;
    let dpArray =new Array(nums.length).fill(1);
    let maxSoFar =1;
    for(let i =1;i<nums.length;i++){
        for(let j=0;j<i;j++){
            if(nums[i] > nums[j]){
                dpArray[i] = (Math.max(dpArray[j]+1,dpArray[i]));
            }
        }
        maxSoFar = Math.max(maxSoFar,dpArray[i]);
    }
    return maxSoFar;
}
lengthOfLIS([1,4,0,7]);
module.exports = lengthOfLIS;
