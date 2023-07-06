//Blog:https://www.allenliservice.site/hackerrank-js-week4-6-tower-breakers/

// <strong>solution:</strong>
// 首先，這個塔的高度最少要移動一層，如果只剩一層，則第一個玩家無法移動，所以第二個玩家獲勝。
// 接著，如果 n 個塔為二的倍數，則第二個玩家會剛好把塔破壞結束，則第一個玩家無法動作。
// 剩餘狀況皆為第一個玩家勝利。

// <strong>Code 1: BigO(1)</strong>
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
 * Complete the 'towerBreakers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 */

function towerBreakers(n, m) {
  // Write your code here
  if (m <= 1) return 2;
  if (n % 2 === 0) return 2;
  return 1;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const t = parseInt(readLine().trim(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const result = towerBreakers(n, m);

    ws.write(result + '\n');
  }

  ws.end();
}

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
n = 2, m = 6

m <= 1 //m = 6 
n % 2 === 0 //2 % 2 === 0 return 2;
</pre>
 */
