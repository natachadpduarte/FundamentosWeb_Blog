

/*Formas de acesso a dom

por tag: getElementByTagName()
por id: getElementById()
por Nome: getElementsByName()
por classe: por tag: getElementsByClassName() usamos elements , pois a classe pode ser usada em vários elementos.
por Seletor: querySelector() --> mais usado, pois com ele conseguimos acessar os demais. Essa é a melhor pratica para acessar o dom.
*/

/*const menuItems = document.querySelectorAll("header .links a")

for (item of menuItems) {
    if (currentPage.includes(item.getAttribute("href"))) {
        item.classList.add("active")
    }
}
*/

let nome = window.document.getElementById('nome') //Pegue o elemento pelo id. Acessando o elemento input que tem o id "nome".

let email = document.querySelector('#email') //pegando o seletor pelo id, por isso #email, se fosse uma classe seria .email. Outra forma input#email ou input.email

let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")


nome.style.width = '100%'
email.style.width = '100%'


function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Valor inválido"
        txtNome.style.color = 'red'

    } else {
        txtNome.innerHTML = "Valor válido"
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = "Valor válido"
        txtEmail.style.color = 'green'
        emailOk = true

    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracters'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('Formulário enviado com sucesso!')
    } else {
        alert('Preencha o formulário corretamente antes de enviar...')
    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}