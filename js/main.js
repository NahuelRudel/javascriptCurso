

// function cargarProductos() {
//     listadoProductos.innerHTML = ""
//     for (const producto of productos) {
//         const li = document.createElement("li") 
//               li.innerText = producto.nombre
//               li.id = producto.id
//               li.addEventListener("click", ()=> { agregarAlCarrito(`${li.innerText}`) } )
//               listadoProductos.append(li)
//     }
// }

// cargarProductos()

document.addEventListener("DOMContentLoaded", ()=> {
    setTimeout(() => {
        obtenerContenido(URL)      
    }, 1000);
 })


//Agregar al carrito los productos seleccionados
function agregarAlCarrito(prod) {
    if (prod.trim() !== "") {
        carrito.push(prod)
        guardoCarrito()
        const liNuevoProducto = document.createElement("li")
              liNuevoProducto.innerText = prod
              liNuevoProducto.id = prod
              liNuevoProducto.addEventListener("dblclick", ()=> { removerDelCarrito(`${liNuevoProducto.id}`) }) 
              listadoCarrito.append(liNuevoProducto)
    }
    Swal.fire({
        text: `${prod} se agregó del carrito.`,
        icon: 'success',
        showConfirmButton: false,
        toast: true,
        timer: 3000,
        timerProgressBar: true,
        position: "bottom-end",
        background: "#47AE2C",
        color: "white"
      })
}

//Quitar del carrito los productos seleccionados
function removerDelCarrito(prod) {
    const productoAremover = document.getElementById(`${prod}`)
          productoAremover.remove()
          item = carrito.indexOf(productoAremover.innerText)
          if (item >= 0) {
            carrito.splice(item, 1)
            guardoCarrito()
          }
        Swal.fire({
            text: `${prod} ha sido eliminado del carrito.`,
            icon: 'warning',
            showConfirmButton: false,
            toast: true,
            timer: 3000,
            timerProgressBar: true,
            position: "bottom-end",
            background: "#A80000",
            color: "white"
          })
}

// Guardar carrito en localStorage
function guardoCarrito() {
    if (carrito.length > 0) {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }
}

// Recuperar el carrito desde el localStorage
function recuperoCarrito() {
    if (miCarrito = JSON.parse(localStorage.getItem("carrito"))) {
        miCarrito.forEach(prod => {
            carrito.push(prod)
            const liNuevoProducto = document.createElement("li")
                  liNuevoProducto.innerText = prod
                  liNuevoProducto.id = prod
                  liNuevoProducto.addEventListener("dblclick", ()=> { removerDelCarrito(`${liNuevoProducto.id}`) }) 
                  listadoCarrito.append(liNuevoProducto)
        })
    }
}
recuperoCarrito()

//Crear ID aleatorio
function creoID() {
    return parseInt(Math.random() * 1000)
}

//Mostrar en una tabla el array "productos"
function listarProductos() {
    console.table(productos)
} 

//Listar todos los nombres de los productos incluidos en el array "productos"
function listarNombresProductos() {
    productos.forEach((producto)=> { 
        console.log(producto.nombre)
    });
}

//Buscar el primer producto dentro del array "productos" con la característica ingresada
function buscarProducto() {
    (async () => {
        const { value: productoAbuscar } = await Swal.fire({
            title: 'Ingresa el producto a buscar',
            input: 'text',
            inputLabel: '(En mayúscula)',
            inputPlaceholder: 'Producto a buscar:'
          })
          let resultado = productos.find((producto)=> producto.nombre.includes(productoAbuscar))
          if (resultado !== undefined) {
              console.clear()
              console.table(resultado)
          }
    })()      
}

//Buscar todos los productos dentro del array "productos" con la característica ingresada
function filtrarProductos() {
    (async () => {
        const { value: productoAfiltrar } = await Swal.fire({
            title: 'Ingresa el producto a buscar',
            input: 'text',
            inputLabel: '(En mayúscula)',
            inputPlaceholder: 'Producto a buscar:'
          })
        let resultado = productos.filter((producto)=> producto.nombre.includes(productoAfiltrar))
        if (resultado !== undefined) {
            console.clear()
            console.table(resultado)
        }       
    })()   
}

//Aumentar el precio de todos los productos dentro del array "productos", creando otro array con los nuevos precios 
function aumentarPrecios(porc) {
    let proyeccion = productos.map((producto)=> {
            return {
                id: producto.id,
                nombre: producto.nombre,
                precio: producto.precio,
                proyeccion: (producto.precio * porc).toFixed(2)
            }
    })
    console.table(proyeccion)
}

//Sumar todos los precios de los productos incluidos en el carrito
function calcularCarrito() {
    debugger
    // console.clear()
    let total = carrito.reduce((acc, producto)=> acc + producto.precio, 0)
        console.log("TOTAL DEL CARRITO:", total)
}