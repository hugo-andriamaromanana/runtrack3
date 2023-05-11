function keylogger() {
    let textarea = document.createElement("textarea");
    textarea.id = "keylogger";
    textarea.addEventListener("keypress", function (e) {
        if (e.target === textarea) {
            textarea.value += e.key;
        } else {
            textarea.value += e.key + e.key;
        }
    });
    document.body.appendChild(textarea);
}

keylogger();

