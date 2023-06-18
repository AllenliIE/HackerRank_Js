//Blog:https://www.allenliservice.site/hackerrank-js-week2-5-counting-sort-1/

// <strong>solution:</strong>
// 這題要先注意題目給予的陣列範圍，也就是規格給定的陣列元素有幾個，
// 先運用 new Array(100).fill(0) 建立陣列中 100 個元素，並給予對應的值 0。
// 接著運用 for 迴圈遍歷 input 的數值，如符合則在陣列對應的元素位置做 +1 的動作。
// 最後，回傳這個計算頻率次數的陣列。

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
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
  // Write your code here
  let frequencyArray = new Array(100).fill(0);
  for (let num of arr) {
    frequencyArray[num]++;
  }
  return frequencyArray;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  const result = countingSort(arr);

  ws.write(result.join(' ') + '\n');

  ws.end();
}

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
arr = [1,1,3,2,1]
frequencyArray = new Array(100).fill(0) //[0,0,0,0,....,0,0]

[0,1,2,3...98,99]

1 [0,1,0,0...0,0]
1 [0,2,0,0...0,0]
3 [0,2,0,1...0,0]
2 [0,2,1,1...0,0]
1 [0,3,1,1...0,0]
</pre> */
