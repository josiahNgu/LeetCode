/* Time Complexity : O(N) because we iterate thru input string just once 
   Space Complexity : O(N) In worst case, stack is same length as input string
*/
const isValid = s => {
  // simulate a stack using array
  let stack = [];
  // simulate hashtable
  let pairsHashMap = { "(": ")", "[": "]", "{": "}" };
  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];
    if (pairsHashMap[currentChar]) {
      stack.push(currentChar);
    } else if (pairsHashMap[stack.pop()] !== currentChar) {
      return false;
    }
  }
  return stack.length === 0;
};

module.exports = isValid;
