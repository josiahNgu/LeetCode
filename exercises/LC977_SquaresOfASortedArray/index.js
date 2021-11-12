/*
url:https://leetcode.com/problems/squares-of-a-sorted-array/
problem:given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
idea: 2 pointer. everytime you think of sorted array, start by 2 pointer

*/
const sortedSquares = (nums) => {
    // since the extreme end of each side will be largest and get smaller as it work toward the inside. we will start populating the result array from the end
    let rightPointer = index = nums.length - 1;
    const result = new Array(nums.length);
    for (index; index >= 0; index--) {
        if (Math.abs(nums[leftPointer]) > Math.abs(nums[rightPointer])) {
            result[index] = nums[leftPointer] ** 2;
            leftPointer++;
        } else {
            result[index] = nums[rightPointer] ** 2;
            rightPointer--;
        }
    }
    return result;

}

sortedSquares([-4, -1, 0, 3, 10]);