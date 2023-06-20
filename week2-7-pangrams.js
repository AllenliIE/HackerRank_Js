//Blog:https://www.allenliservice.site/hackerrank-js-week2-7-pangrams/

// <strong>solution:</strong>
// 先將 input 的 s 轉成小寫的狀態，接著運用 new Set 的特性搭配展開運算(...)，
// 將 s 做成不重複的字母陣列，最後確認這個長度是否包含 26 個英文字母，
// 注意，空白仍計算在內，故為 27 時，符合條件回傳 "pangram"。

// <strong>Code 1: BigO(n)</strong>
'use strict';

const fs = require('fs');

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
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
  // Write your code here
  let lowerCaseInput = s.toLowerCase();
  let uniqueChars = [...new Set(lowerCaseInput)];

  //Including space
  if (uniqueChars.length === 27) {
    return 'pangram';
  } else {
    return 'not pangram';
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = pangrams(s);

  ws.write(result + '\n');

  ws.end();
}

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
s = "The quick brown fox jumps over the lazy dog"

uniqueChars = 
[
  't', 'h', 'e', ' ', 'q', 'u',
  'i', 'c', 'k', 'b', 'r', 'o',
  'w', 'n', 'f', 'x', 'j', 'm',
  'p', 's', 'v', 'l', 'a', 'z',
  'y', 'd', 'g'
]

uniqueChars.length = 27
return pangram;
</pre> */
