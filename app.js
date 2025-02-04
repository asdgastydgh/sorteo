//variables
const texto = document.getElementById('nombreAmigo');
const lista = document.getElementById('listaAmigos');
let listaDeAmigos = [];

function agregarAmigo(){
    if (validarEntrada()){
        listaDeAmigos.push(texto.value);
    }
    lista.innerHTML="";
    for(let i = 0; i < listaDeAmigos.length;i++){
        lista.innerHTML += `<li>${listaDeAmigos[i]}</li>`;
    }
}

function validarEntrada(){
    for (let index = 0; index < listaDeAmigos.length; index++) {
        if (listaDeAmigos[index] == texto.value) {
            alert ("Ya colocaste ese nombre!! proba con otro")
            return false
        }
    }
    if (texto.value == "") {
        alert ("Ingresa un nombre valido!!")
        return false
    } else {
        return true
    }
}

function limpiarCaja(){
    texto.value = "";
}

function sortearAmigo(){
    let resultado = document.getElementById('resultado')
    let sorteo = Math.floor(Math.random()*listaDeAmigos.length)
    resultado.innerHTML = listaDeAmigos[sorteo]
}
