// Description
// You will be given an array 'arr' and a value 'x'.
// All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings.
// X can be either.
// Return 'true' if the array contains the value, 'false' if not.

// 설명
// 배열 'arr'과 값 'x'가 주어집니다.
// 제공된 배열에 값이 포함되어 있는지 확인하기만 하면 됩니다.
// 배열은 숫자나 문자열을 포함할 수 있습니다.
// X는 둘 중 하나일 수 있습니다.
// 배열에 값이 포함되어 있으면 'true'를 반환하고 그렇지 않으면 'false'를 반환합니다.

// 1
function containTheValue(arr, x) {
  // 코드 작성
  // 1
  // let returnVal = false
  // if(arr.indexOf(x) > 0){
  //   returnVal = true
  // }
  //  return returnVal

  // 2
  return arr.includes(x)
}

console.log(containTheValue([1, 2], 2)) // true
console.log(containTheValue([1, 2], 3)) // false
console.log(containTheValue(['a', 'b'], 'b')) // true
console.log(containTheValue(['a', 'b'], 'c')) // false
