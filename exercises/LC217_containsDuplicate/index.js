/**
 * time complexity: O(N) - loop through each item in nums
 * space complexity: O(N) - # of keys in the hash table
 * look up time of object is O(1), while array is O(N) 
 */
const containsDuplicate = nums => {
    let container ={}
    for(let i =0; i<nums.length;i++){
        if(container[nums[i]] === true){
            return true;
        }
        else{
            container[nums[i]] = true ;
        }
    }
    return false;
};

module.exports = containsDuplicate;
