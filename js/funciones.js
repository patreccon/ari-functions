window.onload = init
let numero1 
let numero2 
let resultado

function init(){
    numero1 = document.getElementById('numero1')
    numero2 = document.getElementById('numero2')
    resultado = document.getElementById('resultado')
    signo = document.getElementById('signo')
    let suma = document.getElementById('suma')
    let resta = document.getElementById('resta')
    let multiplicacion = document.getElementById('multiplicacion')
    let division = document.getElementById('division')
    let limpiar = document.getElementById('limpiar')
    numero1.focus()

    suma.addEventListener('click',()=>{
        signo.innerText = '+'
        resultado.value = sumar(numero1.value,numero2.value)
    })

    resta.addEventListener('click',()=>{
        signo.innerText = '-'
        resultado.value = restar(numero1.value,numero2.value)
    })


    multiplicacion.addEventListener('click',()=>{
        signo.innerText = 'x'
        resultado.value = multiplicar(numero1.value,numero2.value)
    })


    division.addEventListener('click',()=>{
        signo.innerText = '/'
        resultado.value = dividir(numero1.value,numero2.value)
    })

    limpiar.addEventListener('click',()=>{
        numero1.value=''
        numero2.value=''
        resultado.value=''
        signo.innerText = '+'
        numero1.focus()
    })

}

function sumar(a,b)
{
    return parseInt(a) + parseInt(b) 
}

function restar(a,b)
{
    return a-b
}

function multiplicar(a,b)
{
    return a*b
}
function dividir(a,b)
{
    return a/b
}