var cod = document.querySelector("#Criptografar").value;
var dec = document.querySelector("#Descriptografar").value;

function codificacao() {
  var escolha = document.querySelector("#selecao");
  if (document.querySelector("#selecao").value == "cesar") {
    // Se escolher Cesar, Ele já chama a funçao Cesar
    escolha.style.color = "black";
    document.getElementById("incremento").style.display = "block";
    document.querySelector(".textoEntradaC").style.display = "block";
    document.querySelector(".textoEntrada").style.display = "none";
    document.querySelector("#txtConvertidoC").style.display = "block";
    document.querySelector("#txtConvertido").style.display = "none";
  } else if (document.querySelector("#selecao").value == "64") {
    //escondendo o inccremento
    escolha.style.color = "black";
    document.getElementById("incremento").style.display = "none";
    //alterando o recebedor de dados e exibição
    document.querySelector(".textoEntradaC").style.display = "none";
    document.querySelector(".textoEntrada").style.display = "block";
    document.querySelector("#txtConvertidoC").style.display = "none";
    document.querySelector("#txtConvertido").style.display = "block";
  } else {
    document.querySelector(".textoEntrada").style.display = "block";
    document.querySelector(".textoEntradaC").style.display = "none";
    document.querySelector("#txtConvertidoC").style.display = "none";
    document.querySelector("#txtConvertido").style.display = "block";
  }
}
