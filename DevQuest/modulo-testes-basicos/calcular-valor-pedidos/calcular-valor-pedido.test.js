const calcularValorPedido = require('./calcular-valor-pedido');

it('não deve cobrar valor de frete quando valor dos produtos for superior a 500', () => {
    //AAA - 3 passos de criação de um teste

    //ARRANGE - ARRUMAR - O objeto de teste
    const meuPedido = {
        itens: [
            { nome: 'Arco encantado', valor: 2000},
            { nome: 'Entrega', valor: 100, entrega: true}
        ]
    }

    //ACT - AÇÃO - O que vai ser testado
    const resultado = calcularValorPedido(meuPedido)

    //ASSERT - ASSERÇÃO - Qual o resultado esperado
    expect(resultado).toBe(2000)
})

it('deve cobrar valor de frete quando valor dos produtos for menos que 500', ()=>{
    //ARRANGE - ARRUMAR - O objeto de teste
    const meuPedido = {
        itens: [
            { nome: 'Sanduiche', valor: 50},
            { nome: 'Entrega', valor: 100, entrega: true}
        ]
    }

    //Act 
    const resultado = calcularValorPedido(meuPedido)

    //Assert
    expect(resultado).toBe(150)
})

it('deve cobrar valor de frete caso valor dos produtos seja exatamente 500', () => {
    const meuPedido = {
        itens: [
            { nome: 'Sanduiche', valor: 500},
            { nome: 'Entrega', valor: 100, entrega: true}
        ]
    }

    const resultado = calcularValorPedido(meuPedido)

    expect(resultado).toBe(600)
})

/* Caso os estados de entrega sejam RS ou SC, deve ser acrescido um valor de 20% na entrega */
it('deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja RS', () => {
    const PedidoComEstadoRS = {
        estado: 'RS',
        itens: [
            { nome: 'Sanduiche', valor: 500},
            { nome: 'Entrega', valor: 100, entrega: true}
        ]
    }

    const resultado = calcularValorPedido(PedidoComEstadoRS)

    expect(resultado).toBe(620)
})

it('deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja SC', () => {
    const PedidoComEstadoSC = {
        estado: 'SC',
        itens: [
            { nome: 'Sanduiche', valor: 500},
            { nome: 'Entrega', valor: 100, entrega: true}
        ]
    }

    const resultado = calcularValorPedido(PedidoComEstadoSC)

    expect(resultado).toBe(620)
})

it('não deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja SP', () => {
    const PedidoComEstadoSP = {
        estado: 'SP',
        itens: [
            { nome: 'Sanduiche', valor: 500},
            { nome: 'Entrega', valor: 100, entrega: true}
        ]
    }

    const resultado = calcularValorPedido(PedidoComEstadoSP)

    expect(resultado).toBe(600)
})