/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */

// struct TreeNode {
//   int val;
//   struct TreeNode *left;
//   struct TreeNode *right;
// };

void __inorderTraversal(struct TreeNode* root, int* res, int* returnSize) {
    // 左,根,右
    if(root == NULL) return ;
    __inorderTraversal(root->left, res, returnSize);
    res[(*returnSize)++] = root->val;
    __inorderTraversal(root->right, res, returnSize);
    return ;
}

int* inorderTraversal(struct TreeNode* root, int* returnSize) {
    int* res = malloc(sizeof(int) * 501);
    *returnSize = 0;
    __inorderTraversal(root, res, returnSize);
    return res;
}

