function init() {
    var upVote = 0;
    var downVote = 0;

    $('#up').click(function() {
        upVote += 1;
        console.log(upVote);
    })

    $('#down').click(function() {
        downVote += 1;
        console.log(downVote);
    })

}

$(document).ready(function() {
    init();
});