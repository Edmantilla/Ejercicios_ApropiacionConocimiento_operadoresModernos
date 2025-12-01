 export const procesarPedido =(pedido, ...extras)=> {
    return {
        ...pedido,
        extras,
    }
}


