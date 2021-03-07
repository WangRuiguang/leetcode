function threeSum(nums: number[]): number[][] {
  if(nums.length < 3) return []
  const r: number[][] = []
  const dict: Map<number, number[][][]> = new Map()
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const diff = 0 - nums[i] - nums[j]
      const init = dict.has(diff) ? dict.get(diff) : []
      if(!init.find(it=>it[1][0] === i && it[0][0] === j)){
        dict.set(diff, [...init, [[i, nums[i]], [j, nums[j]]]])
      } 
    }
  }
  for (const [index, value] of nums.entries()) {
    if (dict.has(value)) {
      const matchNums = dict.get(value).filter(it => it[0][0] !== index && it[1][0] !== index)
      if (matchNums) {
        // const sortNums = [value, matchNums[0][1], matchNums[1][1]].sort((pre, cur) => pre - cur)
        for(const i of matchNums){
          const sortNums = [value, i[0][1], i[1][1]].sort((pre, cur)=>pre-cur)
          if (!r.find(it => it[0] === sortNums[0] && it[1] === sortNums[1] && it[2] === sortNums[2])) {
            r.push(sortNums)
          }
        } 
      }
    }
  }
  return r
};

console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]))


export { };