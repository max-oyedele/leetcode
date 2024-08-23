import ListNode from "./list-node";

function isPalindrome(head: ListNode | null): boolean {
  let f: ListNode | null = head;
  let ff: ListNode | null = head;

  while (f && ff && ff.next) {
    f = f.next;
    ff = ff.next.next;
  }

  if (f && ff) f = f.next;

  f = reverseList(f);

  while (f && head) {
    if (f.val !== head.val) return false;
    f = f.next;
    head = head.next;
  }

  return true;
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  while (head) {
    let next: ListNode | null = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}

// [1,2,2,1] => true
// [1,2] => false
