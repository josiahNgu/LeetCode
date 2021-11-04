/*
    url:https://leetcode.com/problems/remove-nth-node-from-end-of-list/
    problem:Given the head of a linked list, remove the nth node from the end of the list and return its head.
solution: https://leetcode.com/problems/remove-nth-node-from-end-of-list/discuss/1164542/JS-Python-Java-C%2B%2B-or-Easy-Two-Pointer-Solution-w-Explanation
   */
const mySolution = function (head, n) {
  let current = head;
  let result = head;
  let size = 0;
  while (current) {
    current = current.next;
    size++;
  }
  size = size - n - 1;
  if (size === -1) {
    return head.next;
  }
  console.log(size);
  while (head) {
    console.log("size", size, "current", head.val);
    if (size === 0) {
      console.log(head.val);
      size--;
      head.next = head.next.next;
    } else {
      size--;
      head = head.next;
    }
  }
  return result;
};
/* A one pass solution can be done using pointers. Move one pointer fast --> n+1 places forward, to maintain a gap of n between the two pointers and then move both at the same speed. Finally, when the fast pointer reaches the end, the slow pointer will be n+1 places behind - just the right spot for it to be able to skip the next node.
 */
// 2 pointer
var removeNthFromEnd = function (head, n) {
  let fast = (slow = head);
  for (let i = 0; i < n; i++) fast = fast.next;
  if (!fast) return head.next;
  while (fast.next) (fast = fast.next), (slow = slow.next);
  slow.next = slow.next.next;
  return head;
};
