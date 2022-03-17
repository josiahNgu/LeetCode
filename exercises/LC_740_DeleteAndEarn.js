/*
You are given an integer array nums. You want to maximize the number of points you get by performing the following operation any number of times:

Pick any nums[i] and delete it to earn nums[i] points. Afterwards, you must delete every element equal to nums[i] - 1 and every element equal to nums[i] + 1.
Return the maximum number of points you can earn by applying the above operation some number of times.

 

Example 1:

Input: nums = [3,4,2]
Output: 6
Explanation: You can perform the following operations:
- Delete 4 to earn 4 points. Consequently, 3 is also deleted. nums = [2].
- Delete 2 to earn 2 points. nums = [].
You earn a total of 6 points.
Example 2:

Input: nums = [2,2,3,3,3,4]
Output: 9
Explanation: You can perform the following operations:
- Delete a 3 to earn 3 points. All 2's and 4's are also deleted. nums = [3,3].
- Delete a 3 again to earn 3 points. nums = [3].
- Delete a 3 once more to earn 3 points. nums = [].
You earn a total of 9 points.
DP problem
*/
/**
 * @param {number[]} nums - test
 * @return {number}
 */
 var deleteAndEarn = function(nums) {
    //  pionts - combined and group the same num and count it 
    const points = new Map();
    const cache = new Map();
    const maxPoints = (num)=>{
        if(num === 0 )return 0;
        if(num === 1)return points.get(1) || 0;
        if(cache.get(num)) return cache.get(num);
        let gain = points.get(num) || 0;
        cache.set(num,Math.max(gain + maxPoints(num - 2),maxPoints(num - 1)));
        console.log('cache.get(num)', cache.get(num))
        return cache.get(num);
        }
    let maxNumber = 0;
    for(const num of nums){
        points.set(num,(points.get(num)|| 0) + num );
        console.log('points.get(num)', points.get(num))
        maxNumber = Math.max(maxNumber,num);
    }
    // we use maxNumber because that will tell use the max solution we can take while for each intermediate subset
    // we are picking the max number which in term will be solution
    return maxPoints(maxNumber);
};

/* 
 * 3 easy steps - using top down
 * -------------
 * 1) some sort of memory that store the answer to our question.
 * 2) recurence relation
 * declare a function maxPoints(num) to return max points that we can gain if we only consider all the elments in mus with value between
 * 0 and num
 * 2 choices to make, 
 *  - if we take x, then we gain points equal to x times the number of time x occurs in nums - pre-compute this value = gain
 * because of the rule of deletiion, the next largest nubmber can be x-2
 * Therefore the recursion is gain + maxPoints(x-2);
 * - If we don't take x, we don't gain any points here, but we can still accumulated some points from number smaller than x.
 * Because if we did not take x , we can use x- 1. In this case, we can have maxPoints(x-1)
 * The recursion = maxPoints(x) = max(maxPoints(x-1),gain + maxPoints(x-2)) where gain is the number of point we get from taking x
 * 3) DP base case
 *  - maxPoints(0) = 0;
 * - if we are considering maxPoints(1). that mean we only consider about 0 and 1 . we do not care about 2. look at how we define the recursion
 * , we know that if we arrived at 1, it means that we must not have taken 2
 * nd because 1 times any quantity will be greater than or equal to the number of points we can get from taking 0, 
 * we should always take 1 (if there are any).
 * maxPoints(1) = gain;
 * With these base cases, we can find maxPoints(2). With maxPoints(2) calculated, we can find maxPoints(3), 
 * all the way up to maxPoints(max(nums)). Remember, we defined maxPoints(x) as the maximum points we can gain
 *  when we consider the numbers from 0 to x, so maxPoints(max(nums)) covers the entire input,
 *  and stores the answer to the original problem.
 * Because each call to maxPoints will create 2 extra calls
 *  (the recurrence relation looks for maxPoints(num - 1) and maxPoints(num - 2)),
 *  we would end up with an exponential amount of function calls.
 *  To avoid this, we will MEMOIZE our function. When we find the answer for a certain number for the first time,
 *  we will store this answer. Then in the future, we can refer to this value instead of repeating computation
 */
/**
 * Given NN as the length of nums and kk as the maximum element in nums,

Time complexity: O(N + k)O(N+k)

To populate points, we need to iterate through nums once,
 which costs O(N)time. Then, we call maxPoints(maxNumber). 
 This call will repeatedly call maxPoints until we get down to our base cases.
  Because of cache, already solved sub-problems will only cost O(1) time.
   Since maxNumber = k, we will solve k unique sub-problems so, this recursion will cost O(k) time. 
   Our final time complexity is O(N + k).

Space complexity: O(N + k)

The extra space we use is the hash table points, the recursion call stack needed to find maxPoints(maxNumber), 
and the hash table cache.
The size of points is equal to the number of unique elements in nums.
 In the worst case, where every element in nums is unique, this will take O(N)O(N) space.
  The recursion call stack will also grow up to size k, since we start our recursion at maxNumber,
   and we don't start returning values until our base cases at 0 and 1. 
   Lastly, cache will store the answer for all states, from 2 to maxNumber, 
   which means it also grows up to k size. 
   Our final space complexity is O(N + 2 \cdot k)O(N+2⋅k) = O(N + k)O(N+k).
 */
const input = [3,4,2];
console.log(deleteAndEarn(input));