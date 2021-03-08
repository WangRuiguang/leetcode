function getNum(strArr: string[], resultArr: string[]): string[]{
  if(['+', '-'].includes(strArr[0])){
    return resultArr.length === 0 ? ['0'] : resultArr
  }
  if(strArr.length === 0) return resultArr.length === 0 ? ['0'] : resultArr
  if(strArr[0] >= '0' && strArr[0] <= '9'){
    resultArr.push(strArr[0])
    return getNum(strArr.slice(1), resultArr)
  } else {
    return resultArr.length === 0 ? ['0'] : resultArr
  }
  
}
function myAtoi(s: string): number {
  const trimed = s.trim()
  if(!['-', '+'].includes(trimed[0]) && !(trimed[0] >= '0' && trimed[0] <= '9')) return 0
  let strArr = trimed.split('')
  const sign = strArr[0]==='-' ? -1 : 1
  if(['+', '-'].includes(strArr[0])) {
    strArr = strArr.slice(1)
  }
  const r = parseInt(getNum(strArr, []).join('')) * sign
  if(r > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1
  } else if(r < Math.pow(-2, 31)) {
    return Math.pow(-2, 31)
  } else {
    return r
  }

};
console.log(myAtoi("-42-"))


export { };