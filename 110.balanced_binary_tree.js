var isBalanced = function(root) {
    let first, second;
    function rec(root) {
        if (!root) {
            return 0;
        }

        let left = 1 + rec(root.left)
        let right = 1 + rec(root.right);
        return [left, right];
    }
    
    [first, second] = rec(root);
    return Math.abs(first.split(',').length - second.split(',').lentgh) > 1;
};
