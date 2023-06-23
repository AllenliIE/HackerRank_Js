//Blog:https://www.allenliservice.site/hackerrank-js-week3-1-permuting-two-arrays/

// <strong>solution:</strong>
// 仔細看可以發現題目希望的是 A 升冪排序與 B 降冪排序後，兩者相同的 index 位置進行加總須 >= k。
// 而反向思考，如果陣列元素執行回圈時，只要其中一個不符合則回傳 NO，那就代表執行回圈中的次數都需要正確，
// 才可以回傳 YES。

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
 * Complete the 'twoArrays' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 *  3. INTEGER_ARRAY B
 */

function twoArrays(k, A, B) {
  // Write your code here
  let a = A.sort((a, b) => b - a);
  let b = B.sort((a, b) => a - b);

  for (let i = 0; i < a.length; i++) {
    if (a[i] + b[i] < k) return 'NO';
  }
  return 'YES';
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine().trim(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const A = readLine()
      .replace(/\s+$/g, '')
      .split(' ')
      .map((ATemp) => parseInt(ATemp, 10));

    const B = readLine()
      .replace(/\s+$/g, '')
      .split(' ')
      .map((BTemp) => parseInt(BTemp, 10));

    const result = twoArrays(k, A, B);

    ws.write(result + '\n');
  }

  ws.end();
}

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
A = [0, 1]
B = [0, 2]
k = 1

a = [1, 0]
b = [0, 2]

a[0] + b[0] = 1 + 0 = 1 //>= k 
a[1] + b[1] = 0 + 2 = 2 //>= k
return "YES";
</pre>
 */
