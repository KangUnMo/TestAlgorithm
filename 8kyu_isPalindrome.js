// Description
// Write a function
// that checks if a given string is a palindrome.

// Palindrome: 회문 (앞에서부터 읽으나 뒤에서부터 읽으나 동일한 단어나 구)

// 1
function isPalindrome(str) {
  // 코드 작성
  const leftStr = [...str].toString()
  const rightStr = [...str].reverse().toString()

  return rightStr === leftStr
}

console.log(isPalindrome('')) // true
console.log(isPalindrome('a')) // true
console.log(isPalindrome('app')) // false
console.log(isPalindrome('bob')) // true
console.log(isPalindrome('madam')) // true
console.log(isPalindrome('racecar')) // ture
console.log(isPalindrome('web')) // false
