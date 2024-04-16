function atualizartempo() {
    var display = document.querySelector('.display')

    var agora = new Date();

    var horario = corrigirhorario(agora.getHours()) + ':' +  corrigirhorario(agora.getMinutes()) + ':' + corrigirhorario(agora.getSeconds())

    display.textContent = horario;
}

setInterval(atualizartempo, 1000);

function corrigirhorario(numero) {
    if (numero < 10) {
        numero = '0' + numero;
    } return numero;
}
