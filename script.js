function calcular() {
    var kml = document.getElementById('kml')
    var preco = document.getElementById('preco')
    var carro = document.getElementById('carro')
    var res = document.getElementById('res')

    var n1 = Number(kml.value)
    var n2 = Number(preco.value)
    var n3 = Number(carro.value)

    var aux1 = n1 / n3
    var aux2 = aux1 / n2

    const total = aux2.toFixed(2)

    // res.style.textAlign = 'center'
    res.innerHTML = `Você vai gastar R$${total} `
}