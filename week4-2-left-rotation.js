//Blog:https://www.allenliservice.site/hackerrank-js-week4-2-left-rotation/

// <strong>solution:</strong>
// 運用 javascript 的原生語法函式將陣列元素進行指定位置的切割，
// 最後用 concat 來重新組合兩個陣列。

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
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function rotateLeft(d, arr) {
  // Write your code here
  const array = [...arr];
  const fisrtPart = array.slice(0, d);
  const secondPart = array.slice(d);
  return secondPart.concat(fisrtPart);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

  const n = parseInt(firstMultipleInput[0], 10);

  const d = parseInt(firstMultipleInput[1], 10);

  const arr = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  const result = rotateLeft(d, arr);

  ws.write(result.join(' ') + '\n');

  ws.end();
}

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
d = 2
array = [1, 2, 3, 4, 5]

fisrtPart = array.slice(0, d) //array.slice(0, 2) [1, 2]
secondPart = array.slice(d) //array.slice(2) [3, 4, 5]

return secondPart.concat(fisrtPart) //[3, 4, 5, 1, 2]
</pre> */
