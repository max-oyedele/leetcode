"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isPalindrome(head) {
    var f = head;
    var ff = head;
    while (ff && ff.next) {
        f = f.next;
        ff = ff.next.next;
    }
    if (ff)
        f = f.next;
    f = reverseList(f);
    while (f) {
        if (f.val !== head.val)
            return false;
        f = f.next;
        head = head.next;
    }
    return true;
}
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
