//Blog:https:https://www.allenliservice.site/hackerrank-js-week2-3-flipping-bits/

// <strong>solution:</strong>
// 我們將 input 的 n 運用以下方法進行翻轉後回傳：
// - ~n：使用位元反轉操作符號 ~，將數字 n 的位元進行翻轉。位元反轉會將每個位元的 0 變成 1，1 變成 0。
// - >>>：使用無符號右位移操作符號 >>>，將位元反轉後的結果向右位移 0 個位元，但因比較的數為 0，故不改變結果，但這個操作可以確保結果是一個正整數。
// <pre style='background-color:#ggg'>
// const a = 5;          //  00000000000000000000000000000101
// const b = 0;          //  00000000000000000000000000000000
// console.log(a >>> b) //5
// </pre>
// - 0：將結果強制轉換為無符號 32 位元整數，以確保結果的位元表示是 32 位元。

// 這段程式碼的效果是將輸入的數字 n 的位元進行翻轉，並返回翻轉後的結果。注意，翻轉後的結果是一個無符號的 32 位元整數。

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
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

function flippingBits(n) {
    // Write your code here
    return ~n >>> 0;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine().trim(), 10);

        const result = flippingBits(n);

        ws.write(result + '\n');
    }

    ws.end();
}

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
n = 1        //00000000000000000000000000000001
~n           //11111111111111111111111111111110 
0 (32-bits)  //00000000000000000000000000000000

return 4294967294
</pre> */