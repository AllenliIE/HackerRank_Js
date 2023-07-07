//Blog:https://www.allenliservice.site/hackerrank-js-week4-7-minimum-absolute-difference-in-an-array/

// <strong>solution:</strong>
// 先用 sort() 將陣列排序由小到大，接著宣告變數 min 為無窮大(Infinity)，
// 這樣第一次比對時可以找到最小值，後續使用for迴圈遍歷陣列中的元素。
// 每次迭代中，獲取當前元素 curr 和下一個元素 next，並計算他們之間的絕對差 diff。
// 回傳 min 最小的絕對差。

// <strong>Code 1: BigO(n log n)</strong>
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
 * Complete the 'minimumAbsoluteDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function minimumAbsoluteDifference(arr) {
  // Write your code here
  arr.sort((a, b) => a - b);
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    const next = arr[i + 1];
    const diff = Math.abs(curr - next);
    if (diff < min) {
      min = diff;
    }
  }
  return min;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  const result = minimumAbsoluteDifference(arr);

  ws.write(result + '\n');

  ws.end();
}

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
arr = [-2, 2, 4]

curr = -2
next = 2
diff = Math.abs(curr - next) //|-2 - 2| = 4
diff < min //4 < Infinity
min = 4

curr = 2
next = 4
diff = Math.abs(curr - next) //|2 - 4| = 2
diff < min //2 < 4
min = 2

return min; //2
</pre>

 */
