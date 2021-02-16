function carregar(){
    var img = document.getElementById('img')
    var msghr = document.getElementById('msghr')
    var msg = document.getElementById('msg')
    var data = new Date()
    var hora = data.toLocaleTimeString()
    
   document.getElementById('msg').innerHTML=`Agora são <br> ${hora}`;

    var hora = data.getHours()

    if (hora < 5){
        // bom começo de dia
        img.src = 'imagens/imgamanhcer.png'
        document.body.style.background = '#c4d9e3'
        msghr.innerHTML = "Tenha Uma Otima Madrugada"
    }else if (hora < 13){
        // bom  dia
        img.src = 'imagens/imgdia.png'
        document.body.style.background = '#e8935d'
        msghr.innerHTML = "Tenha Um Otimo Dia"
    }else if (hora < 16){
        // boa tarde
        img.src = 'imagens/imgpordosol.png'
        document.body.style.background = '#ecb560'
        msghr.innerHTML = "Tenha Uma Otima Tarde"
    }else{
        // boa noite
        img.src = 'imagens/imanoite.png'
        document.body.style.background = '#2a4a79'
        msghr.innerHTML = "Tenha Uma Otima Noite"
        
    }
}   

function initTime(){
    setInterval(carregar,1000);
}
