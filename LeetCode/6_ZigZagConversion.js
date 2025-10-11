const s = "PAYPALISHIRING",
  numRows = 3;
const solution = () => {
  const rows = Array(numRows);
  let curRow = 0;
  let isGoingDown = true;

  for (const char of s) {
    rows[curRow] = (rows[curRow] || "") + char;
    if (isGoingDown) curRow++;
    else curRow--;
    if (curRow === 0) isGoingDown = true;
    if (curRow === numRows - 1) isGoingDown = false;
  }

  return rows.join("");
};

console.log(solution());
