var isBalanced = function(root) {
    var first, second;
    function rec(root) {
        if (!root) {
            return ['', ''];
        }

        var left = 1 + rec(root.left)
        var right = 1 + rec(root.right);
        return [left, right];
    }
    [first, second] = rec(root);
    return !(Math.abs(first.split(',').length/2 - second.split(',').length/2) > 1);
};
