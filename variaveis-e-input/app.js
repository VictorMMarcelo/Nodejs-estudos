const readline = require('readline').createinterface({
    input: process.stdin,
    output: process.stdout
});

let leituraDeCampo;
readline.question('Informe sua idade:', input =>{
    leituraDeCampo = input;
    console.log(`O usuario digitou ${leituraDeCampo}`);
});