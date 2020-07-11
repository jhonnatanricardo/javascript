
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){
    paciente = pacientes[i];

    var celulaPeso = paciente.querySelector(".info-peso");
    var peso = celulaPeso.textContent;

    var celulaAltura = paciente.querySelector(".info-altura");
    var altura = celulaAltura.textContent;

    var imc = peso / (altura * altura);

    var celulaIMC = paciente.querySelector(".info-imc");

    var pesoValido = true;
    var alturaValida = true;

    if(peso<=0 || peso >=1000){
        console.log("Peso inválido!");
        pesoValido = false;
        celulaIMC.textContent = "Peso inválido!";
    }

    if(altura<=0 || altura >=3.00){
        console.log("Altura inválida!");
        alturaValida = false;
        celulaIMC.textContent = "Altura inválida!";
    }

    if(pesoValido && alturaValida){
        celulaIMC.textContent = imc.toFixed(2);
        console.log(imc.toFixed(2));
    } else {
        paciente.classList.add("paciente-invalido");
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTR = document.createElement("tr");

    var nomeTD = document.createElement("td");
    var pesoTD = document.createElement("td");
    var alturaTD = document.createElement("td");
    var gorduraTD = document.createElement("td");
    var imcTD = document.createElement("td");

    nomeTD.textContent = nome;
    pesoTD.textContent = peso;
    alturaTD.textContent = altura;
    gorduraTD.textContent = gordura;
    imcTD.textContent = (peso / (altura * altura)).toFixed(2);
    
    pacienteTR.appendChild(nomeTD);
    pacienteTR.appendChild(pesoTD);
    pacienteTR.appendChild(alturaTD);
    pacienteTR.appendChild(gorduraTD);
    pacienteTR.appendChild(imcTD);


    document.querySelector("#tabela-pacientes").appendChild(pacienteTR);

});
