//Blog:https://www.allenliservice.site/hackerrank-js-week1-2-mini-max-sum/

// <strong>solution:</strong>
// 先將 arr 中的陣列由大到小排序( sort((a, b) => a - b) )
// 在 for 迴圈遍歷 arr 陣列中每個 element 時，
// minimum 取前四個(i < arr.length - 1)，
// maximum 取後四個(i > 0)，
// 將結果印出。

// <strong>Code 1: BigO(n log n)</strong>
'use strict';

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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    let minimum = 0, maximum = 0

    arr.sort((a, b) => a - b)
    
    for (let i = 0; i < arr.length; i++) {
        if (i < arr.length - 1) {
            minimum += arr[i]
        }
        if (i > 0) {
            maximum += arr[i]
        }
    }
    console.log(minimum, maximum);
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
arr = [1, 3, 5, 7, 9]

arr[i], minimum = 0, maximum = 0
1, minimum = 1, maximum = 0
3, minimum = 4, maximum = 3
5, minimum = 9, maximum = 8
7, minimum = 16, maximum = 15
9, minimum = 16, maximum = 24
</pre> */
