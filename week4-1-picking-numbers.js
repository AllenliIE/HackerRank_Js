//Blog:https://www.allenliservice.site/hackerrank-js-week4-1-picking-numbers/

// <strong>solution:</strong>
// 為了有效率的找出數差為 1 的元素數量，我們先做升冪排序，
// 然後在遍歷陣列的過程中，找到符合條件的最長子陣列的元素數量，
// 最後返回該數量。

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
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
  // Write your code here
  a.sort((a, b) => a - b);
  let max = 0,
    s = 0;

  for (let i = 1; i < a.length; i++) {
    if (Math.abs(a[s] - a[i]) <= 1) {
      max = Math.max(max, i - s + 1);
    } else {
      s = i;
    }
  }
  return max;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const a = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((aTemp) => parseInt(aTemp, 10));

  const result = pickingNumbers(a);

  ws.write(result + '\n');

  ws.end();
}

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
a = [1, 1, 2, 2, 4, 4, 5, 5, 5] //finished sort

i = 1
Math.abs(a[0] - a[1]) <= 1 //1 - 1 = 0
max = Math.max(0, 1 - 0 + 1) // 2 

i = 2
Math.abs(a[0] - a[2]) <= 1 //1 - 2 = |-1|
max = Math.max(2, 2 - 0 + 1) // 3 

i = 3
Math.abs(a[0] - a[3]) <= 1 //1 - 2 = |-1|
max = Math.max(3, 3 - 0 + 1) // 4

i = 4
Math.abs(a[0] - a[4]) > 1 //1 - 4 = |-3| 
s = i // 4

i = 5
Math.abs(a[4] - a[5]) <= 1 //4 - 4 = |0|
max = Math.max(4, 5 - 4 + 1) // 2

i = 6
Math.abs(a[4] - a[6]) <= 1 //4 - 5 = |-1|
max = Math.max(4, 6 - 4 + 1) // 3

i = 7
Math.abs(a[4] - a[7]) <= 1 //4 - 5 = |-1|
max = Math.max(4, 7 - 4 + 1) // 4

i = 8
Math.abs(a[4] - a[8]) <= 1 //4 - 5 = |-1|
max = Math.max(4, 8 - 4 + 1) // 5

return max; //5
</pre>
 */
