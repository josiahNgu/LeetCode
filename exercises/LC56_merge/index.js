/* Time complexity: O(N log N) - we uses a Sorting Algoritbhm
   Space Complexity : O(1) - We sort the Input Array in place
*/
const merge = intervals => {
    if(intervals.length ===0) return intervals;
    intervals.sort((a,b)=>{
        a[0]-b[0]
    })
    const res = [intervals[0]];
    for(let i =0; i<intervals.length;i++){
        const currentInterval = intervals[i];
        const lastInterval = res[res.length-1];
        if(currentInterval[0] <=lastInterval[1]){
            lastInterval[1] = Math.max(currentInterval[1],lastInterval[1])
        }else{
            res.push(currentInterval)
        }
    }
    return res;
};

module.exports = merge;
