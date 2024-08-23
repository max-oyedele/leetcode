var ListNode = require("./list-node")["default"];

var swapPairs = function (head) {
  const dummy = new ListNode(0, head);
  let [pre, cur] = [dummy, head];
  while (cur && cur.next) {
    const t = cur.next;
    cur.next = t.next;
    t.next = cur;
    pre.next = t;
    [pre, cur] = [cur, cur.next];
  }
  return dummy.next;
};

const lists = [
  { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null } } } },
  null,
  { val: 1, next: null },
];
lists.forEach((list) => {
  console.log("swap nodes in pairs:", swapPairs(list));
});
