// 1
function min(arr) {
  // 코드 작성
  const minVal = Math.min(...arr)
  return minVal
}

console.log(min([1, 2, 3, 4])) // 1
console.log(min([4, 3, 2, 1])) // 1
console.log(min([2, 4, 1, 3])) // 1
console.log(min([42, 94, 86, 88])) // 42
