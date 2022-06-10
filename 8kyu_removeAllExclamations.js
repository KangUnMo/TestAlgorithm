// Description
// Write function which removes all exclamation marks from a given string.

//주어진 문자열에서 모든 느낌표를 제거하는 함수를 작성하십시오.
// 1
function removeAllExclamations(str) {
  // 코드 작성
  return str.replaceAll('!','')
}

console.log(removeAllExclamations('ABCD!')) // ABCD
console.log(removeAllExclamations('!ABCD')) // ABCD
console.log(removeAllExclamations('A!B!CD')) // ABCD
console.log(removeAllExclamations('!!A!!B!!CD!!')) // ABCD
