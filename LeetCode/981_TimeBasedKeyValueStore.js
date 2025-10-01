const TimeMap = function () {
  this.data = {};
};

TimeMap.prototype.set = function (key, value, timeStamp) {
  if (!this.data[key]) {
    this.data[key] = [];
  }
  this.data[key].push([timeStamp, value]);
};
TimeMap.prototype.get = function (key, value, timeStamp) {
  const keyArr = this.data[key];
  if (!keyArr) {
    return "";
  }
  let left = 0;
  let right = keyArr.length - 1;
  let ans;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midData = keyArr[mid];
    const midTimeStamp = midData[0];
    if (midTimeStamp === timeStamp) {
      return midData[1];
    }
    if (midTimeStamp > timeStamp) {
      right = mid - 1;
    } else {
      ans = midData[1];
      left = mid + 1;
    }
  }
  return ans || "";
};

const timeMap = new TimeMap();
timeMap.set("foo", "bar", 1);
console.log("[CongPB] ~ timeMap:", timeMap);
console.log(timeMap.get("foo", 1));
console.log(timeMap.get("foo", 3));
timeMap.set("foo", "bar2", 4);
console.log(timeMap.get("foo", 3));
console.log(timeMap.get("foo", 3));
timeMap.get("foo", 4);
timeMap.get("foo", 5);
