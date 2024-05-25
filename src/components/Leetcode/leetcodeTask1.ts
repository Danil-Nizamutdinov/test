// nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

const nums1: number[] = [1, 2, 3, 0, 0, 0];
const m: number = 3;
const nums2: number[] = [2, 5, 6];
const n: number = 3;

const merge = (
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): number[] => {
  let x = n + m;
  let arr: number[] = [];

  nums1.map((n) => n !== 0 && arr.push(n));
  nums2.map((n) => n !== 0 && arr.push(n));

  return arr.sort();
};

const f = merge(nums1, m, nums2, n);

export default f;
