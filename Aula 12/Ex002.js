var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
console.log(`São ${hora}:${minutos} horas`)
if (hora < 5){
    console.log('Tenha uma Boa Madrugada')
}else if(hora < 12){
    console.log('Tenha um Bom Dia')
}else if (hora < 17){
    console.log('Tenha uma Boa Tarde')
}else{
    console.log("Tenha uma Boa Noite")
}