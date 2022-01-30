class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

function main() {
  var root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  root.right.left = new Node(6);
  root.right.right = new Node(7);
  root.right.left.left = new Node(8);
  root.right.left.right = new Node(9);
  console.log('height is ', findHeight(root, 0));
  console.log('maxSumToLeaf is ', maxSumToLeaf(root) + root.value);
}
main();

function maxSumToLeaf(root) {
    if (root === null) return -Infinity;
    if (root.left === null && root.right === null) {
        return root.value;
    }
    var sumLeft = maxSumToLeaf(root.left);
    var sumRight = maxSumToLeaf(root.right);

    return Math.max(sumLeft, sumRight);
}


function findHeight(root, height) {
    if (root === null) {
        return height;
    }
    height++;
    var leftHeight = findHeight(root.left, height)
    var rightHeight = findHeight(root.right, height)

    return (leftHeight > rightHeight) ? leftHeight : rightHeight;
}

function printPostorder(root) {
  if (root === null) return;
  printPostorder(root.left);
  printPostorder(root.right);
  console.log(root.value);
}

function printPreorder(root) {
  if (root === null) return;
  console.log(root.value);
  printPostorder(root.left);
  printPostorder(root.right);
}

function printInorder(root) {
  if (root === null) return;
  printPostorder(root.left);
  console.log(root.value);
  printPostorder(root.right);
}
