目的：今後 TypeScript や React にスケールする為の準備段階
使用技術： JavaScript/CSS/HTML

このコードは、ウェブページにテキストを表示し、ボタンをクリックするとそのテキストが JavaScript によって変更されるシンプルな例です。HTML、CSS、JavaScript の 3 つの部分に分かれています。

<h1>HTML (ウェブページの構造)</h1>
HTML はウェブページの骨組みを定義します。

- <!DOCTYPE html>: これはHTML5という最新のHTMLのバージョンを使っていることを宣言しています。
- <html lang="ja">: このページが日本語で書かれていることを示しています。
- <head>: ウェブページの設定情報が含まれています。
  * <meta charset="UTF-8" />: 文字化けを防ぐために、文字コードをUTF-8に設定しています。
  * <meta name="viewport" content="width=device-width, initial-scale=1.0" />: スマートフォンなどの小さい画面でも見やすくするための設定です。
  * <title>Javascriptでテキスト変更してみよう</title>: ブラウザのタブに表示されるページのタイトルです。
  * <link rel="stylesheet" href="style.css" />: style.cssというファイルに書かれたデザイン（CSS）をこのページに適用することを指定しています。
- <body>: ウェブページに実際に表示される内容が書かれています。
     * <div class="box">JavaScriptでテキストを変更しよう</div>: "box"というクラスが設定された四角い領域です。中に「JavaScriptでテキストを変更しよう」というテキストが表示されます。
     * <div>:
       * <p id="myText">ここにあるテキストが変化します。</p>: "myText"というIDが設定された段落です。初期状態では「ここにあるテキストが変化します。」と表示されています。JavaScriptでこのテキストを変更します。
       * <button id="changeButton">テキストを変更</button>: "changeButton"というIDが設定されたボタンです。クリックするとテキストが変更されます。
       * <script src="script.js"></script>: script.jsというファイルに書かれたJavaScriptのコードをこのページに読み込み、実行することを指定しています。

  <h1>CSS (ウェブページのデザイン)</h1>
  CSS は HTML 要素の見た目を整えます。

- body: ページ全体のスタイルを設定しています。
  - width: 100%; height: 100vh;: ページ全体の幅を 100%、高さを画面の高さと同じにしています。
  - background: url(img/Tasty_HotTea2025_4.png) no-repeat;: 背景に画像を表示し、画像を繰り返さないようにしています。
  - background-size: cover;: 背景画像が画面全体を覆うように拡大・縮小されます。
  - font-family: Arial, sans-serif;: テキストのフォントを Arial、もしなければ一般的なゴシック体にします。
  - text-align: center;: ページ内のテキストを中央揃えにします。
  - margin-top: 50px;: ページの上部に 50 ピクセルの余白を設定しています。
- #myText: "myText"という ID が設定された要素（<p>タグ）のスタイルです。

  - font-size: 24px;: 文字のサイズを 24 ピクセルにします。
  - color: #6495ed;: 文字の色を水色（コーンフラワーブルー）にします。
  - margin-bottom: 20px;: 下に 20 ピクセルの余白を設定しています。

    <h3>Button (ボタンのデザイン)</h3>
    ボタンの見た目を設定しています。

- button: ボタン自体のスタイルです。
  - padding: 10px 20px;: ボタンの内側の余白を設定しています（上下 10px、左右 20px）。
  - font-size: 16px;: 文字のサイズを 16 ピクセルにします。
  - cursor: pointer;: マウスカーソルをボタンの上に重ねると、指の形に変わります。
  - background-color: #007bff;: ボタンの背景色を青色にします。
  - color: white;: 文字の色を白色にします。
  - border: none;: ボタンの枠線をなくします。
  - border-radius: 5px;: ボタンの角を丸くします。
- button:hover: マウスカーソルがボタンの上に重なった時のスタイルです。

  - background-color: #0056b3;: 背景色が少し濃い青色に変わります。

    <h3>Box (箱のデザイン)</h3>
    div タグに設定された"box"クラスのスタイルです。特殊なエフェクトが含まれています。

- .box: "box"クラスの基本的なスタイルです。
  - width: 720px; height: 480px;: 幅 720 ピクセル、高さ 480 ピクセルの四角い箱にします。
  - margin: 13% auto 0;: 上に画面の 13%の余白、左右は自動で中央揃え、下は 0 の余白を設定します。
  - display: flex; align-items: center; justify-content: center;: 箱の中のコンテンツを中央に配置するための設定です。
  - color: #ffdead;: 文字の色を白色にします。
  - font-size: 32px; font-weight: bold;: 文字のサイズを 32 ピクセル、太字にします。
  - position: relative;: 子要素を配置する基準となる位置にします。
  - transition: 0.4s;: スタイルが変化する際に 0.4 秒かけてゆっくりと変化するように設定します。
- .box::before, .box::after: これは擬似要素と呼ばれるもので、HTML には書かれていないけれど CSS で追加できる要素です。この場合は、箱の角に枠線のような装飾を作成しています。
  - content: "";: 擬似要素にコンテンツがないことを示します。
  - width: 50px; height: 50px;: 幅 50 ピクセル、高さ 50 ピクセルの正方形にします。
  - border-top: 2px solid rgba(255, 255, 255, 0.5); など: 上、左、下、右に半透明の白い枠線を 2 ピクセルの太さで追加します。
  - position: absolute;: 親要素（.box）を基準に位置を自由に配置します。
  - top: -1px; left: -1px; など: 親要素の角に少しはみ出すように配置します。
  - transition: 0.4s; transition-delay: 0.5s;: スタイルが変化する際に 0.4 秒かけてゆっくりと変化し、0.5 秒の遅延後にアニメーションが開始するように設定します。
- .box:hover:before, .box:hover::after: マウスカーソルが.box の上に重なった時に、擬似要素のスタイルが変化します。
  - width: 100%; height: 100%;: 擬似要素が箱全体を覆うように拡大します。
  - border-color: rgba(255, 255, 255, 0.3);: 枠線の色が少し薄い半透明の白に変わります。
  - transition-delay: 0s;: アニメーションの遅延をなくします。
  - border-radius: 10px;: 角を丸くします。
- .box:hover: マウスカーソルが.box の上に重なった時の.box 自体のスタイルです。
  - background: rgba(255, 255, 255, 0.1);: 背景が半透明の白になります。
  - backdrop-filter: blur(15px);: 背景にあるものがぼやけて見えます（ガラスのような効果）。
  - transition-delay: 0.3s;: アニメーションが 0.3 秒遅れて開始します。
  - border-radius: 10px;: 角を丸くします。

<h1>JavaScript (script.js - ウェブページの動き)</h1>
JavaScriptはウェブページに動きを与えます。
 
 * const myText = document.getElementById("myText");: HTMLの中からIDが"myText"の要素（<p>タグ）を見つけて、myTextという名前の変数に格納しています。
 
 * const changeButton = document.getElementById("changeButton");: HTMLの中からIDが"changeButton"の要素（<button>タグ）を見つけて、changeButtonという名前の変数に格納しています。
 
 * changeButton.addEventListener("click", () => { ... });: changeButtonがクリックされたときに、その中括弧{}に書かれた処理を実行するように設定しています。
 
   * myText.textContent = "テキストがJavaScriptによって変更されました！";: myText変数に格納されている要素（<p>タグ）のテキスト内容を「テキストがJavaScriptによって変更されました！」に変更します。
 
   * myText.style.color = "#7fffd4";: myText変数に格納されている要素（<p>タグ）の文字色を別の色（アクアマリン）に変更します。

<h1>【まとめ】</h1>
このコードは次のようなウェブページを表示します。
 * 背景に画像が表示され、中央に「JavaScriptでテキストを変更しよう」という大きな文字が入った四角い箱があります。

- その下に「ここにあるテキストが変化します。」という文字と「テキストを変更」というボタンがあります。

- ユーザーが「テキストを変更」ボタンをクリックすると、「ここにあるテキストが変化します。」という文字が「テキストが JavaScript によって変更されました！」に変わり、文字の色も青色からアクアマリン色に変化します。

- また、四角い箱にマウスカーソルを合わせると、枠線が広がり、箱の背景が半透明にぼやけるアニメーション効果があります。
