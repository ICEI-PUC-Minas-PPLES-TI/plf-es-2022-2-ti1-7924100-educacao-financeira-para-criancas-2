//Lancamentos

// declara um conjunto inicial de Lancamentos
var db_Lancamentos_inicial = {
    "data": []
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var dbLancamentos = JSON.parse(localStorage.getItem('db_Lancamento'));
if (!dbLancamentos) {
    dbLancamentos = db_Lancamentos_inicial;
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertLancamento(lancamento) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (dbLancamentos.data.length != 0)
        novoId = dbLancamentos.data[dbLancamentos.data.length - 1].id + 1;
    let novaLancamento = {
        "id": novoId,
        "conta": lancamento.conta,
        "valor": lancamento.valor
    };

    // Insere o novo objeto no array
    dbLancamentos.data.push(novaLancamento);
    window.alert("Lancamento inserida com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_Lancamento', JSON.stringify(dbLancamentos));
}


function updateUsuario(id, usuario) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db_usuarios.usuarios.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    usuarioCorrente[index].nome = lancamento.conta
    usuarioCorrente[index].valor = lancamento.valor
    usuarioCorrente[index].valor = lancamento.valor
    usuarioCorrente[index].valor = lancamento.valor

    window.alert("Perfil alterada com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('usuarioCorrente', JSON.stringify(dbLancamentos));
}

function deleteLancamento(id) {
    // Filtra o array removendo o elemento com o id passado
    dbLancamentos.data = dbLancamentos.data.filter(function(element) { return element.id != id });

    window.alert("Lancamento removida com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_Lancamento', JSON.stringify(dbLancamentos));
}