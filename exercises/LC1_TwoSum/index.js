// Given an array of integers, return an array of indices of the two numbers
// that add up to the target.
// You may assume that each input would have exactly one solution, and
// you may not use the same element twice.
// --- Examples
// twoSum([2,7,11,15], 9) --> [0,1]
// twoSum([3,2,4], 9) --> [1,2]
// Time complexity: O(N) - we only go over the nums array once. Each lookup in hashtable is only O(1)
// Space complexity: O(N) - we store the key values pair in the hash table. At most store n elements

var twoSum = function(nums, target) {
    let container = {};
  let result =[];
  for(let i =0; i<nums.length;i++){
      const complement = target - nums[i];
      if(container[complement] !== undefined){
       result[0] = container[complement];
       result[1] = i;
      }
      container[nums[i]] =i;
  }
  return result;
}



module.exports = twoSum;
