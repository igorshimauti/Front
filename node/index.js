const redline = require('readline')

const rl = redline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//rl.question('Você está gostando de NODEJS?', resposta => {
//    console.log(`Sua resposta foi ${resposta}`)
//    rl.close()
//})

rl.question('Qual a jogada, pedra, papel ou tesoura? ', resposta => {
    const opcoes = {
        pedra: 1,
        papel: 2,
        tesoura: 3
    };

    const escolhaUsuario = opcoes[resposta];
    const escolhaComputador = Math.round(Math.random() * 2) + 1;

    if (escolhaUsuario === 1 && escolhaComputador === 3) {
        console.log('Você ganhou')
    }
    else if (escolhaUsuario === 1 && escolhaComputador === 2) {
        console.log('Você perdeu')
    }
    else if (escolhaUsuario === 1 && escolhaComputador === 1) {
        console.log('Empate')
    }

    if (escolhaUsuario === 2 && escolhaComputador === 3) {
        console.log('Você perdeu')
    }
    else if (escolhaUsuario === 2 && escolhaComputador === 2) {
        console.log('Empate')
    }
    else if (escolhaUsuario === 2 && escolhaComputador === 1) {
        console.log('Você ganhou')
    }

    if (escolhaUsuario === 3 && escolhaComputador === 3) {
        console.log('Empate')
    }
    else if (escolhaUsuario === 3 && escolhaComputador === 2) {
        console.log('Você ganhou')
    }
    else if (escolhaUsuario === 3 && escolhaComputador === 1) {
        console.log('Você perdeu')
    }

    rl.close();
})