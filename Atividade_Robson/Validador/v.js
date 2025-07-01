function validarFormulario() {
  let nome = document.getElementById("nome").value.trim();
  let email = document.getElementById("email").value.trim();
  let senha = document.getElementById("senha").value;
  let confirmar = document.getElementById("confirmar").value;

  let valido = true;

  document.getElementById("erroNome").innerText = "";
  document.getElementById("erroEmail").innerText = "";
  document.getElementById("erroSenha").innerText = "";
  document.getElementById("erroConfirmar").innerText = "";
  document.getElementById("mensagemSucesso").innerText = "";

  if (nome === "") {
    document.getElementById("erroNome").innerText = " * obrigatório";
    valido = false;
  }

  if (email === "") {
    document.getElementById("erroEmail").innerText = " * obrigatório";
    valido = false;
  }

  if (senha.length < 6) {
    document.getElementById("erroSenha").innerText = " * mínimo 6 caracteres";
    valido = false;
  }

  if (senha !== confirmar) {
    document.getElementById("erroConfirmar").innerText = " * senhas diferentes";
    valido = false;
  }

  if (valido) {
    document.getElementById("mensagemSucesso").innerText = "Formulário enviado com sucesso!";
    document.getElementById("formulario").reset();
  }

  return false;
} 