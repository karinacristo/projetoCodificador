function validandoPasso() {
  var passo = document.getElementById("passo").value;
  passo = passo % 26;
  if (document.querySelector("#descriptografar").checked) {
    passo = passo * -1;
  }
  cesar(passo);
}
function cesar(passo) {
  var entrada = document.querySelector(".mensagemRecebidaCesar").value;
  var resultado = document.querySelector("#resultadoCesar");
  var modificacao = "";
  resultado.innerHTML = "";

  for (var i = 0; i < entrada.length; i++) {
    modificacao = entrada.charCodeAt(i);
    if (modificacao >= 65 && modificacao <= 90) {
      modificacao = modificacao + passo;
      if (modificacao > 90) {
        modificacao = modificacao - 26;
      } else if (modificacao < 65) {
        modificacao = modificacao + 26;
      }
    }
    if (modificacao >= 97 && modificacao <= 122) {
      modificacao = modificacao + passo;
      if (modificacao > 122) {
        modificacao = modificacao - 26;
      } else if (modificacao < 97) {
        modificacao = modificacao + 26;
      }
    }
    resultado.innerHTML += String.fromCharCode(modificacao);
  }
}
function base64() {
  var entrada = document.querySelector(".mensagemRecebida64").value;
  var resultado = document.querySelector("#resultado64");
  if (document.querySelector("#criptografar").checked)
    resultado.innerHTML = btoa(entrada);
  else resultado.innerHTML = atob(entrada);
}
var cod = document.querySelector("#criptografar").value;
var dec = document.querySelector("#descriptografar").value;
function codificacao() {
  var escolha = document.querySelector("#selecao");
  if (document.querySelector("#selecao").value == "cesar") {
    document.getElementById("passo").style.display = "block";
    document.querySelector(".mensagemRecebidaCesar").style.display = "block";
    document.querySelector(".mensagemRecebida64").style.display = "none";
    document.querySelector("#resultadoCesar").style.display = "block";
    document.querySelector("#resultado64").style.display = "none";
  } else if (document.querySelector("#selecao").value == "64") {
    document.getElementById("passo").style.display = "none";
    document.querySelector(".mensagemRecebidaCesar").style.display = "none";
    document.querySelector(".mensagemRecebida64").style.display = "block";
    document.querySelector("#resultadoCesar").style.display = "none";
    document.querySelector("#resultado64").style.display = "block";
  } else {
    document.querySelector(".mensagemRecebida64").style.display = "block";
    document.querySelector(".mensagemRecebidaCesar").style.display = "none";
    document.querySelector("#resultadoCesar").style.display = "none";
    document.querySelector("#resultado64").style.display = "block";
  }
}
