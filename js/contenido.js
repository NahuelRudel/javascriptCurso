const retornoCardContenido = (contenido)=> {
    const {imagen, nombre, precio} = contenido
    return `<div class="col-sm-3">
                <div class="card" style="width: 18rem;">
                    <img src="${imagen}" class="card-img-top imgProducto" alt="${nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${nombre}</h5>
                        <p class="card-text">$ ${precio}</p>
                        <a href="#" class="btn btn-primary">COMPRAR</a>
                    </div>
                </div>
            </div>`
}

const obtenerContenido = (URL)=> {
    let cardsAmostrar = ""
    fetch(URL)
        .then((response)=> response.json() )
        .then((data)=> {
            for (contenido of data) {
                cardsAmostrar += retornoCardContenido(contenido)
            }
            contenidoDOM.innerHTML = cardsAmostrar
        })
}