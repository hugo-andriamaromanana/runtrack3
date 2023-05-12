// Créez un <button> ayant comme id “button”. Créez un fichier expression.txt contenant
// votre expression favorite.
// Lorsqu’un utilisateur clique sur le bouton, à l’aide de Fetch, récupérez le contenu du
// fichier expression.txt, placez le dans un paragraphe <p> et insérez-le dans le corps de
// votre page.

// using Jquery


function printText() {
    let file = "expressions.txt"
    fetch(file)
        .then(x => x.text())
        .then(y => document.getElementById("myText").innerHTML = y);
}