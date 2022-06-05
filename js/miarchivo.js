function totalPc() {
    let nombreUsuario = prompt("Hola, como te llamas?")
    alert(`Perfecto ${nombreUsuario}, vamos a armar su pc ideal`)
    // Pide tipo de pc
    let tipoPc = parseInt(prompt(`Elija su tipo de pc (con el número), puede ser: \n1) De oficina \n2) Gamer \n3) De última generacion`)) 
    // Ciclo para saber si cumple con el requisito
    while(tipoPc > 3) {
        alert("Por favor elija un tipo de pc correcto")
        tipoPc = parseInt(prompt("Quiere elegir nuevamente? Puede ser: \n1) De oficina \n2) Gamer \n3) De última generacion"))
    }
    // Pide espacio requerido
    let espacio = parseFloat(prompt("Cuánto espacio necesita? (en gb)"))
    // Ciclo para saber si cumple con el requisito
    while(espacio < 100) {
        alert("No trabajamos con tan poco espacio, le recomendamos a partir de 100 gb")
        espacio = parseFloat(prompt(`Quiere ingresar nuevamente el espacio?`))
    }
    // Cálculo final
    let resultado = calcularPrecio(tipoPc, espacio)
        alert(`${nombreUsuario}, el precio total de tu pc es de $${resultado}`)
}

// Switch para cada tipo de pc, simulando un precio por el espacio
function calcularPrecio(tipoPc, espacio) {
    switch (tipoPc) {
        case 1:
            return (espacio) * 4 + 50000
        case 2:
            return (espacio) * 4 + 100000
        case 3:
            return (espacio) * 4 + 200000
        default:
        return "Por favor elija un tipo de pc"
    }
}

totalPc()