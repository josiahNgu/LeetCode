/*
title: 501. Find Mode in Binary Search Tree
link: https://leetcode.com/problems/find-mode-in-binary-search-tree/
Description: Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it.

If the tree has more than one mode, return them in any order.

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.
*/

const input = [1, null, 2, 2];
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const findNodeInBinaryTree = (root) => {
  // for each item in arrya, run through the TreeNode func

  //-----------------------MY SOLUTION ----------------------
  let max = 0;
  const result = [];
  const dict = {};
  const helper = (node) => {
    console.log(node.val);
    // base case
    if (!node) return;
    if (!dict[node.val]) dict[node.val] = 1;
    else {
      dict[node.val] = dict[node.val] + 1;
    }
    // console.log( dict[node.val])
    // check current max with dict[node.val]
    max = Math.max(dict[node.val], max);
    if (node.left) helper(node.left);
    if (node.right) helper(node.right);
    return;
  };
  helper(root);
  for (const key in dict) {
    console.log("key", key, dict[key]);
    if (dict[key] === max) result.push(key);
  }
  return result;
};

//-----------------------PROPER O(1) SOLUTION ----------------------
/*https://leetcode.com/problems/find-mode-in-binary-search-tree/discuss/98101/Proper-O(1)-space
I think the way to do it properly is to do two passes. One to find the highest number of occurrences of any value, and then a second pass to collect all values occurring that often.

Both passes keep track of the current value etc, and the second pass additionally collects the modes in the result array

Morris traversal - Only morris traversal you can disregard the recursion stack space in order to claim O(1) extra space usage


*/

var findMode = function (root) {
  let modes = [];
  let max = 0;
  let currentValue;
  let currentCount = 0;
  let modeCount;

  const findValue = (root) => {
    if (!root) return;
    if (currentValue !== root.val) {
      currentValue = root.val;
      currentCount = 0;
    }
    currentCount++;
    if (currentCount > max) {
      max = currentCount;
      modeCount = 1;
    } else if (currentCount === max) {
      // this work because we dont reset maxCount from first iteration
      if (modes.length > 0) {
        modes[modeCount] = currentValue;
      }
      modeCount++;
    }
  };
  const inorder = (root) => {
    if (!root) return;
    inorder(root.left);
    findValue(root);
    inorder(root.right);
  };

  inorder(root);
  modes = new Array(modeCount);
  modeCount = 0;
  currentCount = 0;
  inorder(root);
  return modes;
};
