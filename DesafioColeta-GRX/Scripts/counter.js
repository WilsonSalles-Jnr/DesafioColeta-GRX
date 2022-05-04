const text_max = 200;
$('#contador').html('0 / ' + text_max);
$('#text').keyup(function () {
    const text_length = $('#text').val().length;
    const text_remaining = text_max - text_length;
    if (text_length >= 15) {
        $('#contador').removeClass("bg-red");
        $('#contador').addClass("bg-green");
        $('#submit').prop('disabled', false)
    }
    if (text_length < 15) {
        $('#contador').removeClass("bg-green");
        $('#contador').addClass("bg-red");
        $('#submit').prop('disabled', true)
    }
    $('#contador').html(text_length + ' / ' + text_max);
});
