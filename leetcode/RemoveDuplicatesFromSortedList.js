// Leetcode 83. Remove Duplicates from Sorted List
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

const deleteDuplicates = function(head) {
    let currentNode = head;
    let previousNode;
    while (currentNode) {
        if (previousNode?.val === currentNode.val) {
            currentNode = currentNode.next;
            previousNode.next = currentNode;
        } else {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
    }
    return head;
};

const list = [1,1,1];
function getInput(arr) {
    console.log(`input ${arr}`)
    return arr.reverse().reduce((acc, curr) => {
        return (acc === null) ? new ListNode(curr) : new ListNode(curr, acc)
    }, null)
}
let head = deleteDuplicates(getInput([1,1,2]));
console.log(head)
head = deleteDuplicates(getInput([1,1,2,3,3]));
console.log(head)
head = deleteDuplicates(getInput([1,1,1]));
console.log(head)