
function Enviar() {

    var nome = document.getElementById("name");
    var sobrenome = document.getElementById("last-name");
    var email = document.getElementById("floatingInput");

    if(nome.value === "") {
        alert('Insira seu nome.');
    }

    else if(sobrenome.value === "") {
        alert('Informe seu sobrenome.');
    }

    else if(email.value === "") {
        alert('Insira seu endereço de email.');
    }
} 
