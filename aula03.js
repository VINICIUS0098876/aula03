'use strict'

const botaoSomar = document.getElementById('somar')
const botaoIdentificar = document.getElementById('identificar')
const botaoMultiplicar = document.getElementById('multiplicar')
const botaoCalcularMedia = document.getElementById('media1')
const botaoSoma = document.getElementById('somar2')


function somar(){
    const numero1 = Number(document.getElementById('numero1').value)
    const numero2 = Number(document.getElementById('numero2').value)
    const resultado = document.getElementById('resultado')

    const total = numero1 + numero2
    resultado.textContent = total
}
botaoSomar.addEventListener('click', somar)


function identificar(){
    const numero = Number(document.getElementById('numero-item2').valeu)
    const resultado = Number(document.getElementById('resultado-item2').value)
    if(numero > 0){
        resultado.textContent = 'POSITIVO'
    }else if(numero < 0){
        resultado.textContent = 'NEGATIVO'
    }else {
        resultado.textContent = 'ZERO'
    }
}
botaoIdentificar.addEventListener('click', identificar)


function multiplicar(){
    const numero3 = Number(document.getElementById('numero1-item3').value)
    const numero4 = Number(document.getElementById('numero2-item3').value)
    const resultado2 = document.getElementById('resultado-item3')
    const result = numero3 * numero4

    if(result > 30){
        resultado2.textContent = result
    }else{
        alert("Multipliação Inválida")
    }
}
botaoMultiplicar.addEventListener('click', multiplicar)

function calcular(){
    const media1 = Number(document.getElementById('numero1-item4').value)
    const media2 = Number(document.getElementById('numero2-item4').value)
    const media3 = Number(document.getElementById('numero3-item4').value)
    const media4 = Number(document.getElementById('numero4-item4').value)
    const resultado3 = document.getElementById('resultado-media')
    
    const result2 = (media1 + media2 + media3 + media4) / 4
    
    if(result2 >= 7) {
        resultado3.textContent = 'APROVADO!!'
    } else {
        result3.textContent = 'INSIRA A 5 NOTA'
        const media5 = Number(document.getElementById('numero5-item4').value)
        const result3 = (result2 + media5) / 2

        if(result3 >= 5 ){
            resultado3.textContent = 'APROVADO EM EXAME!!'
        }else{
            resultado3.textContent = 'REPROVADO'
        }
    }
}
botaoCalcularMedia.addEventListener('click', calcular)

function soma(){
    const numeros = Number(document.getElementById('numero1-item5').value)
    const numeros2 = Number(document.getElementById('numero2-item5').value)
    const numeros3 = Number(document.getElementById('numero3-item5').value)
    const resultado4 = document.getElementById('resultado-item5')

    const total2 = numeros + numeros2 + numeros3
    resultado4.textContent = total2

    if(total2 >= 100){
        resultado4.textContent = total2
    }else{
        alert('soma invalida')
    }
}
botaoSoma.addEventListener('click', soma)

