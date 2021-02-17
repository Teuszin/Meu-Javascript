function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formu_ano = document.getElementById('txtano')
    var res = document.getElementById('resultado') // ou document.querySelector('div#resultado')   da no mesmo

    if(formu_ano.value.length == 0 || formu_ano.value > ano){ // se ele tiver vazio ou for igual ao ano atual
        window.alert('[Error] Verifique os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formu_ano.value)
        //res.innerHTML = `idade calculada: ${idade}`
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        
        if (fsex[0].checked) { 
            genero = 'Homem'

            if (idade >=0 && idade < 10){
                img.setAttribute('src','foto_criança_m.jpg')

            }else if (idade < 21){
                img.setAttribute('src','foto_jovem_m.jpg')

            }else if (idade < 50){
                img.setAttribute('src','foto_adulto_m.jpg')

            }else{
                img.setAttribute('src','foto_idoso_m.png')

            }
        } 
        else if (fsex[1].checked){
            genero = 'Mulher'
            
            if (idade >=0 && idade < 10){
                img.setAttribute('src','foto_criança_f.jpg')

            }else if (idade < 21){
                img.setAttribute('src','foto_jovem_f.jpg')

            }else if (idade < 50){
                img.setAttribute('src','foto_adulto_f.jpg')

            }else{
                img.setAttribute('src','foto_idoso_f.png')

            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
            res.appendChild(img)
    }




}