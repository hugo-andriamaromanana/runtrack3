<!DOCTYPE html>
  <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
        <title>Document</title>
    </head>

    <body>
        <header>
            <nav>
                <div class="nav-wrapper grey darken-1">
                    <ul class="left">
                        <li><a href="#">Accueil</a></li>
                        <li><a href="#">Inscription</a></li>
                        <li><a href="#">Connexion</a></li>
                        <li><a href="#">Rechercher</a></li>
                    </ul>
                </div>
            </nav>
        </header>     

            <form action="index.php" method="post">
                <label for="civilite"><b>Civilité :</b></label>
                    <input type="radio" id="homme" name="civilite" value="homme">
                    <label for="homme">Homme</label>
                    <input type="radio" id="femme" name="civilite" value="femme">
                    <label for="femme">Femme</label><br>
                <label for="prenom">Prénom :</label>
                <input type="text" id="prenom"><br>
                <label for="nom">Nom :</label>
                <input type="text" id="nom"><br>
                <label for="adresse">Adresse :</label>
                <input type="text" id="adresse"><br>
                <label for="email">Adresse mail :</label>
                <input type="email" id="email"><br>
                <label for="mdp">Mot de passe :</label>
                <input type="password" id="mdp"><br>
                <label for="mdp_confirm">Confirmez votre mot de passe :</label>
                <input type="password" id="mdp_confirm"><br>
                <label for="passions"><b>Passions :</b></label>
                    <input type="checkbox" id="informatique" name="passions" value="informatique">
                    <label for="informatique">Informatique</label>
                    <input type="checkbox" id="voyages" name="passions" value="voyages">
                    <label for="voyages">Voyages</label>
                    <input type="checkbox" id="sport" name="passions" value="sport">
                    <label for="sport">Sport</label>
                    <input type="checkbox" id="lecture" name="passions" value="lecture">
                    <label for="lecture">Lecture</label><br>
                <input type="button" value="Confirmer">
            </form>

        <footer>
            <ul>
                <li><a href="#">Accueil</a></li>
                <li><a href="#">Inscription</a></li>
                <li><a href="#">Connexion</a></li>
                <li><a href="#">Rechercher</a></li>
            </ul>
        </footer>
    </body>
  </html>