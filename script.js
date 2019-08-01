let form = document.querySelector("#nome");
let letra = document.querySelector("h3")
let email = document.querySelector("#email");
let confirm = document.querySelector("#confirm");
let senha = document.querySelector("#senha");
let sexo = document.querySelectorAll(".sexo");
let botao = document.querySelector("button");

function pegarInfo(){
    localStorage.setItem('nome', form.value); 
    localStorage.setItem('email', email.value); 
    localStorage.setItem('confirm', confirm.value); 
    localStorage.setItem('senha', senha.value); 
    localStorage.setItem('sexo', sexo.value); 

    if(email.value === confirm.value){
        console.log("Acertou");
        letra.innerHTML = ("");
    }
    else{
        letra.innerHTML = ("Erro email diferente");
        console.log("erro");
    }
}

botao.onclick = pegarInfo;

