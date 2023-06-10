//Blog:https://www.allenliservice.site/hackerrank-js-week1-5-camel-case-4/

// <strong>solution:</strong>
// 先宣告 arr 為將 input 轉成陣列，如下：
// <pre style='background-color:#ggg'>
// [
//   'S;V;iPad',
//   'C;M;mouse pad',
//   'C;C;code swarm',
//   'S;C;OrangeHighlighter'
// ]

// 這裡有一個小細節，因為題目給的 input 是連續 6 個待判斷的字串，
// 所以用 '\r\n' 來判斷 Enter 後的結果做分割，而‘\r’是回車，’\n’是換行。
// </pre>
// 接著宣告 upper 為將單詞第一個字母大寫，
// 而 lower 為將單詞第一個字母小寫。
// 運用 for 迴圈開始處理 arr 中的每個元素：
// - 使用解構賦值的做法將 element 中的字串用 split(';') 提取出來，分別為[sc, mcv, name]。
// - 宣告 checkOperation 變數為 sc === 'S' ，如為 true，則代表要拆分，如為 false，則代表要合併。
// - 宣告 checkName 變數，先判斷 checkOperation 是否為 ture，接著運用正則表達式(/(?=[A-Z])/)進行大寫字母前的分割，如為 false，則在大寫字母前使用空格' '。在 map 陣列依序放入元素時，判斷是否需使用lower 或 upper 的大小寫，以及運用 join()合併時是否需要空格。
// - 如果 mcv 為 'M'，則配合 method 的需求在單詞尾部加入()。
// - 如果 mcv 為 'C'，則配合 class 的需求單詞需小寫。
// - 印出 checkName。
 

<strong>Code 1: BigO(n)</strong>
function processData(input) {
    //Enter your code here
    const arr = input.split('\r\n')
    const upper = word => word.charAt(0).toUpperCase() + word.slice(1)
    const lower = word => word.charAt(0).toLowerCase() + word.slice(1)
    for (let element of arr) {
        const [sc, mcv, name] = element.split(';')
        const checkOperation = sc === 'S'
        let checkName = name.split(checkOperation ? (/(?=[A-Z])/) : ' ').map(checkOperation ? lower : upper).join(checkOperation ? ' ' : '')
        if (mcv === 'M') checkName = checkOperation ? checkName.slice(0, -2) : checkName + '()'
        if (mcv !== 'C') checkName = lower(checkName)
        console.log(checkName)
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>

S;M;plasticCup() //plastic cup
C;V;mobile phone //mobilePhone
C;C;coffee machine //CoffeeMachine
S;C;LargeSoftwareBook //large software book
C;M;white sheet of paper //whiteSheetOfPaper()
S;V;pictureFrame //picture frame
</pre> */