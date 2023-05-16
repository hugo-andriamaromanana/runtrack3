<!DOCTYPE html>
  <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
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
                <div class="row">
                    <div class="col s6">
                        <label class="active" for="civilite"><i class="material-icons left">wc</i><p>Civilité</p></label>
                        <br>
                        <div class="col s3">
                            <label>
                                <input class="with-gap" name="civilite" type="radio" id="homme">
                                <span>Homme</span>
                            </label>
                        </div>
                        <div class="col s3">
                            <label>
                                <input class="with-gap" name="civilite" type="radio" id="femme">
                                <span>Femme</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s5">
                        <input id="prenom" type="text" class="validate">
                        <label class="active" for="prenom"><i class="material-icons left">info_outline</i>Prénom</label>
                    </div>
                    <div class="input-field col s5">
                        <input id="nom" type="text" class="validate">
                        <label class="active" for="nom"><i class="material-icons left">info_outline</i>Nom</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s10">
                            <input id="adresse" type="text" class="validate">
                            <label class="active" for="adresse"><i class="material-icons left">home</i>Adresse</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s10">
                            <input id="email" type="email" class="validate">
                            <label class="active" for="email"><i class="material-icons left">mail_outline</i>Adresse mail</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s5">
                            <input id="mdp" type="password" class="validate">
                            <label class="active" for="mdp"><i class="material-icons left">lock</i>Mot de passe</label>
                    </div>
                    <div class="input-field col s5">
                            <input id="mdp_confirm" type="password" class="validate">
                            <label class="active" for="mdp_confirm"><i class="material-icons left">lock_outline</i>Confirmation du mot de passe</label>
                    </div>
                </div>
                <div class="row">
                    <div class="col s10">
                        <label class="active" for="passions"><i class="material-icons left">favorite_border</i><p>Passions</p></label>
                        <br>
                        <div class="col s2">
                            <label>
                                <input type="checkbox" id="informatique" name="passions">
                                <span>Informatique</span>
                            </label>
                        </div>
                        <div class="col s2">
                            <label>
                                <input type="checkbox" id="voyages" name="passions">
                                <span>Voyages</span>
                            </label>
                        </div>
                        <div class="col s2">
                            <label>
                                <input type="checkbox" id="sport" name="passions">
                                <span>Sport</span>
                            </label>
                        </div>
                        <div class="col s2">
                            <label>
                                <input type="checkbox" id="lecture" name="passions">
                                <span>Lecture</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col center">
                <button class="btn waves-effect waves-light" type="submit" name="confirmer">Confirmer
                    <i class="material-icons right">send</i>
                </button>
                </div>
            </form>

        <footer class="page-footer valign-wrapper">
            <div class="container">
                <div class="col center">
                    <ul>
                        <li><a href="#" class="white-text">Accueil</a></li>
                        <li><a href="#" class="white-text">Inscription</a></li>
                        <li><a href="#" class="white-text">Connexion</a></li>
                        <li><a href="#" class="white-text">Rechercher</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    </body>
  </html>