//Blog:https://www.allenliservice.site/hackerrank-js-week1-7-sparse-arrays/

// <strong>solution:</strong>
// 先建立 hashTable 物件來紀錄 string 陣列中的字串與次數，
// 在運用 for 迴圈來將符合 queries 中字串的次數更新到 result 陣列中。

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
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */

function matchingStrings(strings, queries) {
    // Write your code here
    let hashTable = {},
        results = []
    
    for (let i = 0; i < strings.length; i++) {
        hashTable[strings[i]] = (hashTable[strings[i]] || 0) + 1
    }

    for (let j = 0; j < queries.length; j++) {
        if (hashTable[queries[j]]) {
            results[j] = hashTable[queries[j]]
        } else {
            results[j] = 0
        }
    }
    
    return results;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const stringsCount = parseInt(readLine().trim(), 10);

    let strings = [];

    for (let i = 0; i < stringsCount; i++) {
        const stringsItem = readLine();
        strings.push(stringsItem);
    }

    const queriesCount = parseInt(readLine().trim(), 10);

    let queries = [];

    for (let i = 0; i < queriesCount; i++) {
        const queriesItem = readLine();
        queries.push(queriesItem);
    }

    const res = matchingStrings(strings, queries);

    ws.write(res.join('\n') + '\n');

    ws.end();
}

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
console.log(matchingStrings(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc']));

hashTable = { ab: 2, abc: 1 }

result = []
result = [ 2 ]
result = [ 2, 1 ]
result = [ 2, 1, 0 ]
</pre> */
