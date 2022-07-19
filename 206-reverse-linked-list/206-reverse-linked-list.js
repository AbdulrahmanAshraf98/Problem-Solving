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
var reverseList = function(head) {
    let currentNode=head;
    let nextNode;
    let prevsNode=null;
    while(currentNode){
        nextNode=currentNode.next;
        currentNode.next=prevsNode;
        prevsNode=currentNode;
        currentNode=nextNode;
    }
  return prevsNode
};