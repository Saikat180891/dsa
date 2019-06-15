function palindrome(str) {
  let temp = "";
  let longestPalindrom = "";

  for (let i = 0; i < str.length; i++) {
    temp = temp + str[i];
    for (let j = i + 1; j < str.length; j++) {
      temp = temp + str[j];
      if (
        temp ===
        temp
          .split("")
          .reverse()
          .join("")
      ) {
        if (longestPalindrom.length < temp.length) {
          longestPalindrom = temp;
        }
      }
    }
    temp = "";
  }

  return longestPalindrom;
}

console.log(palindrome("nsnfkataksaesadad"));
