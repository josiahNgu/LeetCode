/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    const max = maxIndex(nums);
    console.log(max);
    // since for the else case, we aredoing max+ 1 that's why 
    // we check for equal here
    // this if case will check if its rotated else we just do regular binary search
    console.log(nums[0] > nums[nums.length - 1])
    if (nums[0] > nums[nums.length - 1]) {
        if (nums[0] <= target && target <= nums[max]) {
            return binarySeach(nums, target, 0, max);
        } else {
            console.log(`should be in here`)
            return binarySearch(nums, target, max + 1, nums.length - 1);
        }
    } else {
        return binarySearch(nums, target, 0, nums.length - 1);
    }
};
const maxIndex = (nums) => {
    let max = 0;
    let right = nums.length - 1;
    while (max < right) {
        const mid = Math.floor(right + max / 2);
        if (nums[mid] < nums[max]) {
            // this will eventually terminate the while loop as the value get 
            // change. This is how we will find the max
            right = mid - 1;
        } else if (nums[mid] > nums[max]) {
            max = mid;
        } else {
            return max;
        }
    }
    return max;
}

const binarySearch = (nums, target, left, right) => {
    if (left <= right) {
        const mid = Math.floor((right + (right -left ))/ 2);
        if (nums[mid] < target) {
            return binarySearch(nums, target, mid + 1, right);
        } else if (nums[mid] > target) {
            return binarySearch(nums, target, left, mid - 1);
        } else {
            return mid;
        }
    } else {
        return -1;
    }

}

console.log(search(
    [4, 5, 6, 7, 0, 1, 2],
    0
))