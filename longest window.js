function longestWindow(str) {
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    if (temp.indexOf(str[i]) === -1) {
      temp = temp + str[i];
    }
  }
  return temp;
}

console.log(longestWindow("aabcbcdbca"));
