//Contas

// declara um conjunto inicial de Contas
var db_Contas_inicial = {
    "data": [

    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var dbContas = JSON.parse(localStorage.getItem('db_Conta'));
if (!dbContas) {
    dbContas = db_Contas_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertConta(conta) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (dbContas.data.length != 0)
        novoId = dbContas.data[dbContas.data.length - 1].id + 1;
    let novaConta = {
        "id": novoId,
        "nome": conta.nome,
        "tipo": conta.tipo,
        "categoria": conta.categoria
    };

    // Insere o novo objeto no array
    dbContas.data.push(novaConta);
    window.alert("Conta inserida com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_Conta', JSON.stringify(dbContas));
}

function updateConta(id, conta) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = dbContas.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    dbContas.data[index].nome = conta.nome
    dbContas.data[index].tipo = conta.tipo
    dbContas.data[index].categoria = conta.categoria

    window.alert("Conta alterada com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_Conta', JSON.stringify(dbContas));
}

function deleteConta(id) {
    // Filtra o array removendo o elemento com o id passado
    dbContas.data = dbContas.data.filter(function(element) { return element.id != id });

    window.alert("Conta removida com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_Conta', JSON.stringify(dbContas));
}