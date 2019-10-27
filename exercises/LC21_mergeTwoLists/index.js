/**
 * 
 * Time complexity ; O(N + M ) - where N and M are lengths of Linked List
 * Space complexity : O(1) - we always used 3 nodes regardless of size
 */
function mergeTwoLists(l1, l2) {
    const dummyHead = {next:null};
    let current = dummyHead;
    while(l1 && l2 ){
        if(l1.val>l2.val){
            current.next = l2;
            current = current.next;
            l2 = l2.next;
        }else{
            current.next = l1;
            current = current.next;
            l1 = l1.next;
        }
    }
    // point to the unexhausted list
    current.next = l1 || l2;
    return dummyHead.next;
}

module.exports = mergeTwoLists;
