function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function(l1, l2) {
    
    let sum = parseInt(getVal(l1), 10) + parseInt(getVal(l2), 10);
    
    sum = sum.toLocaleString('fullwide', {useGrouping: false});
    console.log(sum);
    var head = null;
    for (let i = sum.length - 1; i >= 0; i--) {
       let node = new ListNode(sum[i], null);
        if (head === null) {
            head = node;
        } else {
            let currentNode = head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
    }
    return head;
}

function getVal(list) {
    let str = '';
    let currentNode = list;
    while (currentNode) {
        str = currentNode.val + str;
        currentNode = currentNode.next;
    }
    console.log(str);
    return str;
}



const l1 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
const l2 = [5,6,4];
let list1 = new ListNode(1);
for (let i = 0; i < l1.length; i++) {
    let currentNode = list1;
    while (currentNode.next) {
        currentNode = currentNode.next;
    }
    currentNode.next = new ListNode(l1[i]);
}
// console.log(list1);
    
let list2 = new ListNode(5);
list2.next = new ListNode(6);
list2.next.next = new ListNode(4);
// console.log(list2);
console.log(addTwoNumbers(list1, list2));
