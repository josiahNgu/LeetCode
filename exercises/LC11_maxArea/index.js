/*
Time complexity: O(N) - each number in the input array is visited one
Space Complexity: O(1) - just the left and right pointer
*/

function maxArea(height) {
        let leftPointer = 0;
        let rightPointer = height.length -1;
        let maxArea = 0;
while(rightPointer > leftPointer){
            let width = rightPointer-leftPointer;
            let currentHeight =height[leftPointer] < height[rightPointer] ? height[leftPointer] : height[rightPointer];
            let currentArea = width * currentHeight;
           if(currentArea > maxArea){
               maxArea = currentArea;
           } 
            if(height[leftPointer] < height[rightPointer]){
                leftPointer++;
            }else{
                rightPointer--;
            }
        }
        return maxArea;
}

module.exports = maxArea;
