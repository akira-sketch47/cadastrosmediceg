const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const usuario = document.getElementById("usuario").value.trim();
        const senha = document.getElementById("senha").value.trim();
        const mensagemErro = document.getElementById("mensagemErro");

        if (usuario === "" && senha === "") {
            mensagemErro.textContent = "Preencha o usuário e a senha.";
            return;
        }

        if (usuario === "") {
            mensagemErro.textContent = "por favor preencha o usuário.";
            return;
        }

        if (senha === "") {
            mensagemErro.textContent = "Preencha a senha.";
            return;
        }

        window.location.href = "dashboard.html";
    });
}


const cadastroForm = document.getElementById("cadastroForm");

if (cadastroForm) {
    cadastroForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const cpf = document.getElementById("cpf").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const nascimento = document.getElementById("nascimento").value;
        const senhaCadastro = document.getElementById("senhaCadastro").value.trim();
        const confirmarSenha = document.getElementById("confirmarSenha").value.trim();
        const mensagemCadastro = document.getElementById("mensagemCadastro");

        if (
            nome === "" ||
            cpf === "" ||
            email === "" ||
            telefone === "" ||
            nascimento === "" ||
            senhaCadastro === "" ||
            confirmarSenha === ""
        ) {
            mensagemCadastro.textContent = "Preencha todos os campos.";
            return;
        }

        if (senhaCadastro !== confirmarSenha) {
            mensagemCadastro.textContent = "As senhas não são iguais.";
            return;
        }

        mensagemCadastro.style.color = "#2a9d8f";
        mensagemCadastro.textContent = "Cadastro realizado com sucesso!";

        cadastroForm.reset();
    });
}