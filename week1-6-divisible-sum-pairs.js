//Blog:https://www.allenliservice.site/hackerrank-js-week1-6-divisible-sum-pairs/

// <strong>solution:</strong>
// 運用雙重 for 迴圈來將 ar 陣列中的元素，依序透過加總來確認是否可以被 k 整除。

// <strong>Code 1: BigO(n^2)</strong>
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
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let counter = 0
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            let sum = ar[i] + ar[j]
            if (sum % k === 0) {
                counter++
            }
        }
    }
    
    return counter;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = divisibleSumPairs(n, k, ar);

    ws.write(result + '\n');

    ws.end();
}

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
ar = [1, 2, 3, 4, 5, 6]
k = 5

counter = 0
sum = ar[i] + ar[j]

ar[0] + ar[3] = 1 + 4 = 5
counter++ //1

ar[1] + ar[2] = 2 + 3 = 5
counter++ //2

ar[3] + ar[5] = 4 + 6 = 10
counter++ //3

return counter; //3
</pre> */

// <strong>Code 1: BigO(n)</strong>
function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let count = {}, 
        counter = 0
    
    for (let i = 0; i < n; i++) {
        let remainder = ar[i] % k
        let complement = (k - remainder) % k
        
        if (count[complement]) {
            counter += count[complement]
        }
        
        count[remainder] = count[remainder] ? count[remainder] + 1 : 1
    }
    return counter; 
}