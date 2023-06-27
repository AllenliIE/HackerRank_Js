//Blog:https://www.allenliservice.site/hackerrank-js-week3-5-migratory-birds/

// <strong>solution:</strong>
// 先建立陣列的 key of value 的 hashTable 表，
// 透過遍歷 id 的過程中將配對數量最多，且數字(key)最小的值儲存起來，
// 最後回傳該值。

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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
  // Write your code here
  let hashTable = {},
    minId = 0,
    max = 0;

  for (let i = 0; i < arr.length; i++) {
    hashTable[arr[i]] = (hashTable[arr[i]] || 0) + 1;
  }

  for (let id in hashTable) {
    if (hashTable[id] > max) {
      max = hashTable[id];
      minId = id;
    } else if (hashTable[id] === max) {
      if (id < minId) minId = id;
    }
  }

  return minId;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const arrCount = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  const result = migratoryBirds(arr);

  ws.write(result + '\n');

  ws.end();
}

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
arr = [1, 1, 2, 2, 3] 

hashTable = {
              "1": 2,
              "2": 2,
              "3": 1 
            }
minId = 0
max = 0

hashTable[id] > max //2 > 0
max = hashTable[id] //max = 2
minId = id //1

hashTable[id] = max //2 = 2
id < minId //2 > 1

hashTable[id] > max //1 < 2

return minId; //1
</pre> */
