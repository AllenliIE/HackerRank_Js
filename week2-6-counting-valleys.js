//Blog:https://www.allenliservice.site/hackerrank-js-week2-6-counting-valleys/

// <strong>solution:</strong>
// 先將 path 陣列中的上下坡進行切割成單一步數，並宣告 count 步數與 valley 山谷數量。
// 在遍歷迴圈的過程中，當水平線往下坡走時，則山谷數量 +1。
// 過程中的 count 步數會計算 上坡+1 與 下坡 -1，以確保回到水平位置時(count = 0)，再次出現山谷的次數做累加。

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
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
  // Write your code here
  let arrOfString = path.split('');
  let count = 0,
    valley = 0;

  for (let i = 0; i < steps; i++) {
    if (count === 0 && arrOfString[i].toLowerCase() === 'd') {
      count -= 1;
      valley += 1;
    } else if (arrOfString[i].toLowerCase() === 'd') {
      count -= 1;
    } else {
      count += 1;
    }
  }
  return valley;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const steps = parseInt(readLine().trim(), 10);

  const path = readLine();

  const result = countingValleys(steps, path);

  ws.write(result + '\n');

  ws.end();
}

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
steps = 8, path = [DDUUUUDD]

step.1 i = 0, count = 0
path = D
count -= 1 //count = -1
valley += 1 

step.2 i = 1, count = -1
path = D
count -= 1 //count = -2

step.3 i = 2, count = -2
path = U
count += 1 //count = -1

step.4 i = 3, count = -1
path = U
count += 1 //count = 0

step.5 i = 4, count = -1
path = U
count += 1 //count = 1
 
step.6 i = 5, count = -1
path = U
count += 1 //count = 2

step.7 i = 6, count = -1
path = D
count -= 1 //count = 1

step.8 i = 7, count = -1
path = D
count -= 1 //count = 0

return valley //1
</pre> */
