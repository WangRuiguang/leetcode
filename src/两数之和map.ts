function twoSum(nums: number[], target: number): number[] {
  const dict: Map<number, number> = new Map()
  for(const [index, value] of nums.entries()){
    const diff = target - value
    if(dict.has(diff)){
      return [dict.get(diff), index]
    }
    dict.set(value, index)
  }
 };

 export {};