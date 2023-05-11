// <!-- We will have 8 pictures, which forms a bigger one, the game will start whith the pictures shuffled, we will be using keys
// The empty square will move according to the keys ect... The goal here is to recreate the image
// The images are names logo1 ... logo8 -->

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>Job 3</title>
//     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

// </head>
// <body>
//     <p>This is a 3x3 grid, use your keys to shift places, You can also click on the Shuffle button to shuffle everything</p>
//     <button id="shuffle">Shuffle</button>
//     <div id="rangee2">
//         <div class='0'>
//             <img id="logo1" src="logo1.PNG" alt="logo1">
//             <img id="logo2" src="logo2.PNG" alt="logo2">
//             <img id="logo3" src="logo3.PNG" alt="logo3">
//         </div>
//         <div class='1'>
//             <img id="logo4" src="logo4.PNG" alt="logo4">
//             <img id="logo5" src="logo5.PNG" alt="logo5">
//             <img id="logo6" src="logo6.PNG" alt="logo6">
//         </div>
//         <div class='2'>
//             <img id="logo7" src="logo7.PNG" alt="logo7">
//             <img id="logo8" src="logo8.PNG" alt="logo8">
//         </div>
//     <script src="./script.js"></script>
// </body>
// </html>

// <!-- The script -->
function shuffle(){
    var tab = [1,2,3,4,5,6,7,8];
    var tab2 = [];
    var i = 0;
    while(tab.length > 0){
        var rand = Math.floor(Math.random() * tab.length);
        tab2[i] = tab[rand];
        tab.splice(rand,1);
        i++;
    }
    for(var i = 0; i < tab2.length; i++){
        $("#logo"+(i+1)).parent().removeClass();
        $("#logo"+(i+1)).parent().addClass(tab2[i]-1);
    }
}
function moveLeft(){
    var empty = $(".2").children().length;
    if(empty == 1){
        var tmp = $(".2").children().detach();
        $(".2").append($(".1").children().detach());
        $(".1").append(tmp);
    }
    else if(empty == 2){
        var tmp = $(".2").children().detach();
        $(".2").append($(".0").children().detach());
        $(".0").append(tmp);
    }
}
function moveUp(){
    var empty = $(".2").children().length;
    if(empty == 1){
        var tmp = $(".2").children().detach();
        $(".2").append($(".5").children().detach());
        $(".5").append(tmp);
    }
    else if(empty == 2){
        var tmp = $(".2").children().detach();
        $(".2").append($(".1").children().detach());
        $(".1").append(tmp);
    }
    else if(empty == 3){
        var tmp = $(".2").children().detach();
        $(".2").append($(".0").children().detach());
        $(".0").append(tmp);
    }
}
function moveRight(){
    var empty = $(".2").children().length;
    if(empty == 1){
        var tmp = $(".2").children().detach();
        $(".2").append($(".3").children().detach());
        $(".3").append(tmp);
    }
    else if(empty == 2){
        var tmp = $(".2").children().detach();
        $(".2").append($(".5").children().detach());
        $(".5").append(tmp);
    }
}
function moveDown(){
    var empty = $(".2").children().length;
    if(empty == 1){
        var tmp = $(".2").children().detach();
        $(".2").append($(".6").children().detach());
        $(".6").append(tmp);
    }
    else if(empty == 2){
        var tmp = $(".2").children().detach();
        $(".2").append($(".3").children().detach());
        $(".3").append(tmp);
    }
    else if(empty == 3){
        var tmp = $(".2").children().detach();
        $(".2").append($(".0").children().detach());
        $(".0").append(tmp);
    }
}


$(document).ready(function(){
    shuffle();
    $(document).keydown(function(e){
        switch(e.which){
            case 37: //left
                moveLeft();
                break;
            case 38: //up
                moveUp();
                break;
            case 39: //right
                moveRight();
                break;
            case 40: //down
                moveDown();
                break;
        }
    }
    );
    $("#shuffle").click(function(){
        shuffle();
    }
    );
}
);
