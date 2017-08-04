function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let n = new TreeNode(1);
n.left = new TreeNode(2);
n.left.left = new TreeNode(3);
n.left.left.left = new TreeNode(4);

let b = new TreeNode(1);
b.left = new TreeNode(2);
b.right = new TreeNode(3);
 

function maxDepth(root) {
    
    if (!root) {
        return 0;
    }
    
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

function balanced(root) {
    let leftDepth = 0;
    let rightDepth = 0;
    if (!root) {
        return true;
    }
    if (root.left) {
        leftDepth = maxDepth(root.left);
    }
    if (root.right) {
        rightDepth = maxDepth(root.right);
    }
    return Math.abs(leftDepth - rightDepth) <= 1;
}

var isBalanced = function(root) {
    if (!root) {
        return true;
    }
    let b = balanced(root);
    return isBalanced(root.left) && isBalanced(root.right) && b;
};
