$(document).ready(function() {

    $('#iptQuestion').keypress(function(e) {
        if (e.keyCode == 13) {
            generateResponse();
        }
    });

    $('#btnSend').click(function() {
        generateResponse();
    });
});

generateResponse = function() {
    var question = $('#iptQuestion').val().trim();
    $('#iptQuestion').val('');
    var random1To4 = Math.floor(Math.random() * 3);
    showQuestion(getResponse(question)[random1To4]);
};

getResponse = function(inputMessage) {
    var responses;
    messages.filter({
        input: {
            "likenocase": inputMessage
        }
    }).each(function(r) {
        responses = r.messages;
    });
    return responses;
};

showQuestion = function(question) {
    $('#response').html(question);
};