//Blog:https://www.allenliservice.site/hackerrank-js-week3-6-maximum-perimeter-triangle/

// <strong>solution:</strong>
// 題目希望我們找出最大邊的三角形，所以可以先用升冪排序來有效的找出答案。
// 接著我們的迴圈可以從後面三個一組開始找起，並且確認判斷三角形規則(a + b > c)是否正確，
// 如果符合則回傳該三邊長的陣列，如無法找到符合的結果，則回傳[-1]。

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
 * Complete the 'maximumPerimeterTriangle' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY sticks as parameter.
 */

function maximumPerimeterTriangle(sticks) {
  // Write your code here
  sticks.sort((a, b) => a - b);

  for (let i = sticks.length; i > 2; i--) {
    let triangle = sticks.slice(i - 3, i);
    let [a, b, c] = triangle;
    let isNonDegenerate = a + b > c;

    if (isNonDegenerate) return triangle;
  }
  return [-1];
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const sticks = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((sticksTemp) => parseInt(sticksTemp, 10));

  const result = maximumPerimeterTriangle(sticks);

  ws.write(result.join(' ') + '\n');

  ws.end();
}

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
sticks = [1, 2, 3, 4, 5, 10]

[i - 3, i] //3, 6
triangle = [ 4, 5, 10 ]
[i - 3, i] //2, 5
triangle = [ 3, 4, 5 ]

return triangle; //[ 3, 4, 5 ]
</pre> */
