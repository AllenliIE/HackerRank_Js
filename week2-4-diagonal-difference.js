//Blog:https://www.allenliservice.site/hackerrank-js-week2-4-diagonal-difference/

// <strong>solution:</strong>
// 先簡單列出「左到右的對角線」，接著列出「右到左的對角線」，
// 在用絕對值處理兩者相減，最後回傳該值。
// ex. 運用遍歷回圈的過程中，同步將左上與左下值加入對應的對角線中。

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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  // Write your code here

  let leftToRight = 0,
    rightToLeft = 0;

  for (let i = 0; i < arr.length; i++) {
    leftToRight += arr[i][i];
    rightToLeft += arr[arr.length - 1 - i][i];
  }

  return Math.abs(leftToRight - rightToLeft);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  let arr = Array(n);

  for (let i = 0; i < n; i++) {
    arr[i] = readLine()
      .replace(/\s+$/g, '')
      .split(' ')
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  const result = diagonalDifference(arr);

  ws.write(result + '\n');

  ws.end();
}

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
arr = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]
leftToRight = arr[0][0] + arr[1][1] + arr[2][2]
rightToLeft = arr[2][0] + arr[1][1] + arr[0][2]

leftToRight += arr[i][i]
rightToLeft += arr[arr.length - 1 - i][i]

leftTORight = 0
rightToLeft = 0

step.1 i = 0
leftToRight += arr[0][0] //0 + 11 = 11
rightToLeft += arr[3 - 1 - 0][0] = arr[2][0] //0 + 4 = 4

step.2 i = 1
leftToRight += arr[1][1] //11 + 5 = 16
rightToLeft += arr[3 - 1 - 1][1] //4 + 5 = 9

step.3 i = 2
leftToRight += arr[2][2] //16 + (-12) = 4
rightToLeft ++ arr[3 - 1 - 2][2] //9 + 10 = 19

return Math.abs(leftToRight - rightToLeft) //|4 - 19| = 15
</pre> */
