//Blog:https://www.allenliservice.site/hackerrank-js-week2-2-grading-students/

// <strong>solution:</strong>
// 遍歷 grades 陣列中的元素，依據以下條件：
// - 如果分數小於 38，則 continue。
// - 如果分數除以 5 後的餘數為 3，則代表該分數 + 2 會剛好等於 5 的倍數。
// - 如果分數除以 5 後的餘數為 4，則代表該分數 + 1 會剛好等於 5 的倍數。
// 回傳 grades 陣列。

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
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Write your code here
    for (let i = 0; i < grades.length; i++) {
        
        //grades < 38, return
        if (grades[i] < 38){
            continue;
        } else {
            let temp = grades[i]
            let remainder = grades[i] % 5
            
            //grades % 5 < 3, remove 5 multiple
            if (remainder === 3) {
                temp = temp + 2
                grades[i] = temp   
            } else if (remainder === 4) {
                temp = temp + 1
                grades[i] = temp
            }
        }
    }
    return grades;
}
    

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
grades = [73, 67, 38, 33]

73 % 5 = 3 //73 + 2 = 75
67 % 5 = 2 //67
38 //38
33 //33

return [75, 67, 40, 33];
</pre> */