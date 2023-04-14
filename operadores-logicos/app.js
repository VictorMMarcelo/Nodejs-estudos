const { read } = require('fs');

const readline = require('readline').createInterface({
    input: process.stdin,
    output:process.stdout
});

console.log("Esse programa vai checar se voc e maior de 18 anos e tem habilitacao para sdaber se voce pode entrar no kart");
console.log('Alem da suas verificacoes, precisamos verificar se voce esta na lista de presenca do horario');

readline.question('Qual o ano do seu nascimento? ', ano => {
    if (ano >2004){
        console.log('voce não tem 18 anos');
    } else{
        readline.question('voce tem habilitacao?(Sim/Nao) ' , temHabilitacao =>{
            if(!(temHabilitacao.toUpperCase()=== "SIM")){
                console.log('Voce nao tem habilitacao para entrar no kart');
            }else{
                readline.question('Qual o seu nome? ', nome =>{
                    switch(nome){
                        case 'Douglas':
                            console.log('Bem vindo ao kart Douglas');
                            break;
                        case 'Rafael':
                            console.log('Bem vindo ao kart Rafael');
                            break;
                        default:
                            console.log('Seu nome nao foi identificado na lista de presenca');
                    }
                })
            }
        });
    }
})