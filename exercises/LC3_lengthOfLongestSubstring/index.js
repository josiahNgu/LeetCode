// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"
/* Time Complexity: O(n) - Each character the string need to visit
   Space Complexity: O(min(m,n)) - The number in the map is bound by the size of the string n or 
   size of charset/alphabet m
*/
lengthOfLongestSubstring("acbaabcdsb");
function lengthOfLongestSubstring(s) {
  // you can also use javscript object instead of Map
  let charMap = new Map();
  let startIndex = 0;
  let max = 1;
  for (let i = 0; i < s.length; i++) {
    const endChar = s[i]; // current index of char
    // if current character has not been found in the sliding window.
    // make sure the window has unique character only
    console.log("startIndex :", startIndex);
    console.log("charMap :", charMap.get(endChar));
    if (charMap.get(endChar) >= startIndex) {
      startIndex = charMap.get(endChar) + 1;
      console.log("startIndex :", startIndex);
    }
    charMap.set(endChar, i);
    max = Math.max(max, i - startIndex + 1);
  }
  console.log("max :", max);
  return max;
}

module.exports = lengthOfLongestSubstring;
