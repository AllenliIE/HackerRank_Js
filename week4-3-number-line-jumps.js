//Blog:https://www.allenliservice.site/hackerrank-js-week4-3-number-line-jumps/

// <strong>solution:</strong>
// 首先我們先了解 x1, v1, x2, v2 分別代表兩隻袋鼠的起始位置與速度。
// 接著我們計算兩隻袋鼠的相遇時間(meet = (x2 - x1) / (v1 - v2))，
// 並回傳是否相遇。

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
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  let meet = (x2 - x1) / (v1 - v2);

  if (meet === Math.round(meet) && meet > 0 && meet !== Infinity) {
    return 'YES';
  }

  return 'NO';
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

  const x1 = parseInt(firstMultipleInput[0], 10);

  const v1 = parseInt(firstMultipleInput[1], 10);

  const x2 = parseInt(firstMultipleInput[2], 10);

  const v2 = parseInt(firstMultipleInput[3], 10);

  const result = kangaroo(x1, v1, x2, v2);
  ws.write(result + '\n');

  ws.end();
}

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
x1 = 2
v1 = 1
x2 = 1
v2 = 2

meet = -1 / -1 //1

meet === Math.round(meet) //meet = 1 === Math.round(meet)
meet > 0 //meet = 1 > 0
meet !== Infinity //不等於無窮大

return "YES";
</pre> */
