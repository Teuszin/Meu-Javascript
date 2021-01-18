var idade = 20
console.log(`Você tem ${idade} anos:`)
console.log('')
if (idade < 18){
    console.log('Nao vota')
} else if (idade < 18 || idade > 65){
        console.log("voto opcional")
} else {
    console.log("voto obrigatorio")
}
    
