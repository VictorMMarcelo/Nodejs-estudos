const listaArgumentos = process.argv.slice(2);

console.log('---------------------Executando um for -----------------------');
    for (let controladorFor = 0; controladorFor < listaArgumentos.length; controladorFor++){
        console.log (`Posicao ${controladorFor} valor lido = ${listaArgumentos[controladorFor]}`);
    }

    console.log('---------------------Executando um while -----------------------');
let controladorWhile = 0;
while (controladorWhile < listaArgumentos.length){
    console.log (`Posicao ${controladorWhile} valor lido = ${listaArgumentos[controladorWhile]}`);
    controladorWhile++;
}

console.log('---------------------Executando um Do while -----------------------');
let controladorDoWhile = 0;
do {
    console.log (`Posicao ${controladorDoWhile} valor lido = ${listaArgumentos[controladorDoWhile]}`);
    controladorDoWhile++;
}while(controladorDoWhile < listaArgumentos.length)

console.log('---------------------Executando um For of -----------------------');
let controladorForOf = 0;
for(const argumentos of listaArgumentos){
    console.log(`Posicao ${controladorForOf} valor lido = ${argumentos}`);
    controladorForOf++;
}