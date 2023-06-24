//Blog:https://www.allenliservice.site/hackerrank-js-week3-3-xor-strings-3/

// <strong>solution:</strong>
// 這題要注意，程式碼來源似乎有誤，導致無法正常地送出答案。
// 將兩行的字串透過正規表達式拆開成兩個陣列，
// 依序判斷如果兩個陣列中的元素相同("1" === "1", "0" === "0")時，則執行 XOR 邏輯得到 "0"。
// 如果兩者不相同("1" === "0", "0", "1")，則回傳 "1"。
// 最後回傳結果。

// <strong>Code 1: BigO(n)</strong>
process.stdin.resume();
process.stdin.setEncoding('ascii');
var input = '';
process.stdin.on('data', function (chunk) {
  input += chunk;
  console.log(chunk.split('\n')[0] ^ chunk.split('\n')[1]);
});
process.stdin.on('end', function () {
  // now we can read/parse input
});

//This test did not work.
function xorstring(a, b) {
  let result = '';
  for (let i = 0; i < a.length; i++) {
    a[i] === b[i] ? (result += '0') : (result += '1');
  }
  return result;
}

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
input = 
"10101"
"00101"


10101
00101
-----
10000
</pre> */
