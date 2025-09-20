class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const NOT_EXIST_NUMBER = -999;

type NumberOrNullArray = Array<number | null>;
// const treeArray = [1, null, 2, 3];
const treeArray = [1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9];

const createTreeProcess = (
  treeArray: NumberOrNullArray,
  index: number
): TreeNode | null => {
  let curVal = treeArray[index];
  if (curVal === null) {
    return new TreeNode(NOT_EXIST_NUMBER, null, null);
  }
  if (curVal === undefined) {
    return null;
  }
  const nextIndex = index * 2;
  const curNode = new TreeNode(
    curVal,
    createTreeProcess(treeArray, nextIndex + 1),
    createTreeProcess(treeArray, nextIndex + 2)
  );  
  return curNode;
};

const createTreeFromTreeArray = (
  treeArray: NumberOrNullArray
): TreeNode | null => {
  const headNode = createTreeProcess(treeArray, 0);
  return headNode;
};

const preorderTravel = (
  headNode: TreeNode | null,
  result: NumberOrNullArray
) => {
  if (headNode !== null) {
    const value = headNode.val !== NOT_EXIST_NUMBER ? headNode.val : null;
    result.push(value);
    preorderTravel(headNode.left, result);
    preorderTravel(headNode.right, result);
  }
};

const convertTreeToArray = (headNode: TreeNode): NumberOrNullArray => {
  const result: NumberOrNullArray = [];
  preorderTravel(headNode, result);
  return result;
};
const headNode = createTreeFromTreeArray(treeArray);
console.log("[CongPB] ~ headNode:", headNode!.right);
console.log("[CongPB] ~ Tree:", convertTreeToArray(headNode!));
