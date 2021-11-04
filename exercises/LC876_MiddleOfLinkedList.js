/*
url:https://leetcode.com/problems/middle-of-the-linked-list/
problem:Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.
solution: Use 2 pointer
Example:
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
*/

/*
HOW TO DETERMINE THE EXIT CONDITION
Since we will need access to the node before the target node in order to remove the target node, we can use fast.next == null as our exit condition, rather than fast == null, so that we stop one node earlier.

This will unfortunately cause a problem when n is the same as the length of the list, which would make the first node the target node, and thus make it impossible to find the node before the target node. If that's the case, however, we can just return head.next without needing to stitch together the two sides of the target node.


*/
var middleNode = function (head) {
  let slow = (fast = head);
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
const mySolution = (head) => {
  // take out more space
  var middleNode = function (head) {
    let size = 0;
    let current = head;
    let result = [];
    while (current.next) {
      size++;
      current = current.next;
    }
    console.log(size);
    current = head;
    let half = size % 2 === 0 ? size / 2 : Math.floor(size / 2 + 1);
    console.log(half);
    while (half > 0) {
      current = current.next;
      half--;
    }
    return current;
  };
};
