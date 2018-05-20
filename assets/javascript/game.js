$(document).ready(function() {
    var targetscore = Math.ceil(Math.random() * 100) + 20;
    var totalscore = 0;
    var wins = 0;
    var losses = 0;
    var bluecv = Math.ceil(Math.random() * 12);
    var redcv = Math.ceil(Math.random() * 12);
    var purplecv = Math.ceil(Math.random() * 12);
    var orangecv = Math.ceil(Math.random() * 12);
    
    $("#targetscore").text(targetscore);

    $("#blue").on("click", function() {
        totalscore += bluecv;
        $(".counter").text(totalscore);
        $(".outcome").text("");
        if (totalscore === targetscore){
            $(".outcome").text("You win!");
            wins++;
            $(".wins").text(wins);
            targetscore = Math.ceil(Math.random() * 100) + 20;
            bluecv = Math.ceil(Math.random() * 12);
            redcv = Math.ceil(Math.random() * 12);
            purplecv = Math.ceil(Math.random() * 12);
            orangecv = Math.ceil(Math.random() * 12);
            totalscore = 0;
            $("#targetscore").text(targetscore);
            $(".counter").text(totalscore);


        }
        else if (totalscore > targetscore) {
            $(".outcome").text("You lose!");
            losses++;
            $(".losses").text(losses);
            targetscore = Math.ceil(Math.random() * 100) + 20;
            bluecv = Math.ceil(Math.random() * 12);
            redcv = Math.ceil(Math.random() * 12);
            purplecv = Math.ceil(Math.random() * 12);
            orangecv = Math.ceil(Math.random() * 12);
            totalscore = 0;
            $("#targetscore").text(targetscore);
            $(".counter").text(totalscore);
        }
    });

    $("#red").on("click", function() {
        totalscore += redcv;
        $(".counter").text(totalscore);
        $(".outcome").text("");
        if (totalscore === targetscore){
            $(".outcome").text("You win!");
            wins++;
            $(".wins").text(wins);
            targetscore = Math.ceil(Math.random() * 100) + 20;
            bluecv = Math.ceil(Math.random() * 12);
            redcv = Math.ceil(Math.random() * 12);
            purplecv = Math.ceil(Math.random() * 12);
            orangecv = Math.ceil(Math.random() * 12);
            totalscore = 0;
            $("#targetscore").text(targetscore);
            $(".counter").text(totalscore);


        }
        else if (totalscore > targetscore) {
            $(".outcome").text("You lose!");
            losses++;
            $(".losses").text(losses);
            targetscore = Math.ceil(Math.random() * 100) + 20;
            bluecv = Math.ceil(Math.random() * 12);
            redcv = Math.ceil(Math.random() * 12);
            purplecv = Math.ceil(Math.random() * 12);
            orangecv = Math.ceil(Math.random() * 12);
            totalscore = 0;
            $("#targetscore").text(targetscore);
            $(".counter").text(totalscore);
        }
    });

    $("#purple").on("click", function() {
        totalscore += purplecv;
        $(".counter").text(totalscore);
        $(".outcome").text("");
        if (totalscore === targetscore){
            $(".outcome").text("You win!");
            wins++;
            $(".wins").text(wins);
            targetscore = Math.ceil(Math.random() * 100) + 20;
            bluecv = Math.ceil(Math.random() * 12);
            redcv = Math.ceil(Math.random() * 12);
            purplecv = Math.ceil(Math.random() * 12);
            orangecv = Math.ceil(Math.random() * 12);
            totalscore = 0;
            $("#targetscore").text(targetscore);
            $(".counter").text(totalscore);


        }
        else if (totalscore > targetscore) {
            $(".outcome").text("You lose!");
            losses++;
            $(".losses").text(losses);
            targetscore = Math.ceil(Math.random() * 100) + 20;
            bluecv = Math.ceil(Math.random() * 12);
            redcv = Math.ceil(Math.random() * 12);
            purplecv = Math.ceil(Math.random() * 12);
            orangecv = Math.ceil(Math.random() * 12);
            totalscore = 0;
            $("#targetscore").text(targetscore);
            $(".counter").text(totalscore);
        }
    });

    $("#orange").on("click", function() {
        totalscore += orangecv;
        $(".counter").text(totalscore);
        $(".outcome").text("");
        if (totalscore === targetscore){
            $(".outcome").text("You win!");
            wins++;
            $(".wins").text(wins);
            targetscore = Math.ceil(Math.random() * 100) + 20;
            bluecv = Math.ceil(Math.random() * 12);
            redcv = Math.ceil(Math.random() * 12);
            purplecv = Math.ceil(Math.random() * 12);
            orangecv = Math.ceil(Math.random() * 12);
            totalscore = 0;
            $("#targetscore").text(targetscore);
            $(".counter").text(totalscore);


        }
        else if (totalscore > targetscore) {
            $(".outcome").text("You lose!");
            losses++;
            $(".losses").text(losses);
            targetscore = Math.ceil(Math.random() * 100) + 20;
            bluecv = Math.ceil(Math.random() * 12);
            redcv = Math.ceil(Math.random() * 12);
            purplecv = Math.ceil(Math.random() * 12);
            orangecv = Math.ceil(Math.random() * 12);
            totalscore = 0;
            $("#targetscore").text(targetscore);
            $(".counter").text(totalscore);
        }
    });

});
