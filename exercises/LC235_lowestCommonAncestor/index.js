/**
 * This is the iterative way, Recursive way just call the function  again with root.left or root.right
Time Complexity: O(N) - worst case if we travel through all Node. It would be O(log(N))
 if it is balanced tree because we divide it by 2 every time
Space Complexity: O(1) - we always use one node  regardless of the size of BST
 */

function lowestCommonAncestor(root, p, q) {
    let currentNode = root;
    const pVal = p.val;
    const qVal = q.val;
    while (currentNode) {
        const currentVal = currentNode.val;
        if (currentVal < pVal && currentVal < qVal) {
            currentNode = currentNode.right;
        } else if (currentVal > pVal && currentVal > qVal) {
            currentNode = currentNode.left;
        } else {
            // dont know why currentVal give error
            return currentNode;
        }

    }
}

module.exports = lowestCommonAncestor;