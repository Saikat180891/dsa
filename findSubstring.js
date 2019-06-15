function findSubStrings(str) {
  let temp = "";
  const substrings = [];
  for (let i = 0; i < str.length; i++) {
    if (substrings.indexOf(str[i]) === -1) {
      substrings.push(str[i]);
    }
    temp = temp + str[i];
    if (substrings.indexOf(temp) === -1) {
      substrings.push(temp);
    }
    for (let j = i + 1; j < str.length; j++) {
      temp = temp + str[j];

      if (substrings.indexOf(temp) === -1) {
        substrings.push(temp);
      }
    }
    temp = "";
  }

  return substrings;
}

console.log(findSubStrings("abc"));
