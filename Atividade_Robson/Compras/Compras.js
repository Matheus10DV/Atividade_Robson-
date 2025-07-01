function adicionarItem() {
  var item = document.getElementById("item").value.trim();
  var quantidade = document.getElementById("quantidade").value;

  if (!item || !quantidade) return;

  var tabela = document.getElementById("tabela");
  var novaLinha = tabela.insertRow();

  novaLinha.insertCell(0).innerHTML = item;
  novaLinha.insertCell(1).innerHTML = quantidade;

  var btn = document.createElement("button");
  btn.innerHTML = "Remover";
  btn.className = "remover-btn";
  btn.onclick = function () {
    tabela.deleteRow(novaLinha.rowIndex);
  };

  var cell = novaLinha.insertCell(2);
  cell.appendChild(btn);

  document.getElementById("formCompra").reset();
  document.getElementById("item").focus();
} 