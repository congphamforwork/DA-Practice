const A = [-60, 60, -40, -20];
const D = ["2020-10-01", "2020-02-02", "2020-10-10", "2020-10-30"];

const prepareReportArr = () => {
  const arr = [];
  for (let i = 0; i < 12; i++) {
    const sampleObj = { credit: [], debit: [] };
    arr.push(sampleObj);
  }
  return arr;
};

const solution = (A, D) => {
  const n = A.length;
  const reportArr = prepareReportArr();
  for (let i = 0; i < n; i++) {
    const amount = A[i];
    const dateStr = D[i];
    const monthIdx = Number(dateStr.substring(5, 7)) - 1;
    if (amount < 0) {
      reportArr[monthIdx].debit.push(amount);
    } else {
      reportArr[monthIdx].credit.push(amount);
    }
  }

  let balance = 0;
  for (let i = 0; i < reportArr.length; i++) {
    const curObj = reportArr[i];
    const totalCredit = curObj.credit.reduce((result, curEle) => {
      return result + curEle;
    }, 0);

    let totalDebit = curObj.debit.reduce((result, curEle) => {
      return result + curEle;
    }, 0);

    const freeMonthlyFeeCondition = curObj.debit.length > 2 && totalDebit < -99;
    if (!freeMonthlyFeeCondition) {
      totalDebit += -5;
    }
    balance = balance + totalCredit + totalDebit;
  }

  return balance;
};

console.log(solution(A, D));
