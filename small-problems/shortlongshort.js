function shortLongShort(first, second) {
  if(first.length > second.length) {
    return second.concat(first, second);
  }
  else {
    return first.concat(second, first);
  }
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"