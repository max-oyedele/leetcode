var isValid = function (s) {
  const map = new Map();
  map.set("(", ")");
  map.set("[", "]");
  map.set("{", "}");

  const arr = [];
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      arr.push(s[i]);
    } else {
      let last = arr.pop();
      if (map.get(last) !== s[i]) {
        return false;
      }
    }
  }

  return arr.length === 0;
};

const s1 = "()";
const s2 = "()[]{}";
const s3 = "(]";

[s1, s2, s3].forEach((s) => {
  console.log("s is valid:", s, isValid(s));
});
