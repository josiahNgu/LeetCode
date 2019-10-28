/*
Time complexity : O(N) - loop through the nums array each time instead of double for loop
Space complexity: O(1) - The output array does not count as extra space for the purpose of time complexity analysis
*/
const productExceptSelf = nums => {
    let container = nums.map(n=>1);
    let product =1;
    // multiply from the left
    for(let i =0; i<nums.length;i++){
        container[i] = product;
        product = product * nums[i];
    }
    product =1;
    // multiply from the right
    for(let i =nums.length-1; i>=0;i--){
        container[i] = product * container[i];
        product = product * nums[i];
    }
    return container;
};  
module.exports = productExceptSelf;
