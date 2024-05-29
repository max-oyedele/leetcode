import ListNode from "./list-node";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let fast: ListNode | null | undefined = dummy;
  let slow: ListNode | null | undefined = dummy;
  while (n--) {
    fast = fast?.next;
  }
  while (fast?.next) {
    slow = slow?.next;
    fast = fast.next;
  }
  if (slow?.next) slow.next = slow.next.next;
  return dummy.next;
}

const head: ListNode = {
  val: 1,
  next: {
    val: 2,
    next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
  },
};
console.log("remove nth from the end:", removeNthFromEnd(head, 2));
