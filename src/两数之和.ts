function zip1(nums: number[]){
  return nums.map((value, index)=>[value, index])
}
function find1(num: number, nums: number[][], target: number): number | false{
  if(nums.length === 0) return false
  const midLength = Math.floor(nums.length/2)
  if(num + nums[midLength][0] === target) return nums[midLength][1]
  else if (num + nums[midLength][0] > target){
    return find1(num, nums.slice(0, midLength), target)
  }else {
    return find1(num, nums.slice(midLength+1), target)
  }
}
function twoSum1(nums: number[], target: number): number[]|boolean {
 const sortNums = zip1(nums).sort((pre, cur)=>pre[0] - cur[0])
 for(const [index, value] of sortNums.entries()){
   const r = find1(value[0], sortNums.slice(index+1), target)
   if(r!==false) return [value[1], r].sort((pre, cur)=>pre-cur)
 }
 return false
};


console.log(twoSum1([0,3,-3,4,-1],-1))

export {};