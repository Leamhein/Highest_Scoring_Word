function high(x) {
  var wordArr = x.split(" "),
  lettArr = [],
  sum = [],
  pos = 0;
  for (let i = 0; i < wordArr.length; i++) {
    lettArr[i] = wordArr[i].split("");
    sum[i] = 0;
    for (let j = 0; j < lettArr[i].length; j++) {
      lettArr[i][j] = lettArr[i][j].charCodeAt();
      sum[i] += lettArr[i][j];
    };
  };
  for (let i = 0; i < sum.length-1; i++) {
    if (sum[i] < sum[i+1]) {
      pos = i+1;
    };
  };
  return wordArr[pos];
};
console.log(high('mf ra'));
