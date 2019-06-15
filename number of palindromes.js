function palindrome(str) {
  let palindromes = [];
  let temp = "";

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
        palindromes.push(temp);
      }
    }
    temp = "";
  }

  return palindromes;
}

console.log(palindrome("nsnfkataksaesadad"));
