function isPalandrom(str) {
  // let result = str.split("")
  // result = result.reverse()
  // result = result.join("")
  // return result === str

  // const strArr = str.split("")
  // const reversedArr = strArr.reverse()
  // const result = reversedArr.join("")
  // return str === result

  let leftPointer = 0 // str[0]
  let rightPointer = str.length - 1 // str[6]
  while(leftPointer < rightPointer) {
    let firstChar = str[leftPointer]
    let lastChar  = str[rightPointer]
    if(firstChar !== lastChar) {
      console.log(firstChar)
      console.log(lastChar)
      return false
    }
    leftPointer++
    rightPointer--
  }
  return true

  // for(let i = 0; i < str.length; i++) {
  // }
}

console.log(isPalandrom("Hello world"))
console.log(isPalandrom("dad"))
console.log(isPalandrom("abcdcba"))
console.log(isPalandrom("abcedcba"))