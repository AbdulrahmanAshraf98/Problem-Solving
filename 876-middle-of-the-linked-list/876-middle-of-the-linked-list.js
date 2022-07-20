/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let currrentNode=head;
    let linkedListLength=0;
    let counter=0;
    while(currrentNode){
        currrentNode=currrentNode.next
      linkedListLength++;  
    }
    let middleIndex=Math.ceil(linkedListLength/2);
    const breakLoop=linkedListLength%2===1?middleIndex-1:middleIndex
     currrentNode=head;
    while(counter<breakLoop){
        currrentNode= currrentNode.next;
        counter++;
    }
     
    return currrentNode
  
};