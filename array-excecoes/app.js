try{
    const listaDeProdutosDisponiveis = [
        "pao" ,   
        "leite",
        "cafe",
        "laranja",
        "macarrao",
        "sabonete",
        "detergente",   
    ];
    
    const listaDeArgumentos = process.argc.slide(2);
    const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDisponiveis.filter(produtos =>{
        return listaDeArgumentos.find(argumentos => argumentos === produtos);
    })
    listaDeProdutosSolicitadosDisponiveis.forEach(produtos => console.log (`este produto nos temos: ${produtos}`));
    
    const listaDeProdutosSolicitadosNaoDisponiveis = listaDeArgumentos.filter(argumentos => {
        return !listaDeProdutosDisponiveis.find(produtos => produtos === argumentos);
    })
    
    listaDeProdutosSolicitadosNaoDisponiveis.forEach(argumentos => console.log (`este produto nos nao temos ${argumentos}`));
    
    listaDeProdutosDisponiveis.sort();
    listaDeProdutosDisponiveis.forEach(produtos => console.log (`este produto esta disponivel: ${produto}`));
}catch(e){
    console.log('Nao foi possivel executar pedido de compra');
}
