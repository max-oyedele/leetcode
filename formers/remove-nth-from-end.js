"use strict";
exports.__esModule = true;
var list_node_1 = require("./list-node");
function removeNthFromEnd(head, n) {
    var dummy = new list_node_1["default"](0, head);
    var fast = dummy;
    var slow = dummy;
    while (n--) {
        fast = fast === null || fast === void 0 ? void 0 : fast.next;
    }
    while (fast === null || fast === void 0 ? void 0 : fast.next) {
        slow = slow === null || slow === void 0 ? void 0 : slow.next;
        fast = fast.next;
    }
    if (slow === null || slow === void 0 ? void 0 : slow.next)
        slow.next = slow.next.next;
    return JSON.stringify(dummy.next);
}
var head = {
    val: 1,
    next: {
        val: 2,
        next: { val: 3, next: { val: 4, next: { val: 5, next: null } } }
    }
};
console.log("remove nth from the end:", removeNthFromEnd(head, 2));
