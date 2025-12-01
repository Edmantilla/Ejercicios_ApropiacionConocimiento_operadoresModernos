import { procesarPedido } from "./app.js"

import promptSync from "prompt-sync";
const prompt = promptSync();

const pedido = {
    cliente: "edward",
    pedido: "pizza",
    cantidad: 1,
}

const extras = prompt("Ingrese El extra 1: ")
const extras2 = prompt("Ingrese El extra 2: ")
const extras3 = prompt("Ingrese El extra 3: ")

const { extras1 } = procesarPedido(pedido, extras, extras2, extras3)

console.log(extras1);




