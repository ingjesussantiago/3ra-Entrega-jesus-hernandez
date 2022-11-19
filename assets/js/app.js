 
//Constructor de objetos
 
 class Hamburguesa {
    constructor(id, nombre, ingrediente, precio,color, imagen){
      this.id = id
      this.nombre = nombre
      this.ingrediente = ingrediente
      this.precio = precio
      this.color = color
      this.imagen = imagen
  

    }
  }

// objetos y variables
const Hamburguesa_clásica = new Hamburguesa(1,"Hamburguesa Clásica","Medallón de Carne, Salchicha, Queso Amarillo, Jamón, Lechuga, Tomate, Cebolla y Chile.", 55 ,"tarjeta1", "src =assets/img/clasica.png")
const Hamburguesa_Hawaiana = new Hamburguesa(2,"Hamburguesa Hawaiana", "Medallón de Carne, Salchicha, Queso Manchego, Queso Amarillo, Tocino, Jamón, Lechuga, Tomate, Cebolla Piña y Chile.", 65,"tarjeta2","src =assets/img/hawaiana.png")
const Hamburguesa_Especial = new Hamburguesa(3,"Hamburguesa Doble", "Doble Medallón de Carne, Salchicha, Queso Manchego, Queso Amarillo, Tocino, Jamón, Lechuga, Tomate, Cebolla y Chile.",  80,"tarjeta3","src =assets/img/doble.png")
 
const main2 = document.querySelector(".button")


//Array de objetos
const Hamburguesas = [Hamburguesa_clásica,Hamburguesa_Hawaiana,Hamburguesa_Especial]


// Craccion de elementos en el dom (bloque1) con foreach

  Hamburguesas.forEach((Ham) => {
    let div = document.createElement("div")
    div.className = `col-lg-12 col-md-12 col-ms-12 ${Ham.color} rounded-4 altura` ;
    // div2.setAttribute("data-id", Ham.id)
    // div2.classList.add("botton")
    div.innerHTML =` <div class="col-10 flex pos1">
    <img class="rounded-circle bg-white p-1 posicono" ${Ham.imagen} alt="" srcset="" width="50" height="50">
    <h1 class="tituloicono">${Ham.nombre}</h1> 
    </div > `
    
    main2.appendChild(div)
  });

 



