import ListNode from "./list-node";

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let current: ListNode | null = head;
  while (current) {
    while (current.next && current.val === current.next.val) {
      current.next = current.next.next;
    }
    current = current.next;
  }
  return head;
}

const head = { val: 1, next: { val: 1, next: { val: 2, next: null } } };
console.log("delete duplicates:", deleteDuplicates(head));
