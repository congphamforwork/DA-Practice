// const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// const strs = ["xyzzzzzzzzzzzz", "zzzzzzzzzzzzyx"];
// const strs = ["ac", "c"];
// const strs = [
//   "hos",
//   "jew",
//   "nub",
//   "cod",
//   "old",
//   "way",
//   "fur",
//   "fla",
//   "cot",
//   "baa",
//   "leo",
//   "uzi",
//   "tho",
//   "pry",
//   "tun",
//   "hex",
//   "fog",
//   "tad",
//   "eat",
//   "sow",
//   "cop",
//   "eke",
//   "jam",
//   "arc",
//   "guy",
//   "tow",
//   "aid",
//   "ann",
//   "bus",
//   "ten",
//   "ate",
//   "ewe",
//   "roy",
//   "leg",
//   "gas",
//   "bug",
//   "jay",
//   "sup",
//   "phd",
// ];
const strs = [
  "cab",
  "tin",
  "pew",
  "duh",
  "may",
  "ill",
  "buy",
  "bar",
  "max",
  "doc",
];

const solution = () => {
  const aCode = "a".charCodeAt(0);
  const group = {};
  for (const str of strs) {
    const count = Array(26).fill(0);
    for (const index in str) {
      const countIdx = str.charCodeAt(index) - aCode;
      count[countIdx] += 1;
    }
    const key = count.join("*");
    if (!group[key]) {
      group[key] = [];
    }
    group[key].push(str);
  }
  return Object.values(group);
};

const solution2 = () => {
  const result = {};
  const dupObj = {};
  for (const str of strs) {
    const sortedStr = str.split("").sort().join("");
    if (!dupObj[sortedStr]) {
      dupObj[sortedStr] = [];
    }
    dupObj[sortedStr] = (dupObj[sortedStr] || []).concat(str);
  }
  return Object.values(dupObj);
};

console.log(solution2());
