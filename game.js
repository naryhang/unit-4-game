
var random_result;
var lost=0;
var win=0;
var score=0;

var resetAndStart = function () {

$(".fighters").empty();

var images = [
    'http://www.game-art-hq.com/wp-content/uploads/2011/07/Soul-Calibur-Broken-Destiny-Cervantes-Render-Game-Art-Work.jpg',
    'https://i.redd.it/tugqcypathq11.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTimEASwV-_8s3nbcpALhggSUmk1LMGwhTyGa406EoLZbmYpEWZsg',
    'https://vignette.wikia.nocookie.net/soulcalibur/images/9/95/Sc5-hilde.jpg/revision/latest?cb=20180413175554'
];

random_result = Math.floor(Math.random() * 69) + 30;

$("#result").html('Random Number: ' + random_result);

for(var i = 0; i < 4; i++){

    var random = Math.floor(Math.random() * 9) + 1;
    

    var fighter = $("<div>");
        fighter.attr({
            "class": 'fighter',
            "data-random": random
    });
    fighter.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"
    });
   


        

    $(".fighters").append(fighter);
}
    $("#score").html("Your total score is: " + score);

    $("#lost").html("Losses: " + lost);

    $("#win").html("Wins: " + win);
}

resetAndStart ();

$(document).on('click', ".fighter", function () {

    var num = parseInt($(this).attr('data-random'));

    score += num;

    $("#score").html("Your total score is: " + score);

    if(score > random_result){

        lost++;

        $("#lost").html("Losses: " + lost);

        score = 0;

        resetAndStart();

    }
    else if(score === random_result){

        win++;

        $("#win").html("Wins: " + win);

        score = 0;

        resetAndStart();
    }
    

    


    
});
    











