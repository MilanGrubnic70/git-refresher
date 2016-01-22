function init() {
    var upVote = 0;
    var downVote = 0;

    $('#up').click(function() {
        upVote += 1;
        $('#votes').empty().append('Total UP votes: ' + upVote + ';    Total DOWN votes: ' + downVote + '.');
    });

    $('#down').click(function() {
        downVote += 1;
        $('#votes').empty().append('Total UP votes: ' + upVote + ';    Total DOWN votes: ' + downVote + '.');
    });



}

$(document).ready(function() {
    init();
});