// Description
// Given a string of digits,
// you should replace any digit below 5 with 0
// and any digit 5 and above with 1.
// Return the resulting string.
// Input will never be an empty string.

// 설명
// 문자열이 주어졌을 때,
// 5보다 작은 숫자는 0으로 바꿔야 합니다.
// 그리고 1이 있는 5 이상의 모든 숫자.
// 결과 문자열을 반환합니다.
// 입력은 결코 빈 문자열이 아닙니다.

// 1
function fakeBinary(str) {
  // 코드 작성
  let retrunVal = ''
  for(let i=0; i<str.length; i++){
    let strInt = parseInt(str.charAt(i))
    retrunVal += strInt < 5 ? '0':'1'
  }
  return retrunVal
}


console.log(fakeBinary('0123456789')) // 0000011111
console.log(fakeBinary('509321967506747')) // 101000111101101
console.log(fakeBinary('45385593107843568')) // 01011110001100111
