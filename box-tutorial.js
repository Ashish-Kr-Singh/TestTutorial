"use strict";
console.log('page working');
let record_div_clk = [];
let forward_div = [];
let board = document.createElement('div');
board.classList.add("box");
for (var x = 0; x <= 50; x++) {
    let child_div = document.createElement('div');
    child_div.classList.add("div_elm");
    let para = document.createElement('p');
    para.textContent = `${x}`;
    para.classList.add("inner_para");
    child_div.appendChild(para);
    board.appendChild(child_div);
}
document.body.appendChild(board);
let all_div = document.getElementsByClassName("div_elm");
for (let i = 0; i < all_div.length; i++) {
    all_div[i].addEventListener('click', function () {
        all_div[i].classList.add("hover_on");
        record_div_clk.push(all_div[i]);
    });
}
let back_btn = document.getElementById('go-back');
back_btn.addEventListener('click', function () {
    if (record_div_clk.length > 0) {
        for (let i = 0; i < record_div_clk.length; i++) {
            record_div_clk[record_div_clk.length - 1].classList.remove("hover_on");
        }
        forward_div.push(record_div_clk[record_div_clk.length - 1]);
        record_div_clk.pop();
    }
});
let repeat_btn = document.getElementById('repeat_hover');
repeat_btn.addEventListener('click', function () {
    if (forward_div.length > 0) {
        forward_div[forward_div.length - 1].classList.add("hover_on");
        record_div_clk.push(forward_div[forward_div.length - 1]);
        forward_div.pop();
    }
});
let clear_hover = document.querySelector('#clear_hover');
clear_hover.addEventListener('click', function () {
    record_div_clk = [];
    for (let i = 0; i < all_div.length; i++) {
        all_div[i].classList.remove("hover_on");
    }
});
//# sourceMappingURL=box-tutorial.js.map