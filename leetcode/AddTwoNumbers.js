// Leetcode 2. Add Two Numbers
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const insertNode = function(val, list) {
  let currentNode = list;
  while (currentNode.next) {
    currentNode = currentNode.next;
  }
  currentNode.next = new ListNode(val);
}

const addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let resultNode;
  while (l1 || l2 || carry > 0) {
    let sum = 0;
    console.log("l1 " + l1?.val + " l2 " + l2?.val);
    sum += l1 ? l1.val : 0;
    sum += l2 ? l2.val : 0;
    sum += carry;
    carry = sum > 9 ? parseInt(sum / 10) : 0;
    let num = sum > 9 ? sum % 10 : sum;
    console.log("sum is " + sum + " num is " + num + " carry is " + carry);
    if (resultNode) {
      insertNode(num, resultNode);
    } else {
      resultNode = new ListNode(num);
    }
    l1 = l1?.next;
    l2 = l2?.next;
  }
  return resultNode;
};

const l1 = [2, 4, 3];
let list1 = new ListNode(2);
for (let i = 1; i < l1.length; i++) {
  insertNode(l1[i], list1);
}
const l2 = [5, 6, 4];
let list2 = new ListNode(5);
for (let i = 1; i < l2.length; i++) {
  insertNode(l2[i], list2);
}
addTwoNumbers(list1, list2);
