function threeSum(nums: number[]): number[][] {
  const sortArr = nums.sort((pre, cur)=>pre - cur)
  const resultArr = []
  for(const [index, value] of sortArr.entries()){
    let headIndex = index + 1
    let lastIndex = sortArr.length - 1
    while(headIndex < lastIndex){
      let head = sortArr[headIndex]
      let last = sortArr[lastIndex]
      if (head + last + value === 0) {
        if(!resultArr.find(([value0, value1, value2])=>value0 === value && value1 === head && value2 === last ))
        resultArr.push([value, head, last])
        headIndex++
      } else if (head + last + value < 0) {
        headIndex++
      } else if (head + last + value > 0) {
        lastIndex--
      }
    }
  }
  return resultArr
}