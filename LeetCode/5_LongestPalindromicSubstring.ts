const str = "babad";
function solution(str: string): string {
  const n = str.length;
  const checkPalindrome = (start: number, end: number): boolean => {
    let left = start;
    let right = end - 1;
    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  };

  for (let length = n; length > 0; length--) {
    for (let start = 0; start + length <= n; start++) {
      const end = start + length;
      const isPalindrome = checkPalindrome(start, end);
      if (isPalindrome) {
        return str.slice(start, end);
      }
    }
  }

  return str[0]!;
}

console.log(solution(str));
