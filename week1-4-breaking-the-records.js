//Blog:https://www.allenliservice.site/hackerrank-js-week1-4-breaking-the-records/

// <strong>solution:</strong>
// 先假設 scores 陣列中第 0 個位置的數值為基準點，並以 maxCount 與 minCount 作為打破最高、最低分的次數紀錄。
// 運用 for 迴圈遍歷 scores 陣列中的元素，判斷高於基準點則 maxCount += 1，低於基準點則 minCount += 1，
// 同時更新 maxmimum 與 minimum 的分數，並將打破次數放入陣列中後回傳。

// <strong>Code 1: BigO(n)</strong>
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
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    // Write your code here
    let maxmimum = scores[0],
        minimum = scores[0],
        maxCount = 0,
        minCount = 0
    
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > maxmimum) {
            maxmimum = scores[i]
            maxCount += 1
        } else if (scores[i] < minimum) {
            minimum = scores[i]
            minCount += 1
        }
    }
    return [maxCount, minCount];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const scores = readLine().replace(/\s+$/g, '').split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
scores = [12, 24, 10, 24]
scores[0] = 12

// scores[0] = 12
Maximum = 12, Minimum = 12, maxCount = 0, minCount = 0
// scores[1] = 24
Maximum = 24, Minimum = 12, maxCount = 1, minCount = 0
// scores[2] = 10
Maximum = 24, Minimum = 10, maxCount = 1, minCount = 1
// scores[3] = 24
Maximum = 24, Minimum = 10, maxCount = 1, minCount = 1

return [maxCount, minCount]; //[1, 1]
</pre> */