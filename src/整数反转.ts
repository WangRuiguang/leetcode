function toArray(x: number, arr: number[]): number[]{
  
  const result = Math.floor(x / 10)
  const mode = x % 10
  arr.push(mode)
  if(result === 0) return arr
  else {
    
    return toArray(result, arr)
  }
}
function toNum(x: number[], num): number{
  if(x.length ===0) return num
  else {
    num = x.shift()+ num * 10
    return toNum(x, num)
  }
}
function reverse(x: number): number {
  const max = Math.pow(2, 31) -1
  
  let symbol = -1
  if(x >= 0){
    symbol = 1
  }
  const arr = toArray(Math.abs(x), [])
  const r = toNum(arr, 0)
  if(Math.abs(r)> max ) return 0
  return r * symbol
};

console.log(reverse(-123))

export {};