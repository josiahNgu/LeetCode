/**
 * 
 * @description: if our tail node lead to null we return false, or else if it circle back to other node, we return true
 * whether if the linked list is circular
 * Circular Linked List is a variation of Linked list in which the first element points to the last element and 
 * the last element points to the first element.
 * Time complexity: O(N) - because we traverse through the whole linked list
 * Space Complexith: O(1) - because we keep track of the slow and fast variable
 */
function hasCycle(head) {
    let slow,fast;
    slow = fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) return true;
    }
    return false;
}

module.exports = hasCycle;
