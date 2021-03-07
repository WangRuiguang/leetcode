function maxArea(height: number[]): number {
  let maxArea = 0
  for(const [x0, y0] of height.entries()){
    for(const [x1, y1] of height.slice(x0 + 1).entries()){
      const area = Math.min(y0, y1) * (x1 + 1)
      if(area > maxArea) maxArea = area
    }
  }
  return maxArea
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))

export {};