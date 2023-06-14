//Blog:https://www.allenliservice.site/hackerrank-js-week2-1-lonely-integer/

// <strong>solution:</strong>
// 先宣告一個空的物件叫做 hashTable，並將題目給的 a 當作 key 放入，
// 接著將 key 出現的次數記錄到物件中key 對應的 value，
// 最後判斷 value 為 1 的 key 進行回傳。

// <strong>Code 1: BigO(2n)</strong>
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
    // Write your code here    
    let hashTable = {}
    
    for (let i = 0; i < a.length; i++) {
        hashTable[a[i]] = (hashTable[a[i]] || 0) + 1
    }
    for (let value in hashTable) {
        if (hashTable[value] === 1) return value;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = lonelyinteger(a);

    ws.write(result + '\n');

    ws.end();
}

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
a = [1, 2, 3, 4, 3, 2, 1]

hashTable = {
  '1' : 2,
  '2' : 2,
  '3' : 2,
  '4' : 1
}

hashTable[4] = 1 === 1
return 4;
</pre> */