"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reverseList(head) {
    var prev = null;
    while (head) {
        var next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}
var head = {
    val: 1,
    next: {
        val: 2,
        next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
    },
};
console.log("reversed list:", reverseList(head));
