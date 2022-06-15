// Description
// Write a function to convert a name into initials.
// This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.

// 이름을 이니셜로 변환하는 함수를 작성합니다.
// 이 kata는 엄격하게 두 단어 사이에 하나의 공백을 사용합니다.
// 출력은 두 개의 대문자여야 하며 점으로 구분해야 합니다.

// 1
function abbreviateName(name) {
  // 코드 작성
  const nameArry = name.split(' ')
  let shortName = ''
  for(let i in nameArry ){
    if(i > 1){
      break;
    }
    const namePiece = nameArry[i]
    shortName += namePiece.charAt(0) + (i == 0 ? '.':'')
  }

  return shortName
}

console.log(abbreviateName('Sam Azor')) // S.A
console.log(abbreviateName('Ralph Donovan')) // R.D
console.log(abbreviateName('Lorensz Schmidt')) // L.S
console.log(abbreviateName('Leo Song')) // L.S
