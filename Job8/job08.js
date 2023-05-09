function premier(nombre) {
    var premier = true;
    for (var i = 2; i < nombre; i++) {
        if (nombre % i == 0) {
            premier = false;
        }
    }
    if (premier) {
        return true;
    }
    else {
        return false;
}
}

function sommenombrespremiers(a, b) {
    if (premier(a) && premier(b)) {
        return a + b;
    } else {
        return false;
    }
}

console.log(sommenombrespremiers(2, 3));