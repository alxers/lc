var maxDepth = function(root, count=0) {
    
    if (!root) {
        return [];
    }
    
    if (this.left) {
        maxDepth(this.left, count++)
    }
    console.log(count)
};
