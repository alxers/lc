/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) {
        return []
    }
    
    if(root.left && root.right) {
        root.left, root.right = root.right, root.left;
        root = root.left;
        return invertTree(root);
    }
};
