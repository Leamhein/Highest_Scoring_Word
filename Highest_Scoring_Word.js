function high(x) {
  var wordArr = x.split(" "),
  lettArr = [],
  sum = [],
  pos = 0;
  console.log(wordArr);
  for (let i = 0; i < wordArr.length; i++) {
    lettArr[i] = wordArr[i].split("");
    sum[i] = 0;
    for (let j = 0; j < lettArr[i].length; j++) {
      lettArr[i][j] = lettArr[i][j].charCodeAt();
      sum[i] += lettArr[i][j];
    };
    console.log(sum[i]);
  };
  var k = 0
  for (let i = 1; i < sum.length; i++) {
    if (sum[k] < sum[i]) {
      k = i;
    };
    pos = k;
    console.log(pos);
  };
  console.log(wordArr[pos]);
  return wordArr[pos];
};
console.log(high('what time are we climbing up the volcano'));
