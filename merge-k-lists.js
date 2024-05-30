var ListNode = require("./list-node")["default"];

var mergeKLists = function (lists) {
  const n = lists.length;
  if (n == 0) {
    return null;
  }
  for (let i = 1; i < n; ++i) {
    lists[i] = mergeTwoLists(lists[i - 1], lists[i]);
  }
  return lists[n - 1];
};

function mergeTwoLists(l1, l2) {
  const dummy = new ListNode();
  let cur = dummy;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  cur.next = l1 || l2;
  return dummy.next;
}

const lists = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
];
console.log("merged k sorted lists:", mergeKLists(lists)); // not sure correct?
