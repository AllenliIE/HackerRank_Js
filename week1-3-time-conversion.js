//Blog:https://www.allenliservice.site/hackerrank-js-week1-3-time-conversion/

// <strong>solution:</strong>
// 先了解 AM 與 PM 的時間轉換格式，將 PM 的部分進行分類後，額外增加 12，('12:00:00' 轉換成 '24:00:00'。)
// 再將 AM 的 '12:00:00' 轉換成 '00:00:00'。

// <strong>Code 1: BigO(n log n)</strong>
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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let checkAmPm = s.charAt(8),
        militaryTime = s.substring(0, 2)
  
    if (checkAmPm === "P" && militaryTime !== "12") {
        militaryTime = String(parseInt(militaryTime, 10) + 12);
    } else if (checkAmPm === "A" && militaryTime === "12") {
        militaryTime = "00";
    }
    
    return militaryTime + s.substring(2, 8);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
s = '12:01:00PM'

checkAmPm = 'P'
'12:01:00PM' => '12:01:00'
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
s = '12:01:00AM'


checkAmPm = 'A'
'12:01:00AM' => '00:01:00'
</pre> */