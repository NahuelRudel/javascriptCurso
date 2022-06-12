//Llenar automaticamente el array "productos"
function generadorAutomatico() {
    productos.push(new Producto(123, "MICRO INTEL CORE I3", 13950))
    productos.push(new Producto(234, "MICRO INTEL I5", 24590))
    productos.push(new Producto(345, "MICRO AMD RYZEN 5", 20830))
    productos.push(new Producto(456, "MICRO AMD RYZEN 7", 32740))
    productos.push(new Producto(567, "PLACA DE VIDEO GTX 1660", 67820))
    productos.push(new Producto(678, "PLACA DE VIDEO GTX 1050 TI", 59500))
    productos.push(new Producto(789, "RAM 8GB 3200MHZ KINGSTON", 8380))
    productos.push(new Producto(890, "RAM 32GB 4800MHZ VIPER", 27800))
    productos.push(new Producto(901, "TECLADO HYPERX ALLOY ORIGINS", 9490))
    productos.push(new Producto(012, "TECLADO CORSAIR K60 PRO", 12820))
}
generadorAutomatico()

//Agrega productos al carrito
function generarCarrito() {
    carrito.push(new Producto(234, "MICRO INTEL I5", 24590))
    carrito.push(new Producto(567, "PLACA DE VIDEO GTX 1660", 67820))
    carrito.push(new Producto(890, "RAM 32GB 4800MHZ VIPER", 27800))
    carrito.push(new Producto(012, "TECLADO CORSAIR K60 PRO", 12820))
}
generarCarrito()

//Crear ID aleatorio
function creoID() {
    return parseInt(Math.random() * 1000)
}

//Mostrar en una tabla el array "productos"
function listarProductos() {
    console.table(productos)
} 

//Agregar producto al array "productos"
function agregarProducto() {
    let id = creoID()
    let nombre = prompt("Ingresa el nombre del producto:").toUpperCase()
    let precio = parseInt(prompt("Ingresa el precio:"))
        productos.push(new Producto(id, nombre, precio))
    alert("Producto agregado correctamente")
}

//Listar todos los nombres de los productos incluidos en el array "productos"
function listarNombresProductos() {
    productos.forEach((producto)=> { 
        console.log(producto.nombre)
    });
}

//Buscar el primer producto dentro del array "productos" con la característica ingresada
function buscarProducto() {
    let aBuscar = prompt("Ingrese el nombre del producto a buscar:").toUpperCase()
        let resultado = productos.find((producto)=> producto.nombre.includes(aBuscar))
        if (resultado !== undefined) {
            console.clear()
            console.table(resultado)
        }
}

//Buscar todos los productos dentro del array "productos" con la característica ingresada
function filtrarProductos() {
    let aBuscar = prompt("Ingrese el nombre del producto a buscar:").toUpperCase()
    let resultado = productos.filter((producto)=> producto.nombre.includes(aBuscar))
        if (resultado !== undefined) {
            console.clear()
            console.table(resultado)
        }
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
    console.clear()
    let total = carrito.reduce((acc, producto)=> acc + producto.precio, 0)
        console.log("TOTAL DEL CARRITO:", total)
}
