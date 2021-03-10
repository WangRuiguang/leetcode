function threeSumClosest(nums: number[], target: number): number {
  let r = Math.pow(2 ,31)
  const sortNums = nums.sort((cur, pre)=>cur - pre)
  for(const [index, value] of sortNums.entries()){
    let headIndex = index + 1
    let lastIndex = sortNums.length - 1
    while(headIndex < lastIndex){
      const sum = value + sortNums[headIndex] + sortNums[lastIndex]
      if(Math.abs(sum - target) < Math.abs(r - target) ){
        r = sum
      }
      if(sum - target > 0) {
        lastIndex--
      } else if( sum - target < 0) {
        headIndex++
      } else {
        break
      }

    }
  }
  return r
};