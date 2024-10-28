/*funcao para detectar tipo de disposivo */
/*criada para mandar mensagem no whatsapp com ou sem emoji, se for desktop manda sem emoji */
/*a versão desktop não estava formatando os emojis */
/*essa função é chamada no  $(window).load do index.html */
function checkDevice() { 
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
    // return true; // está utilizando celular
    } else {
        /*manda mansagem sem emoji */
        const selecionaElemento = document.querySelector('#send-message');
        selecionaElemento.href= "https://wa.me/5514997746346?text=Olá,%20seja%20muito%20bem%20vindo(a)%20ao%20mundo%20@Drika´s%20personalizados.%20Aqui%20cada%20peça%20é%20um%20sonho%20moldado%20especialmente%20para%20você...%20Diga-me%20como%20posso%20lhe%20ajudar%20?";
    }
}
/*pegando ano e tag titulo para setar no footer */
let pegaDataAtual = new Date();
let pegaTitle = document.title;
copy.innerHTML = "Copyright &copy; " + pegaDataAtual.getFullYear() + " " + pegaTitle;