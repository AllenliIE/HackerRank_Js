//Blog:https://www.allenliservice.site/hackerrank-js-week3-7-zig-zag-sequence/

// <strong>solution:</strong>
// 這題要注意，題目輸入的格式有點問題，我嘗試用"\n"來處理空行的字串分割，
// 也將題目給的陣列還原，而且最後的答案正確，可惜最後無法 submit 成功，我調整至replit來完成。
// 首先要完成曲線數列，我們就先將數列用 sort() 來進行排序，
// 確定由小到大之後，透過將數列砍半的動作，將前面一半依序放入(ASC)，並將後半段倒著放入(DESC)，即可完成。

// <strong>Code 1: BigO(n)</strong>
function processData(arr) {
  //Enter your code here
  let arr_len = arr.length;
  let new_arr = [];

  arr.sort((a, b) => a - b);

  for (let i = 0; i < Math.floor(arr_len / 2); i++) {
    new_arr.push(arr[i]);
  }
  for (let i = arr_len - 1; i >= Math.floor(arr_len / 2); i--) {
    new_arr.push(arr[i]);
  }
  console.log(new_arr.join(' ').trim());
}

console.log(processData([1, 2, 3, 4, 5, 6, 7]));

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
arr = [1,2,3,4,5,6,7]

first for loop
new_arr = [ 1, 2, 3 ]

second for loop
new_arr = [
            1, 2, 3, 7,
            6, 5, 4
          ]

return 1 2 3 7 6 5 4
</pre> */
