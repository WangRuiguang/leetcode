function fourSum(nums: number[], target: number): number[][] {
  const dict: Map<string, number[]> = new Map()
  const sortNums = nums.sort((pre, cur)=>pre - cur)
  for(const [index0, value0] of sortNums.entries()){
    for(let index1 = index0 + 1; index1 < sortNums.length; index1++){
      let headIndex = index1 + 1
      let lastIndex = sortNums.length - 1
      while(headIndex < lastIndex){
        const sum = value0 + sortNums[index1] + sortNums[headIndex] + sortNums[lastIndex]
        if(sum < target) {
          headIndex++
        } else if(sum > target) {
          lastIndex --
        } else {
          const arr = [value0, sortNums[index1], sortNums[headIndex], sortNums[lastIndex]]
          dict.set(arr.join(''), arr)
          headIndex++
          lastIndex--
        }
      }
    }
  }
  return [...dict.values()]
};