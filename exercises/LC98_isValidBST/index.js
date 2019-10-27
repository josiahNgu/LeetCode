/* Time complexity: O(n) - we travese throught every node in tree
   Space Complexity: O(1) - if recursion call count as space complexity then its O(n)
*/
function isValidBST(root) {
    let validity = true;
    function helper(node , min, max){
        if(!node) return;
        if((min !== null && node.val <=min )|| (max !== null && node.val>=max)){
            validity= false;
            return;
        }
        helper(node.left,min,node.val)
        helper(node.right,node.val,max)

    }
    helper(root,null,null)
    return validity
}

module.exports = isValidBST;
