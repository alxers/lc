var addTwoNumbers = function(l1, l2) {
    let newNode;
    let sum;
    let rem = 0;
    let prevNode = new ListNode();
    let currentNode;
    let firstNode = prevNode;
    
    while(l1 || l2 || rem != 0) {
        let nodeVal;
        if (!l1) {
            l1 = new ListNode(0);
        }
        if (!l2) {
            l2 = new ListNode(0);
        }
        sum = (l1.val + l2.val + rem).toString().split('');
        if (sum.length > 1) {
            nodeVal = +sum[1];
            rem = +sum[0];   
        } else {
            nodeVal = +sum[0];
            rem = 0;
        }

        currentNode = new ListNode(nodeVal);
        prevNode.next = currentNode;
 
        l1 = l1.next;
        l2 = l2.next;
        prevNode = currentNode;
    }
    
    return firstNode.next;
};
