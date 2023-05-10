function showhide() {
    let article = document.createElement("article");
    article.id = "citation";
    article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
    let button = document.getElementById("button");
    button.addEventListener("click", function () {
        if (article.style.display === "none") {
            article.style.display = "block";
        } else {
            article.style.display = "none";
        }
    });
    document.body.appendChild(article);
}