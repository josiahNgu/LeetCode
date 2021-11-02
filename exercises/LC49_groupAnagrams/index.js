/* Time Complexity : O(N K log K) where N is the # of strings, and K is length of strings
     O(N) comes from the for loop and K log K comes from the sorting algorithm
   Space Complexity: O(N K) - Data stored in our grouped hash table
*/
function groupAnagrams(strs) {
  let grouped = {};
  for (let i = 0; i < strs.length; i++) {
    const word = strs[i];
    const key = word
      .split("")
      .sort()
      .join("");

    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(word);
  }
  //  documentation of Object.values show that it will give us the value of the array back
  return Object.values(grouped);
}

module.exports = groupAnagrams;
