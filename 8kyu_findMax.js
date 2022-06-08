// 1
function max(arr) {
  // 코드 작성
  // const maxVal = Math.max(...arr)
  const maxVal = arr.reduce((previous, current) => {
    console.log(previous, current)
    return previous > current ? previous : current
  })
  return maxVal
}

console.log(max([1, 2, 3, 4])) // 4
console.log(max([4, 3, 2, 1])) // 4
console.log(max([2, 4, 1, 3])) // 4
console.log(max([42, 94, 86, 88])) // 94





/**
 * 예외 상황
 */
function createArrayData() {
  let arrayTestVal = new Array()
  for (let i = 1; i <= 1000000; i++) {
    arrayTestVal.push(i)
  }
  return arrayTestVal
}

function maxFuncTest(arr) {
  try {
    const maxVal_1 = Math.max(...arr)
    console.log('maxVal_1(Math) : ', maxVal_1)
  } catch (e) {
    console.log('maxVal_1(Math) : ','error : '+e.message)
  }

  try {
    const maxVal_2 = arr.reduce((previous, current) => {
      return previous > current ? previous : current
    })
    console.log('maxVal_2(reduce) : ', maxVal_2)
  } catch (e) {
    console.log('maxVal_2(reduce) : ','error : '+e.message)
  }
}
maxFuncTest(createArrayData())

