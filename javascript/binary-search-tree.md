# Binary Search Tree

```js
const Node = class {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
};

const BST = class {
    constructor() {
        this.root = null;
    }
};

BST.prototype.add = function (val) {
    if (!this.root) {
        this.root = new Node(val);
        return;
    } else {
        const explore = node => {
            if (val < node.val) {
                if (!node.left) node.left = new Node(val);
                else explore(node.left);
            }
            if (val > node.val) {
                if (!node.right) node.right = new Node(val);
                else explore(node.right);
            }
        };
        explore(this.root);
    }
};

BST.prototype.preOrder = function (root = this.root) {
    let res = [];

    const explore = node => {
        res.push(node.val);
        node.left && explore(node.left);
        node.right && explore(node.right);
    };

    explore(root);

    return res;
};

BST.prototype.inOrder = function (root = this.root) {
    let res = [];

    const explore = node => {
        node.left && explore(node.left);
        res.push(node.val);
        node.right && explore(node.right);
    };

    explore(root);

    return res;
};

BST.prototype.postOrder = function (root = this.root) {
    let res = [];

    const explore = node => {
        node.left && explore(node.left);
        node.right && explore(node.right);
        res.push(node.val);
    };

    explore(root);

    return res;
};

BST.prototype.levelOrder = function (root = this.root) {
    if (!root) return [];
    const result = [];
    const traverse = (node, depth = 0) => {
        node.left && traverse(node.left, depth + 1);
        if (result[depth]) result[depth].push(node.val);
        else result[depth] = [node.val];
        node.right && traverse(node.right, depth + 1);
    }
    traverse(root);
    return result;
};

BST.prototype.inOrderIterative = function (root = this.root) {
    if (!this.root) return;
    let res = [];
    let q = [];
    let curr = this.root;

    while (q.length || curr) {
        while (curr) {
            q.push(curr);
            curr = curr.left;
        }
        curr = q.pop();
        res.push(curr.val);
        curr = curr.right;
    }

    return res;
};

BST.prototype.levelOrderIterative = function (root = this.root) {
    if (!root) return;
    let res = [];
    let q = [];

    q.push(this.root);

    while (q.length) {
        const node = q.shift();
        res.push(node.val);
        node.left && q.push(node.left);
        node.right && q.push(node.right);
    }
    return res;
};


BST.prototype.findMin = function (root = this.root) {
    if (!root) return null;

    let pointer = root;

    while (pointer) {
        pointer = pointer.left;
    }
    return pointer;
};

BST.prototype.findMax = function (root = this.root) {
    if (!root) return null;

    let pointer = root;

    while (pointer) {
        pointer = pointer.right;
    }
    return pointer;
};

BST.prototype.isPresent = function (val) {
    if (!this.root) return false;
    let pointer = this.root;

    while (pointer) {
        if (!pointer) return false;
        if (pointer.val === val) return true;
        if (pointer.val < val) pointer = pointer.left;
        if (pointer.val > val) pointer = pointer.right;
    }

    return false;
};

BST.prototype.remove = function (val) {
    if (!this.root) return;

    const _remove = (node, val) => {
        if (!node) return;
        if (val > node.val) node.right = _remove(node.right, val);
        else if (val < node.val) node.left = _remove(node.left, val);
        else {
            if (!node.left && !node.right) return null;
            if (!node.left) return node.right;
            if (!node.right) return node.left;

            let tempNode = node.right;
            while (tempNode.left) {
                tempNode = tempNode.left;
            }

            node.val = tempNode.val;
            node.right = _remove(node.right, tempNode.val);
        }
        return node;
    };

    this.root = _remove(this.root, val);
};
```