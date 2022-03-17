// Leetcode 103. Binary Tree Zigzag Level Order Traversal
function zigZagTraversal(root) {
    const results = [];
    const lot = (node, level) => {
      if (!node) return;
  
      if (!results[level]) {
        results[level] = [];
      }
      results[level].push(node.value);
      level++;
  
      lot(node.left, level);
      lot(node.right, level);
    }
    lot(root, 0);
    results.map((bucket, i) => {
      if (i % 2 > 0) {
        bucket.reverse();
      }
    });
    console.log(results);
  }

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
    zigZagTraversal(root);
  }
  main();
  