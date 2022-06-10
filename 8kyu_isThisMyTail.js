// Description
// You must correct the broken function
// to make sure that the second argument(tail),
// is the same as the last letter of the first argument(body).
// If the tail is right return 'true', else return 'false'.

// 두 번째 인수(꼬리)가
// 첫 번째 인수(본문)의 마지막 문자와 동일합니다.
// 꼬리가 맞으면 'true'를 반환하고, 그렇지 않으면 'false'를 반환합니다.

// 1
function isThisMyTail(body, tail) {
  // 코드 작성
  const bodyLastIndex = body.length-1
  const matchIndex = body.indexOf(tail)
  return bodyLastIndex === matchIndex
}

console.log(isThisMyTail('Fox', 'f')) // false
console.log(isThisMyTail('Fox', 'x')) // true
console.log(isThisMyTail('Rabbit', 'a')) // false
console.log(isThisMyTail('Rabbit', 't')) // true
console.log(isThisMyTail('Meerkat', 'k')) // false
console.log(isThisMyTail('Meerkat', 't')) // true
