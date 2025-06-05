// HTML要素を取得
const myText = document.getElementById("myText");
const changeButton = document.getElementById("changeButton");

// ボタンがクリックされた時の処理
changeButton.addEventListener("click", () => {
  // テキストの内容を変更
  myText.textContent = "テキストがJavaScriptによって変更されました！";
  myText.style.color = "#7fffd4"; // スタイルも変更
});
