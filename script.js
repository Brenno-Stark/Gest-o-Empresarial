
const formulario = document.querySelector("#form-cliente");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    console.log("O formulário foi enviado!");
});

