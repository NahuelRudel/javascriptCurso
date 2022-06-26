btnSubmit.addEventListener("mousemove", ()=> {
    btnSubmit.title = "Complete todos los campos antes de enviar"
})

document.addEventListener("submit", (e)=> {
    e.preventDefault()
    guardarDatosDeUsuario()
})

function guardarDatosDeUsuario() {
    const datosDeUsuario = {nombre: inputNombre.value,
                        telefono: inputTelefono.value,
                        email: inputEmail.value
    } 
    let str = JSON.stringify(datosDeUsuario)
    localStorage.setItem("datosDeUsuario", str)
}

function recuperoDatosDeUsuario() {
    if (localStorage.getItem("datosDeUsuario")) {
        const datosDeUsuario = JSON.parse(localStorage.getItem("datosDeUsuario"))
              inputNombre.value = datosDeUsuario.nombre
              inputTelefono.value = datosDeUsuario.telefono
              inputEmail.value  = datosDeUsuario.email
    }    
}
recuperoDatosDeUsuario()
