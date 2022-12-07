 
//Constructor de objetos

 class Hamburguesa {
    constructor(id, nombre, ingrediente, precio,color, imagen, colordef, cantidad){
      this.id = id
      this.nombre = nombre
      this.ingrediente = ingrediente
      this.precio = precio
      this.color = color
      this.colordef = colordef
      this.imagen = imagen
      this.cantidad = cantidad
         
    }
    get preciototal(){
      return this.calculaprecio();
    }
    calculaprecio(){
      return this.cantidad * this.precio
    }
  }

// objetos y variables
const Hamburguesa_clásica = new Hamburguesa(1,"Hamburguesa Clásica","Medallón de Carne, Salchicha, Queso Amarillo, Jamón, Lechuga, Tomate, Cebolla y Chile.", 55 ,"tarjeta1", "assets/img/clasica.png","#f4ff81", "1")
const Hamburguesa_Hawaiana = new Hamburguesa(2,"Hamburguesa Hawaiana", "Medallón de Carne, Salchicha, Queso Manchego, Queso Amarillo, Tocino, Jamón, Lechuga, Tomate, Cebolla Piña y Chile.", 65,"tarjeta2","assets/img/hawaiana.png","#ffab91","1" )
const Hamburguesa_Especial = new Hamburguesa(3,"Hamburguesa Doble", "Doble Medallón de Carne, Salchicha, Queso Manchego, Queso Amarillo, Tocino, Jamón, Lechuga, Tomate, Cebolla y Chile.",  80,"tarjeta3","assets/img/doble.png","#81d4fa","1")
 
//query 

const main2 = document.querySelector("#main2")
const imgbloque =document.querySelector("#imgbloquedos")
const titulo = document.querySelector("#title")
const desc = document.querySelector("#desc")
const precio = document.querySelector("#presio")
const colordef =document.querySelector("#colordef")

const cantidad =document.querySelector("#IntroduceCantidad")
const preciobloque = document.querySelector(".pos5")
const botonañadir = document.querySelector("#botonañadir")
const guardarstore =document.querySelector("#guardarstore")
const comprar = document.querySelector("#comprar")
const visual = document.querySelector("#visual")

const visualtotal =document.querySelector("#muestratotal")

const Menu =document.querySelector("#Menu")




//Array de objetos
const Hamburguesas = [Hamburguesa_clásica,Hamburguesa_Hawaiana,Hamburguesa_Especial]

// const añadiendo_cantidad = [];
const carrito =[]

// Craccion de elementos en el dom (bloque1) con foreach

//funciones 
/*esta función renderiza en el cuadro central el producto selecionado*/

const rederizardatos = (e)=> {
  const hamselecta = e.target.closest(".llamado").getAttribute("data-id");
  
  const hamelegida = Hamburguesas.find((Ham) => Ham.id ==hamselecta)
 
  
  titulo.textContent = hamelegida.nombre
  desc.textContent = hamelegida.ingrediente
  precio.textContent = `$${hamelegida.precio}`
  imgbloque.setAttribute("src",hamelegida.imagen)
  botonañadir.setAttribute("data-id",hamelegida.id)
  botonañadir.addEventListener("click",agregarabolsa)
  
}

  const agregarabolsa =  (e)=>{
 
  const hamselecta = e.target.getAttribute("data-id")
  const hamelegida =Hamburguesas.find((Ham)=>Ham.id ==hamselecta)
  
  hamelegida.cantidad=cantidad.value  //la propiedad.cantidad la cambia por el valor cambiado
  carrito.push(hamelegida)  //agraga al array carrito el producto

  const sumaprueba = carrito.reduce((acumulador, elemento) => acumulador + elemento.preciototal, 0);//suma el precio total
 
  
  document.getElementById("total").innerText =`$${sumaprueba}`
  document.getElementById("total2").innerText=`$${sumaprueba}`
  
  rederizarcompra()
 
}

const rederizarcompra = ()=>{
//  carrito.forEach((producto) =>{
// let div = document.createElement ("div")
// div.innerHTML = `<h6 class="my-0">${producto.nombre}</h6>
// <small class="text-muted">${producto.cantidad}</small> `





//  })
}
const mostrarboton = ()=>{
  document.getElementById("bloquecar").style.display="block"
  document.getElementById("Menu").style.display="none"
  
}
const muestramenu =()=>{
  document.getElementById("main2").style.display="flex"
}
//función que renderiza en el DOM,los objetos del menu

const renderizaobjetos = () => {
  Hamburguesas.forEach((Ham) => {
    let div = document.createElement("div")
    div.className = `col-lg-12 col-md-12 col-ms-12 ${Ham.color} rounded-4 altura` ;
    div.classList.add("llamado")
    div.setAttribute("data-id",Ham.id)
    div.innerHTML =` <div class="col-10 flex pos1">
    <img class="rounded-circle bg-white p-1 posicono" src= ${Ham.imagen} alt="" srcset="" width="50" height="50">
    <h1 class="tituloicono">${Ham.nombre}</h1> 
    </div > `
    
    main2.appendChild(div)
  });
   
  const divs = document.querySelectorAll(".llamado")
  divs.forEach((div) => {
    div.addEventListener ('click', rederizardatos);
    div.addEventListener ("click", mostrarboton)
       
  })

}

//función guarda el usuario en store
const guardanombrelocalstore = () =>{
const nombrebolsa = localStorage.getItem("nombre")
document.getElementById("nombrebolsa").innerText=`${nombrebolsa}`
document.getElementById("visual").style.display="none"
document.getElementById("desc").innerText= `${nombrebolsa}, tendras la amabilidad de Seleccionar uno de nuestros productos`
document.getElementById("Menu").style.display="flex"
}

//función que pide nombre si usuario no tipea su nombre 

const guardarnombre = () =>{
const nombre = document.getElementById("usuario").value

if (nombre) {
localStorage.setItem("nombre",nombre)
guardanombrelocalstore()
}else{
  
const nombre =prompt("Ingrese su nombre")
localStorage.setItem("nombre",nombre)
guardanombrelocalstore()
}
}



const muestratotales =() =>{
  // console.log("ok");
  // document.getElementById("muestratotal").style.display="block"
}

//Eventlisteners

guardarstore.addEventListener("click",guardarnombre);
comprar.addEventListener("click",muestratotales);
Menu.addEventListener("click",muestramenu)





//ejecución
renderizaobjetos();
