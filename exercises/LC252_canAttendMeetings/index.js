/* 
Time Complexity: N Log (N) because we use a sorting algorithm. we dont care about for loop
                because N log N is > O(N)
Space COmplexity:  O(N) we stored the value of start time and end time
*/

// Given an array of meeting time intervals consisting of start and end
// times [s1, e1], [s2, e2], ... , determine if a person could attend all meetings.
// ---------------------------
// canAttendMeetings([[0, 30], [5, 10], [15, 20]]) --> false
// canAttendMeetings([[7, 10], [2, 4]]) --> true

const canAttendMeetings = intervals => {
    let startArray =[];
    let endArray =[];
    for(let i =0; i<intervals.length;i++){
        let subarray = intervals[i];
        startArray.push(subarray[0]);
        endArray.push(subarray[1]);
    }
    startArray.sort();
    endArray.sort();
    for(let i =0; i<startArray.length;i++){
        if(startArray[i+1] > endArray[0]){
            return false;
        }
    }
    return true;
};

module.exports = canAttendMeetings;
