function adicionarNaTabela() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var idade = document.getElementById("idade").value;
    var endereco = document.getElementById("endereco").value;
    var estado = document.getElementById("estado").value;
    var pais = document.getElementById("pais").value;

    var tabela = document.getElementById("tabela");
    var novaLinha = tabela.insertRow();
    novaLinha.insertCell(0).innerHTML = nome;
    novaLinha.insertCell(1).innerHTML = email;
    novaLinha.insertCell(2).innerHTML = idade;
    novaLinha.insertCell(3).innerHTML = endereco;
    novaLinha.insertCell(4).innerHTML = estado;
    novaLinha.insertCell(5).innerHTML = pais;
  }