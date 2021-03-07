
const zip = (nums: number[])=>nums.map((value, index)=>[index, value])
function twoSum(nums: number[], target: number): number[] {
  const arr = zip(nums)
  let head = arr[0]
  let last = arr[nums.length-1]
  let r = 0
  while(head[0] !== last[0]){
    if()
  }
 };
console.log(twoSum([2,7,11,15], 9))


export {};