
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simulação de envio de mensagem (substitua por código de envio real)
    setTimeout(() => {
        // Limpar o formulário
        document.getElementById("form").reset();

        // Exibir mensagem de confirmação
        const confirmation = document.getElementById("confirmation");
        confirmation.classList.remove("hidden");

        // Esconder a mensagem de confirmação após 5 segundos
        setTimeout(() => {
            confirmation.classList.add("hidden");
        }, 2000);
    }, 1000);
});






