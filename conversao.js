var inpute1 = document.getElementById('in1')
var inpute2 = document.getElementById('in2')

function verificar() {

    if (inpute1.value.length != 0 && inpute2.value.length == 0) {
        var valor = inpute1.value
        var soma = (valor*1.8)+32
        window.alert(`${soma} Fahrenheits`)
    }else if (inpute2.value.length != 0 && inpute1.value.length == 0) {
        var valorDeF = inpute2.value
        var somaDeF = (valorDeF-32)/1.8
        window.alert(`${somaDeF} Graus`)
    }

}

