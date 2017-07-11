/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let sum = l1.val + l2.val
    let nodeVal = sum.split('') // get last item - it's a sum
    let rem = sum.split('') // get everything but last - it's a rem
    // let newNode = new ListNode(l1.val + l2.val);
    console.log('outside ', l1.val + l2.val)
    while(l1.next) {
        l1 = l1.next;
        l2 = l2.next;

        // sum.next = new ListNode();
        // console.log('inside while ', +(l1.val + l2.val).toString().split('').pop());
    }
    
    return sum;
};
