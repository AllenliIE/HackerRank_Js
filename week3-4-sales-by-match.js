//Blog:https://www.allenliservice.site/hackerrank-js-week3-4-sales-by-match/

// <strong>solution:</strong>
// 建立一個 hashTable 物件，將所有 ar 中的種類與次數放入 key of value。
// 根據這個物件表將 value 的值大於 2 的次數做加總。
// ex.奇數的部分，如無法成對，則省略不計。

// <strong>Code 1: BigO(m + n)</strong>
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
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
  // Write your code here
  let hashTable = {},
    count = 0;

  for (let i = 0; i < n; i++) {
    hashTable[ar[i]] = (hashTable[ar[i]] || 0) + 1;
  }

  for (let num in hashTable) {
    if (hashTable[num] >= 2) {
      count = count + parseInt(hashTable[num] / 2);
    }
  }

  return count;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const ar = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((arTemp) => parseInt(arTemp, 10));

  const result = sockMerchant(n, ar);

  ws.write(result + '\n');

  ws.end();
}

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
ar = [1, 2, 1, 2, 1, 3, 2]

hashTable = {
    "1": 3,
    "2": 3,
    "3": 1
}

"1" => 3 / 2 = 1.5, parseInt(1.5) = 1 //count += 1
"2" => 3 / 2 = 1.5, parseInt(1.5) = 1 //count += 1
"3" => 1 / 2 = 0.5, parseInt(0.5) = 0 //count
return count; //2
</pre> */
