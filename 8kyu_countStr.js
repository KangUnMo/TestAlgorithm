// Description
// Create a function that accepts 2 string arguments
// and returns an integer of the count of occurrences
// the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.

// 설명
// 2개의 문자열 인수를 받는 함수를 만듭니다.
// 발생 횟수의 정수를 반환합니다.
// 두 번째 인수는 첫 번째 인수에서 발견됩니다.
// 발생 항목을 찾을 수 없으면 카운트 0을 반환해야 합니다.

// 1
function countStr(str, letter) {
  // 코드 작성
  let checkRegExp = new RegExp(letter, "g")
  const matchArry = str.match(checkRegExp)

  return matchArry === null ? '0' : matchArry.length
}

console.log(countStr('', 'a')) // 0
console.log(countStr('Hello', 'a')) // 0
console.log(countStr('Hello', 'H')) // 1
console.log(countStr('Hello', 'h')) // 0
console.log(countStr('Hello', 'e')) // 1
console.log(countStr('Hello', 'l')) // 2
console.log(countStr('Hello', 'o')) // 1
