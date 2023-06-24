//Blog:https://www.allenliservice.site/hackerrank-js-week3-2-subarray-division-2/

// <strong>solution:</strong>
// 要注意連續 m 塊的總和等於 d，我們可以在遍歷回圈的過程中，
// 透過 slice() 選取需處理的陣列範圍，並對這個範圍的整數使用 reduce() 的累加動作，
// 來確認連續數值的總和是否等於 d。

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
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
  // Write your code here
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (s.slice(i, i + m).reduce((acc, cur) => acc + cur) === d) {
      result++;
    }
  }

  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const s = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((sTemp) => parseInt(sTemp, 10));

  const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

  const d = parseInt(firstMultipleInput[0], 10);

  const m = parseInt(firstMultipleInput[1], 10);

  const result = birthday(s, d, m);

  ws.write(result + '\n');

  ws.end();
}

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
s = [2,2,1,3,2]
d = 4
m = 2

2 + 2 = 4 //count++
2 + 1 = 3
1 + 3 = 4 //count++
3 + 2 = 5

return count //2
</pre> */
