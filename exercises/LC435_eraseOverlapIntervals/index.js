/* different from udemy answer . Have problems with leetcode
Time Complexity: O(N log N) - we have sorting algorithm
Space Complexity: O(N)

*/
const eraseOverlapIntervals = intervals => {
    if (intervals.length === 0) return 0;
    let sortedArray = intervals.sort();
    let counter = 0;
    // to save space
    let end = sortedArray[0][1];
    for (let i = 0; i < sortedArray.length - 1; i++) {
        if (sortedArray[i][1] > sortedArray[i + 1][0]) {
            sortedArray.splice(i, 1);
            console.log('sortedArray[i] :', sortedArray);
            counter++;
        }
    }
    return counter;
};

module.exports = eraseOverlapIntervals;