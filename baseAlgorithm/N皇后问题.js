/* N皇后问题:
1.从第 0 行开始放皇后。
2.对每一列尝试放置：
   检查该列、主对角线、副对角线是否安全。
   如果安全，递归放置下一行。
3.如果到达第 N 行，说明找到一个解。
4.回溯，尝试其它可能性。
*/
function solveNQueens(n) {
    const result = [];
    const board=Array.from({length:n},()=>Array(n).fill('.'))
    const cols=new Set()
    const diag1=new Set()
    const diag2=new Set()
    function backtrack(row) {
        
    }
}