const emailinput = document.getElementById('email')
const senhainput = document.getElementById('senha')

function login() {
    if(emailinput.value == 'admin@email.com'  && senhainput.value == 'senha') {
        alert ('login feito com sucesso');
        window.location.href ='pagina.html' ;
    
    } else {
        alert ('email e/ou senha incorreto')

    } 

}