document.addEventListener("DOMContentLoaded", () => {
    const botaoModoEscuro = document.getElementById("modo-escuro");
    botaoModoEscuro.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    alert("Bem-vindo ao meu portfólio! 🚀");
});
