//Blog:https://www.allenliservice.site/hackerrank-js-week3-8-drawing-book/

// <strong>solution:</strong>
// 這裡要特別注意，題目再給予的規範內希望找到「從前面」、「從後面」翻頁到指定的數字，
// 所以考量以上兩個方式中，可以用最小的頁數達到目標為最後的回傳值。

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
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
  // Write your code here
  const fromFront = Math.floor(p / 2);
  const fromBack = Math.floor(n / 2) - fromFront;

  return Math.min(fromFront, fromBack);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const p = parseInt(readLine().trim(), 10);

  const result = pageCount(n, p);

  ws.write(result + '\n');

  ws.end();
}

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
n = 5,
p = 3

book = [0, 1, 2, 3 , 4 ,5]

fromFront = Math.floor(p / 2) = 1.5 => 1
fromBack = Math.floor(n / 2) - fromFront = 2 - 1 = 1
return Math.min(fromFornt, fromBack) //1
</pre> */
