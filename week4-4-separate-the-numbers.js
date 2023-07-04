//Blog:https://www.allenliservice.site/hackerrank-js-week4-4-separate-the-numbers/

// <strong>solution:</strong>
// 判斷給予的字串 s 是否可以由一個連續的數字增加所組成。
// 程式從 1 開始，逐個遞增數字，並將遞增後的數字串接到一起，
// 直到串接後的數字與 s 相等或超過 s 的長度。
// 如果找到了這樣的數字，就返回 "YES" 加上這個數字的起始部分；否則，返回 "NO"。

// <strong>Code 1: BigO(n)</strong>
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'separateNumbers' function below.
 *
 * The function accepts STRING s as parameter.
 */

function separateNumbers(s) {
  // Write your code here
  for (let i = 1; i < s.length; i++) {
    // use BigInt for test cases with large numbers
    let curr = BigInt(s.slice(0, i));
    let temp = curr.toString();
    while (temp.length < s.length) {
      curr++;
      temp += curr.toString();
    }
    if (temp === s) {
      return console.log(`YES ${s.slice(0, i)}`);
    }
  }
  return console.log('NO');
}

function main() {
  const q = parseInt(readLine().trim(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const s = readLine();

    separateNumbers(s);
  }
}

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
s = 

7
1234
91011
99100
101103
010203
13
1


1234
YES 1

91011
YES 9

99100
YES 99

101103
NO

010203
NO

13
NO

1
NO
</pre> */
