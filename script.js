let progress = 0; // 進捗の初期値
const fill = document.getElementById("fill"); // 塗り部分
const increaseButton = document.getElementById("increaseButton"); // 25%増やすボタン
const resetButton = document.getElementById("resetButton"); // リセットボタン
const message = document.getElementById("message"); // メッセージ部分

// 「25%増やす」ボタンの動作
increaseButton.addEventListener("click", () => {
    progress += 25; // 25%増加
    if (progress > 100) progress = 100; // 最大値を100%に制限
    fill.style.height = progress + "%"; // 塗り部分の高さを変更

    // メッセージを更新
    if (progress === 100) {
        message.textContent = "トイレにいこう！";
    } else if (progress >= 50) {
        message.textContent = "まだまだ少ないよ";
    } else {
        message.textContent = "おしっこはからっぽ";
    }
});

// リセットボタンの動作
resetButton.addEventListener("click", () => {
    progress = 0; // 進捗をリセット
    fill.style.height = "0%"; // 塗り部分を空に戻す
    message.textContent = "おしっこはからっぽ";
});
