//CATEGORIAS

// declara um conjunto inicial de categorias
var db_Categorias_inicial = {
    "data": [

    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var dbCategorias = JSON.parse(localStorage.getItem('db_Categoria'));
if (!dbCategorias) {
    dbCategorias = db_Categorias_inicial;
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertCategoria(categoria) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (dbCategorias.data.length != 0)
        novoId = dbCategorias.data[dbCategorias.data.length - 1].id + 1;
    let novaCategoria = {
        "id": novoId,
        "nome": categoria.nome
    };

    // Insere o novo objeto no array
    dbCategorias.data.push(novaCategoria);
    window.alert("Categoria inserida com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_Categoria', JSON.stringify(dbCategorias));
}

function updateCategoria(id, categoria) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = dbCategorias.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    dbCategorias.data[index].nome = categoria.nome

    window.alert("Categoria alterada com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_Categoria', JSON.stringify(dbCategorias));
}

function deleteCategoria(id) {
    // Filtra o array removendo o elemento com o id passado
    dbCategorias.data = dbCategorias.data.filter(function(element) { return element.id != id });

    window.alert("Categoria removida com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_Categoria', JSON.stringify(dbCategorias));
}