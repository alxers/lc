var isBalanced = function(root) {
    if (!root) {
        return 0;
    }
    
    return Math.abs(isBalanced(root.left) - isBalanced(root.right));
};
