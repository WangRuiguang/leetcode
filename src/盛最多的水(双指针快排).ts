function getLast<T>(arr: T[]){
  return arr[arr.length - 1]
}
function zip(nums: number[]){
  return nums.map((value, index)=>[index, value])
}
function maxArea(height: number[]) {
  const ziped = zip(height)
  let head = ziped[0]
  let last = getLast(ziped)
  let max = 0
  while(head[0] !== last[0]){
    const area = Math.min(head[1], last[1]) * (last[0] - head[0])
    if(area > max) max = area
    if(head[1] <= last[1]){
      head = ziped[head[0] + 1]
    }else{
      last = ziped[last[0] - 1]
    }
  }
  return  max
};

export {}