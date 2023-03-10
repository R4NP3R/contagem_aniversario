const dataDoAniverserio = new Date("Feb 6, 2024 00:00:00");
const timeStampAniversario = dataDoAniverserio.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaDoAnivesario = timeStampAniversario - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteOAniversario = Math.floor(distanciaDoAnivesario / diasEmMs);
    const horasAteOAnivesario = Math.floor((distanciaDoAnivesario % diasEmMs) / horasEmMs);
    const minutosAteOAnivesario = Math.floor((distanciaDoAnivesario % horasEmMs) / minutosEmMs);
    const segundoAteOAnivesario = Math.floor((distanciaDoAnivesario % minutosEmMs) / 1000);


    if (distanciaDoAnivesario < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('time').innerHTML = `Esquecero no niver do mlk KKKKKK`
    } else {
        document.getElementById('time').innerHTML = `${diasAteOAniversario}d ${horasAteOAnivesario}h ${minutosAteOAnivesario}m ${segundoAteOAnivesario}s`
    }
}, 1000)