document.getElementById("btn").onclick = function() {
  setTimeout(() => {
    console.log(document.getElementById("text").innerHTML = "ボタンをクリックしました");
  },2000);
};