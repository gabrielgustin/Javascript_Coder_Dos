parseInt(alert('Bienvenido a Lulu velas, Haga click en continuar para ver nuestro catalogo'))
let producto = parseInt(prompt('Escoge el producto que deseas: 1-COPON   2-YACKIE   3-MINITOY'))
let seguirComprando = true
let totalCompra = 0
let desicion

//Clase del propducto
class NewProduct{
    constructor(id, name,price,stock){
        this.id = id
        this.name = name;
        this.stock = stock;
        this.price = price;
    }
}
const COPON = new NewProduct(1,'COPON',1500,50)
const YACKIE = new NewProduct(2,'YACKIE',1000,50)
const MINITOY = new NewProduct(3,'MINITOY',500,50)


while(seguirComprando === true){
    if(producto === COPON.id){
        totalCompra = totalCompra + COPON.price
    }else if(producto === YACKIE.id){
        totalCompra = totalCompra + YACKIE.price
    }else if(producto === MINITOY.id){
        totalCompra = totalCompra + MINITOY.price
    }

    desicion = parseInt(prompt('Quieres seguir comprando? 1-Si   2-No'))
    if(desicion===1){
        producto = parseInt(prompt('Escoge el producto que deseas: 1-COPON   2-YACKIE   3-MINITOY'))
    } else {
        seguirComprando = false
    }
    }
const totalCompraConDescuento = descuento(totalCompra)
alert(`El total de tu compora es ${totalCompraConDescuento}`)

function descuento(valor){
    let descuento = 0
    if(valor<=1000){
        descuento = 10
    } else if(valor > 1000 && valor <= 2000){
        descuento = 15
    } else{
        descuento = 20
    }

    let valorDescuento = valor * (descuento/100)
    let valorFinal = valor - valorDescuento
    return valorFinal
}