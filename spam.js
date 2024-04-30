var message = prompt("masukkan pesan", "");
var attack = parseInt(prompt("mau berapa kali?",100));

window.InputEvent = window.Event || window.InputEvent;
var event  = new InputEvent("input",{bubbles:true});

var text = document.getElementsByClassName("selectable-text copyable-text x15bjb6t x1n2onr6")[1];

for (let i = 0; i < attack; i++){
    text.innerHTML = message;
    text.dispatchEvent(event);
    document.getElementsByClassName("x1c4vz4f x2lah0s xdl72j9 xfect85 x1iy03kw x1lfpgzf")[0].click();
}
