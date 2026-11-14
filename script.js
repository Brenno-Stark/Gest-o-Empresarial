
"use strict";

const formularioCliente = document.querySelector("#form-cliente");

if (formularioCliente) {
    formularioCliente.addEventListener("submit", (evento) => {
        evento.preventDefault();

        console.log("Formulário de clientes enviado com sucesso.");
    });
}
