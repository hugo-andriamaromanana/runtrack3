// Créez une fonction “tri” qui prend en paramètres un tableau de nombres nommé
// “numbers” et une variable “order” qui contient “asc” ou “desc”. A l’aide d’un algorithme
// développé par vos soins, l’algorithme doit trier le tableau dans l’ordre ascendant ou
// décroissant, selon le paramètre passé, puis retourner le tableau.

function tri(tableau,order) {
    if (order == "asc") {
        tableau.sort(function(a, b){return a - b});
    } else if (order == "desc") {
        tableau.sort(function(a, b){return b - a});
    }
    return tableau;
}


console.log(tri([1, 2, 3, 4, 5], "asc"));