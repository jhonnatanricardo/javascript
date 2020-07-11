var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPaciente(form);

    var pacienteTR = montaTR(
            [{dado:paciente.nome, classes:["info-nome"]}, 
            {dado:paciente.peso, classes:["info-peso"]}, 
            {dado:paciente.altura, classes:["info-altura"]},
            {dado:paciente.gordura, classes:["info-gordura"]},
            {dado:paciente.imc, classes:["info-imc"]}], 
            ["paciente"]);

    document.querySelector("#tabela-pacientes").appendChild(pacienteTR);

    form.reset();

});

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