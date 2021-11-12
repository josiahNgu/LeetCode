/*
url:https://leetcode.com/problems/rotate-array/
problem: Given an array, rotate the array to the right by k steps, where k is non-negative.
challenge: modify in-place
 * @return {void} Do not return anything, modify nums in-place instead.
EX:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Solution reference: https://leetcode.com/problems/rotate-array/discuss/269948/4-solutions-in-python-(From-easy-to-hard)
*/
// Using Cyclic Replacement approach
const CyclicReplacementRotate = (nums, k) => {
    let outsideBoundary = k % nums.length;
    let count = 0;
    // we use start to track if the element has already been touch. After one full cycle, it will come back to where it started
    let start = 0;
    while (count < nums.length) {
        let current = start;
        let prev = nums[start];
        while (true) {
            const next = (current + outsideBoundary) % nums.length;
            const temp = nums[next];
            nums[next] = prev;
            prev = temp;
            current = next;
            count += 1;
            if (start === current) break;
        }
        start += 1;
    }
}

const reverseRotate = () => {
    //This approach is based on the fact that when we rotate the array k times, k%nk elements from the back end of the array come to the front and the rest of the elements from the front shift backwards.
    k = k % nums.length; // note this: k%nk elements from the back end of the array come to the front and the rest of the elements from the front shift backwards.
    console.log(k)
    // reverse the whole string first
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};
const reverse = (nums, start, end) => {
    while (start < end) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start += 1;
        end -= 1;
    }
}
