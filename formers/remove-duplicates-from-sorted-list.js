"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function deleteDuplicates(head) {
    var current = head;
    while (current) {
        while (current.next && current.val === current.next.val) {
            current.next = current.next.next;
        }
        current = current.next;
    }
    return head;
}
var head = { val: 1, next: { val: 1, next: { val: 2, next: null } } };
console.log("delete duplicates:", deleteDuplicates(head));
