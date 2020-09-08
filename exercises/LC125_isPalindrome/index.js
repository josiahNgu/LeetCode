/* Time complexity: O(N) 
   Space Complexity: ? O(1)
   look at leetcode for using left and right pointer
*/
function isPalindrome(s) {
  var inputString = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  for (let i = 0; i < inputString.length / 2; i++) {
    if (inputString[i] !== inputString[inputString.length - 1 - i]) {
      console.log("false");
      return false;
    }
  }
}
isPalindrome("Aabba");
module.exports = isPalindrome;
