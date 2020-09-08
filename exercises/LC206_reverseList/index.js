/*
Time Complexity: O(N) because we traverse through the whole link list
Space Complexity: O(1) because no matter how huge the link list is, we just keep track of only prev and current pointer 
*/
const reverseList = head => {
    let prev = null;
    let current = head;
    while(current){
        let temp = current.next;
        // change the direction to point to previous instead of next
        current.next = prev;
        // increment prev to current node
        prev = current;
        // current = current.next
        current = temp;
    }
    // since the current will be null or next to the new head, we need to return prev for the new head
    return prev;
};

module.exports = reverseList;
