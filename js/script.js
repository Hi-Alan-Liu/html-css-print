$(document).ready(function() {
    // 生成 10 筆商品資料
    for (let i = 1; i <= 30; i++) {
        let item = `商品${i}`;
        let quantity = Math.floor(Math.random() * 10) + 1; // 1 到 10 的隨機數量
        let price = (Math.random() * 100).toFixed(2); // 0 到 100 的隨機價格，保留兩位小數
        let row = `<tr><td>${item}</td><td>${quantity}</td><td>$${price}</td></tr>`;
        document.getElementById('table-body').innerHTML += row;
    }
});