//Blog:https://www.allenliservice.site/hackerrank-js-week4-5-closest-numbers/

// <strong>solution:</strong>
// 先將 input 進行排序，透過每遍歷陣列中的元素時，
// 接著判斷程式碼中前後兩者是否為最接的近數對。
// 如果差異小於或等於當前的最小值 min，則將這兩個數字加入到 newArray 中。
// 最後，回傳 newArray，其中包含了最接近的數對。

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
 * Complete the 'closestNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function closestNumbers(arr) {
  // Write your code here
  let sortArray = arr.sort((a, b) => a - b);
  let newArray = [];
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < sortArray.length; i++) {
    let diff = sortArray[i + 1] - sortArray[i];

    if (diff <= min) {
      if (diff < min) newArray = [];
      min = diff;
      newArray.push(sortArray[i], sortArray[i + 1]);
    }
  }
  return newArray;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  const result = closestNumbers(arr);

  ws.write(result.join(' ') + '\n');

  ws.end();
}

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
arr = [5, 2, 3, 4, 1]
sortArray = [1, 2, 3, 4, 5].

(1, 2) diff = 1
(2, 3) diff = 1
(3, 4) diff = 1
(4, 5) diff = 1

return [1, 2, 2, 3, 3, 4, 4, 5];
</pre> */
