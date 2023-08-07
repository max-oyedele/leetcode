var hasCycle = function (head) {
  var s = new Set();
  while (head !== null) {
    if (s.has(head)) return true;
    s.add(head);
    head = head.next;
  }
  return false;
};

// [3,2,0,-4]; pos=1; true;
// [1,2]; pos=0; true;
// [1]; pos=-1; false;
