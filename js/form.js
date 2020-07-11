var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPaciente(form);

    var erros = validaPaciente(paciente);

    var mensagemErro = document.querySelector("#mensagem-erro");
    mensagemErro.innerHTML = "";

    if(erros.length>0){
        exibeMensagemErro(erros, mensagemErro);
    }else{
        var pacienteTR = montaTR(
            [{dado:paciente.nome, classes:["info-nome"]}, 
            {dado:paciente.peso, classes:["info-peso"]}, 
            {dado:paciente.altura, classes:["info-altura"]},
            {dado:paciente.gordura, classes:["info-gordura"]},
            {dado:paciente.imc, classes:["info-imc"]}], 
            ["paciente"]);
        document.querySelector("#tabela-pacientes").appendChild(pacienteTR);
        form.reset();
    }

});

function exibeMensagemErro(erros, destino){
    var ul = document.createElement("ul");

    erros.forEach(erro => {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

    var mensagemInicial = document.createElement("div");
    mensagemInicial.textContent = "Atenção:";

    destino.appendChild(mensagemInicial);
    destino.appendChild(ul);

    console.log("Paciente inválido");
}

function montaTR(celulas, ...classesTR) {
    var pacienteTR = document.createElement("tr");

    if(celulas){
        celulas.forEach(celula => {
            pacienteTR.appendChild(montaTD(celula, classesTR))
        });
    }

    classesTR.forEach(classe => {
        pacienteTR.classList.add(classe);
    });

    return pacienteTR;
}

function montaTD(propriedades){
    var td = document.createElement("td");
    td.textContent = propriedades.dado;
    if(propriedades.classes){
        propriedades.classes.forEach(classe => {
            td.classList.add(classe);
        });
    }
    
    return td;
}

function obtemPaciente(form){
    return {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    };
}

function validaPaciente(paciente){
    var erros  = [];

    if(!paciente.nome){
        erros.push("O nome não foi informado");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso inválido");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura inválida");
    }

    if(!paciente.gordura || paciente.gordura<0 || paciente.gordura>100){
        erros.push("% de gordura inválida");
    }

    return erros;
}