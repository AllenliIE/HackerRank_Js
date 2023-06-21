//Blog:https://www.allenliservice.site/hackerrank-js-week2-8-mars-exploration/

// <strong>solution:</strong>
// 試著將 SOS 標準信息找出規律，以此將遍歷的過程以三元運算式判斷，
// 發現只要是 3 的倍數且餘 1，如符合則為 "O"，不符合則為 "S"。
// 後續確認遍歷過程中，不符合標準信息之字母，運用 count += 1 紀錄後回傳。

// <pre style='background-color:#ggg'>
//  S O S S O S S O S S  O  S  S  O
//  0 1 2 3 4 5 6 7 8 9 10 11 12 13
// </pre>

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
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function marsExploration(s) {
  // Write your code here
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let letter = i % 3 === 1 ? 'O' : 'S';

    if (s.charAt(i) !== letter) count++;
  }
  return count;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = marsExploration(s);

  ws.write(result + '\n');

  ws.end();
}

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
s = "SOSTOT"

STD = "SOSSOS"
s   = "SOSTOT
return count //2
</pre> */
