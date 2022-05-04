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

$('#submit').click((e) => {
    e.preventDefault();
    const Pergunta1 = $('input[name=logica]:checked', '#formulario').val()
    const Pergunta2 = $('input[name=desafio]:checked', '#formulario').val()
    const Pergunta3 = $('#joinGRX').val()
    const Pergunta4 = $('#text').val()
    let QuantidadePositiva = 0;
    let QuantidadeNegativa = 0;
    let QuantidadeNaoAvaliativa = 0;

    Pergunta1 === 'Sim' ? QuantidadePositiva += 1 : QuantidadeNegativa += 1;
    Pergunta2 === 'Sim' ? QuantidadePositiva += 1 : QuantidadeNegativa += 1;

    switch (Pergunta3) {
        case "Sim":
            QuantidadePositiva += 1;
            break
        case "Não":
            QuantidadeNegativa += 1;
            break;
        case "Não sei":
            QuantidadeNaoAvaliativa += 1;
            break;
        case "Agora":
            QuantidadePositiva += 2;
            break;
        default:
            null;
    }

    const retorno = { Pergunta1, Pergunta2, Pergunta3, Pergunta4, QuantidadePositiva, QuantidadeNegativa, QuantidadeNaoAvaliativa };
    console.log(retorno);
})