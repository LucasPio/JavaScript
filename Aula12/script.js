var num = document.getElementById('tabuada')
var res = document.getElementById('foto')
function contar() {
    res.innerHTML = ""
    if (num.value.length == 0) {
    res.innerHTML = "coloque um valor"

    } else {
        let n = Number(num.value)
        let soma = ''
        for (let c = 1;c <= 10;c++) {
        soma = n*c
        res.innerHTML += `<p>${n} x ${c} = ${soma} </p>`
        }
    }
}