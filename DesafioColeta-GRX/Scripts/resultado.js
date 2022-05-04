const pushJSON = (obj) => {
    if (!localStorage.coleta) {
        localStorage.coleta = JSON.stringify([])
    }
    const toArray = JSON.parse(localStorage.coleta);
    toArray.push(obj);
    const arrayToJson = JSON.stringify(toArray)
    localStorage.coleta = arrayToJson;
}

const pushLastResult = (positiva, negativa, naoAvaliativa) => {
    const sorted = [
        { nome: 'Positiva: ', valor: positiva },
        { nome: 'Negativa: ', valor: negativa },
        { nome: 'Nao Avaliativa: ', valor: naoAvaliativa }]
        .sort(function (a, b) {
            if (a.valor < b.valor) {
                return 1;
            }
            return -1;
        });
    console.log(sorted)
    $('#qtdPositiva').html(sorted[0].nome + sorted[0].valor)
    $('#qtdNegativa').html(sorted[1].nome + sorted[1].valor)
    $('#qtdNaoAvaliativa').html(sorted[2].nome + sorted[2].valor)
    $('#resultadoAtual').show("slow").css('display', 'flex');
}

const resultadoTotal = () => {
    const localArray = JSON.parse(localStorage.coleta);
    let positiva = 0;
    let negativa = 0;
    let naoAvaliativa = 0;
    localArray.forEach((dado) => {
        dado.Pergunta1 === 'Sim' ? positiva += 1 : negativa += 1;
        dado.Pergunta2 === 'Sim' ? positiva += 1 : negativa += 1;
        switch (dado.Pergunta3) {
            case "Sim":
                positiva += 1;
                break
            case "Não":
                negativa += 1;
                break;
            case "Não sei":
                naoAvaliativa += 1;
                break;
            case "Agora":
                positiva += 2;
                break;
            default:
                null;
        }
    })

    let total = positiva + negativa + naoAvaliativa;
    $('#intTotal').html(total)
    $('#intPositiva').html(positiva)
    $('#positivaPorCem').html('% ' + ((100 / total) * positiva).toFixed(2))
    $('#intNegativa').html(negativa)
    $('#negativaPorCem').html('% ' + ((100 / total) * negativa).toFixed(2))
    $('#intNaoAvaliativa').html(naoAvaliativa)
    $('#naoAvaliativaPorCem').html('% ' + ((100 / total) * naoAvaliativa).toFixed(2))
    console.log({ positiva, negativa, naoAvaliativa });
}

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

    $('#resultadoTodos').show("slow").css('display', 'flex');
    pushLastResult(QuantidadePositiva, QuantidadeNegativa, QuantidadeNaoAvaliativa);
    const retorno = { Pergunta1, Pergunta2, Pergunta3, Pergunta4, QuantidadePositiva, QuantidadeNegativa, QuantidadeNaoAvaliativa };
    pushJSON(retorno);
    return resultadoTotal()
})