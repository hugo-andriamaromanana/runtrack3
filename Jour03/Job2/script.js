$(document).ready(function(){
    $("#melanger").click(function(){
        var rangee2 = $("#rangee2").children();
        var rangee2Length = rangee2.length;
        var rangee2Random = Math.floor(Math.random() * rangee2Length);
        var rangee2RandomChild = rangee2[rangee2Random];
        $("#rangee2").append(rangee2RandomChild);
    });
});
$(document).ready(function(){
    $("#resoudre").click(function(){
        var rangee2 = $("#rangee2").children();
        var rangee2Length = rangee2.length;
        var rangee2Random = rangee2Length - 1;
        var rangee2RandomChild = rangee2[rangee2Random];
        $("#rangee1").append(rangee2RandomChild);
    });
}
);
$(document).ready(function(){
    $("#reset").click(function(){
        var rangee1 = $("#rangee1").children();
        var rangee2 = $("#rangee2").children();
        $("#rangee1").append(rangee2);
        $("#rangee2").append(rangee1);
    });
}
);
