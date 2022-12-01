fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=BOVA11.SA&apikey=BNX9TEB7H7WPBASC`).then(resposta => {
    return resposta.json()
}).then(corpo => {
    let symbol = corpo["Global Quote"]["01. symbol"]
    let price = parseFloat(corpo["Global Quote"]["05. price"])
    document.getElementById("acao1").innerHTML = symbol
    document.getElementById("preco1").innerHTML = price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });


})
fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IVVB11.SA&apikey=BNX9TEB7H7WPBASC`).then(resposta => {
    return resposta.json()
}).then(corpo => {
    let symbol = corpo["Global Quote"]["01. symbol"]
    let price = parseFloat(corpo["Global Quote"]["05. price"])
    document.getElementById("acao2").innerHTML = symbol
    document.getElementById("preco2").innerHTML = price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });


})
fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=BCFF11.SA&apikey=BNX9TEB7H7WPBASC`).then(resposta => {
    return resposta.json()
}).then(corpo => {
    let symbol = corpo["Global Quote"]["01. symbol"]
    let price = parseFloat(corpo["Global Quote"]["05. price"])
    document.getElementById("acao3").innerHTML = symbol
    document.getElementById("preco3").innerHTML = price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });


})
fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=GOLD11.SA&apikey=BNX9TEB7H7WPBASC`).then(resposta => {
    return resposta.json()
}).then(corpo => {
    let symbol = corpo["Global Quote"]["01. symbol"]
    let price = parseFloat(corpo["Global Quote"]["05. price"])
    document.getElementById("acao4").innerHTML = symbol
    document.getElementById("preco4").innerHTML = price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });


})
fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=BBAS3.SA&apikey=BNX9TEB7H7WPBASC`).then(resposta => {
    return resposta.json()
}).then(corpo => {
    let symbol = corpo["Global Quote"]["01. symbol"]
    let price = parseFloat(corpo["Global Quote"]["05. price"])
    document.getElementById("acao5").innerHTML = symbol
    document.getElementById("preco5").innerHTML = price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });


})