//Blog:https://www.allenliservice.site/hackerrank-js-week1-1-plus-minus/

// <strong>solution:</strong>
// 宣告 positive, negative, zero 為 0。(number)
// 運用 for 迴圈來遍歷題目給予的 array，同時運用 if 判斷來進行分類與計次數。
// 將 positive, negative, zero 三者除與原先陣列的長度得到比例。
// 印出這三個數值，並取到小數點第六位。

// <strong>Code 1: BigO(n)</strong>
'use strict';

//標準輸入流(stdin)，並設定編碼為UTF-8。
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

//累計使用者輸入的字數。
process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

//根據換行符 \n 進行分割，以將每行輸入分開，並將結果存入一個陣列中。
process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

//回傳先前的 inputString 陣列中逐行讀取輸入，且將 currentLine 變數增加1。
function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let positive = 0, negative = 0, zero = 0
    
    //for loop(arr.length)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive++
        } else if (arr[i] < 0) {
            negative++
        } else {
            zero++
        }
    }
    
    const positiveRate = positive / arr.length
    const negativeRate = negative / arr.length
    const zeroRate = zero / arr.length
    
    console.log(positiveRate.toFixed(6))
    console.log(negativeRate.toFixed(6))
    console.log(zeroRate.toFixed(6))        
}

//讀取使用者輸入的陣列長度和陣列元素，並呼叫 plusMinus 函式來計算並印出正數、負數和零的比例。
function main() {
    //將輸入的內容移除空白，並用 parseInt(x, 10) 取十進制。
    const n = parseInt(readLine().trim(), 10);
    //使用 replace(/\s+$/g, '') 刪除字串末尾的空格，接著 split(' ') 將字串以空格分割成字串陣列。最後，使用 map 方法將每個字串轉換為整數，得到了一個整數陣列 arr。
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
arr = [1, 1, 0, -1, -1]
arr.length = 5
positive = 0, negative = 0, zero = 0

positive = 1, negative = 0, zero = 0
positive = 2, negative = 0, zero = 0
positive = 2, negative = 0, zero = 1
positive = 2, negative = 1, zero = 1
positive = 2, negative = 2, zero = 1

positiveRate = positive / arr.length // 2 / 5 = 0.4
negativeRate = negative / arr.length // 2 / 5 = 0.4
zeroRate = zero / arr.length // 2 / 5 = 0.4
</pre> */