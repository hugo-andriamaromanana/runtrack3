
function footer() {
    let footer = document.createElement("footer");
    footer.id = "footer";
    footer.style.position = "fixed";
    footer.style.bottom = "0";
    footer.style.width = "100%";
    footer.style.height = "100px";
    footer.style.backgroundColor = "red";
    footer.addEventListener("click", function () {
        footer.style.backgroundColor = "blue";
    });
    document.body.appendChild(footer);
}

function scroll() {
    let footer = document.getElementById("footer");
    let body = document.body;
    let html = document.documentElement;
    let height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    let percent = (window.pageYOffset / height) * 100;
    footer.style.backgroundColor = `rgb(${percent}%, 0%, 0%)`;
}

window.addEventListener("scroll", scroll);

footer();

