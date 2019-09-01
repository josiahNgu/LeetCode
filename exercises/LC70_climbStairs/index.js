/*Draw out a list and we can see that there is a fibonacci sequance pattern.
    It make sense because for example at step 4, we just havve to add 1 step from all
    the possible ways of step 3 to reach 4, and add two steps to each of the ways from step 2.
*/
/*Time complexity - for the udemy solution
    time:O(n) - code loop n times- answer for both solution
    space:O(n)- array of size N is used - for udemmy solution
    space: O(1) - for my solution

*/
const climbStairs = n => {
    if(n<=3){
        return n;
    }
    else{
        let i=2;
        let j=3;
        let index =3;
        while(index<n){
            result = i+j;
            i=j;
            j=result
            index++;
        }
        return result;
    }
    
};
// or cleaner solution
/*
if(n<=3) return n;
let ways = [0,1,2,3];
for(let i =4;i<=n;i++){
    ways.push[ways[i-1] + ways(i-2]);

}
return ways.pop()
*/

module.exports = climbStairs;
