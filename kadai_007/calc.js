// 変数numにランダムな整数を代入する
let num = Math.floor(Math.random()*100);

// 変数numの値を出力する（確認用）
console.log(num);

// 変数numの値が15の倍数であれば「3と5の倍数です」文字列を出力する
if (num %15 === 0) {
  console.log('3と5の倍数です')
} 
else if (num %3 === 0) {
  console.log('3の倍数です')
} 
else if (num %5 === 0) {
  console.log('5の倍数です')
}

else {
  console.log(num);
}