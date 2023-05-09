var holidays = [[6, 'janvier', 2020], [13, avril, 2020], [1, 'mai', 2020], [8, 'mai', 2020], [21, 'mai', 2020], [1, 'juin', 2020], [14, 'juillet', 2020], [15, 'aout', 2020], [1, 'novembre', 2020], [11, 'novembre', 2020], [25, 'decembre', 2020], [1, 'janvier', 2021], [5, 'avril', 2021], [1, 'mai', 2021], [8, 'mai', 2021], [13, 'mai', 2021], [24, 'mai', 2021], [14, 'juillet', 2021], [15, 'aout', 2021], [1, 'novembre', 2021], [11, 'novembre', 2021], [25, 'decembre', 2021]];

function jourtravaille(date) {
    var jour = date.getDate();
    var mois = date.getMonth();
    var annee = date.getFullYear();
    var jourSemaine = date.getDay();
    var jourFerie = false;
    var weekEnd = false;
    var message = "";

    for (var i = 0; i < holidays.length; i++) {
        if (jour == holidays[i][0] && mois == holidays[i][1] && annee == holidays[i][2]) {
            jourFerie = true;
        }
    }

    if (jourSemaine == 0 || jourSemaine == 6) {
        weekEnd = true;
    }

    if (jourFerie) {
        message = "Le " + jour + " " + mois + " " + annee + " est un jour férié";
    } else if (weekEnd) {
        message = "Non, " + jour + " " + mois + " " + annee + " est un week-end";
    } else {
        message = "Oui, " + jour + " " + mois + " " + annee + " est un jour travaillé";
    }

    return message;
}