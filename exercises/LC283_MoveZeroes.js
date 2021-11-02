/*
URL: https://leetcode.com/problems/move-zeroes/
problem statement: Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * @idea our idea is that we first loop and set the number at the front with non zeroes while maintaining order and fill remaining array with zeroes
 */
var moveZeroes = function (nums) {
  let position = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[position] = nums[i];
      position++;
    }
  }
  while (position !== nums.length) {
    nums[position] = 0;
    position++;
  }
};
