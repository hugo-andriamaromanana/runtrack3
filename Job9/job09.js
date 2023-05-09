function tri(tableau,order) {
    if (order == "asc") {
        tableau.sort(function(a, b){return a - b});
    } else if (order == "desc") {
        tableau.sort(function(a, b){return b - a});
    }
    return tableau;
}


console.log(tri([1, 2, 3, 4, 5], "asc"));