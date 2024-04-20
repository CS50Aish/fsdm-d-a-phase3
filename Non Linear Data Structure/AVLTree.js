class AVLNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    getHeight(node) {
        return node ? node.height : 0;
    }

    updateHeight(node) {
        if (node) {
            node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right) + 1);
        }
    }

    rotateRight(y) {
        const x = y.left;
        const T2 = x.right;

        x.right = y;
        y.left = T2;

        this.updateHeight(y);
        this.updateHeight(x);
        return x;

    }

    rotateLeft(x) {
        const y = x.right;
        const T2 = y.left;
        y.left = x;
        x.right = T2;
        this.updateHeight(x);
        this.updateHeight(y);
        return y;
    }
    // Function to get the balance factor of a node
    getBalanceFactor(node) {
        return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }
    // Function to insert a node into the AVL tree
    insert(data) {
        this.root = this._insert(this.root, data);
    }
    _insert(node, data) {
        // Perform standard BST insert
        if (!node) {
            return new AVLNode(data);
        }
        if (data < node.data) {
            node.left = this._insert(node.left, data);
        } else if (data > node.data) {
            node.right = this._insert(node.right, data);
        } else {
            return node; // Duplicate nodes are not allowed
        }
        // Update height of the current node
        this.updateHeight(node);
        // Get the balance factor to check if the node became unbalanced
        const balance = this.getBalanceFactor(node);
       
        // Left Left Case
        if (balance > 1 && data < node.left.data) {
            return this.rotateRight(node);
        }
        // Right Right Case
        if (balance < -1 && data > node.right.data) {
            return this.rotateLeft(node);
        }
        // Left Right Case
        if (balance > 1 && data > node.left.data) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }
        // Right Left Case
        if (balance < -1 && data < node.right.data) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }
        return node;
    }

}

const avlTree = new AVLTree();

avlTree.insert(10);
avlTree.insert(5);
avlTree.insert(15);
avlTree.insert(3);
avlTree.insert(8);
avlTree.insert(2);

console.log("AVL Tree: ", avlTree);

