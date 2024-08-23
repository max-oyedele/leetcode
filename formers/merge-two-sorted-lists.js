var mergeTwoLists = function (list1, list2) {
  const list = [];
  const smallLen = list1.length > list2.length ? list2.length : list1.length;
  const remainList =
    list1.length > list2.length ? list1.slice(smallLen) : list2.slice(smallLen);

  let i = 0;
  while (i < smallLen) {
    if (list1[i] < list2[i]) {
      list.push(list1[i], list2[i]);
    } else {
      list.push(list2[i], list1[i]);
    }
    i++;
  }

  return [...list, ...remainList];
};

const list1 = [1, 2, 4];
const list2 = [1, 3, 4];
// const list1 = [];
// const list2 = [0];

console.log("lists:", list1, list2, "merged:", mergeTwoLists(list1, list2));

//////////////////// by ListNode way //////////////
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// function mergeTwoLists(
//   list1: ListNode | null,
//   list2: ListNode | null
// ): ListNode | null {
//   let list: ListNode | null = { val: null, next: null };
//   const sameList = list;

//   while (list1 !== null && list2 !== null) {
//     if (list1.val <= list2.val) {
//       list.next = list1;
//       list1 = list1.next;
//     } else {
//       list.next = list2;
//       list2 = list2.next;
//     }
//     list = list.next;
//   }

//   if (list1 === null) list.next = list2;
//   if (list2 === null) list.next = list1;

//   return sameList.next;
// }
