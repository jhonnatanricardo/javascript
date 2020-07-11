
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){
    paciente = pacientes[i];

    var celulaPeso = paciente.querySelector(".info-peso");
    var peso = celulaPeso.textContent;

    var celulaAltura = paciente.querySelector(".info-altura");
    var altura = celulaAltura.textContent;

    var imc = calculaIMC(peso, altura);
    var celulaIMC = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if(!pesoValido){
        console.log("Peso inválido!");
        pesoValido = false;
        celulaIMC.textContent = "Peso inválido!";
    }

    if(!alturaValida){
        console.log("Altura inválida!");
        alturaValida = false;
        celulaIMC.textContent = "Altura inválida!";
    }

    if(pesoValido && alturaValida){
        celulaIMC.textContent = imc;
        console.log(imc);
    } else {
        paciente.classList.add("paciente-invalido");
    }
}

function validaPeso(peso){
    return (peso && peso>=0 && peso<1000);
}

function validaAltura(altura){
    return (altura && altura >=0 && altura <= 3.0);
}

function calculaIMC(peso, altura){
    return (peso / (altura * altura)).toFixed(2);
}