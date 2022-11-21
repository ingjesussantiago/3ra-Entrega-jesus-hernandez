 
//Constructor de objetos
 
 class Hamburguesa {
    constructor(id, nombre, ingrediente, precio,color, imagen, colordef){
      this.id = id
      this.nombre = nombre
      this.ingrediente = ingrediente
      this.precio = precio
      this.color = color
      this.colordef = colordef
      this.imagen = imagen
  

    }
  }

// objetos y variables
const Hamburguesa_clásica = new Hamburguesa(1,"Hamburguesa Clásica","Medallón de Carne, Salchicha, Queso Amarillo, Jamón, Lechuga, Tomate, Cebolla y Chile.", 55 ,"tarjeta1", "assets/img/clasica.png","#f4ff81")
const Hamburguesa_Hawaiana = new Hamburguesa(2,"Hamburguesa Hawaiana", "Medallón de Carne, Salchicha, Queso Manchego, Queso Amarillo, Tocino, Jamón, Lechuga, Tomate, Cebolla Piña y Chile.", 65,"tarjeta2","assets/img/hawaiana.png","#ffab91")
const Hamburguesa_Especial = new Hamburguesa(3,"Hamburguesa Doble", "Doble Medallón de Carne, Salchicha, Queso Manchego, Queso Amarillo, Tocino, Jamón, Lechuga, Tomate, Cebolla y Chile.",  80,"tarjeta3","assets/img/doble.png","#81d4fa")
 
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

//Array de objetos
const Hamburguesas = [Hamburguesa_clásica,Hamburguesa_Hawaiana,Hamburguesa_Especial]

const añadiendo_productos =[]; 


// Craccion de elementos en el dom (bloque1) con foreach

//funciones 

const rederizardatos = (e)=> {
  const hamselecta = e.target.closest(".llamado").getAttribute("data-id");
  
  const hamelegida = Hamburguesas.find((Ham) => Ham.id ==hamselecta)
  // console.log(hamelegida);
  
  titulo.textContent = hamelegida.nombre
  desc.textContent = hamelegida.ingrediente
  precio.textContent = `$${hamelegida.precio}`
  imgbloque.setAttribute("src",hamelegida.imagen)
  botonañadir.setAttribute("data-id",hamelegida.id)

    
  botonañadir.addEventListener("click",agregararray)
  
}
const agregararray =  (e)=>{
  
  const hamselecta = e.target.getAttribute("data-id")
  const hamelegida =Hamburguesas.find((Ham)=>Ham.id ==hamselecta)
  
  añadiendo_productos.push(hamelegida.precio*cantidad.value)
  console.log(añadiendo_productos);
  
  const total = añadiendo_productos.reduce((acumulador, elemento) => acumulador + elemento, 0);
console.log(total);
}



//función que renderiza en el DOM,los objetos de un array 

const renderizaobjetos = () => {
  añadiendo_productos.innerHTML=""
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
    div.addEventListener ('click', rederizardatos)
  })
    
}





//Eventlisteners




//ejecución
renderizaobjetos();


 



