
let app = document.getElementById("app");
app.addEventListener("click", reinicio)


let cantidad=""


function reinicio() {

  const añadiendo_productos =[];  
    
  function solicitar() {
do {
   cantidad = prompt("ingrese cantidad")
} while (cantidad == "" || cantidad == 0 );

  }  

  function pedido() {
    
    opción=prompt("Ingrese el producto que desea  acorde al numero correspondiente:\n1. Hamburguesa clásica  \n2. Hamburguesa Hawaiana \n3. Hamburguesa doble");
      
    opción=Number(opción);
  
  switch (opción) {
  
    case 1:
      precio=Hamburguesa_clásica.precio;
      solicitar()
      añadiendo_productos.push (Hamburguesa_clásica.precio*cantidad)
      console.log(añadiendo_productos);
      break;
  
    case 2:
      precio=Hamburguesa_Hawaiana.precio;
      solicitar()
      añadiendo_productos.push (Hamburguesa_Hawaiana.precio*cantidad);
      console.log(añadiendo_productos);
      break;
  
    case 3:
      precio=Hamburguesa_Especial.precio;
      solicitar()
      añadiendo_productos.push (Hamburguesa_Especial.precio*cantidad);
      console.log(añadiendo_productos);
      break;
  
    default:
        alert("No solicito Nada");
        pedido()
        break;
      
    
  }
  
  opción2=prompt( "¿Desea agregar algo mas a su cuenta: \n1. si , Seguir Comprando  \n2. No, La cuenta por Favor ");
  
  if (opción2==2) {
    
    Opción3= prompt("Solicita Servicio a Domicilio:\n1. si  \n2. No ");
    
    if (Opción3==1) {
      let cliente=prompt("Ingrese su Nombre por favor");
      let dirección=prompt("Ingrese su dirección");
      
      const total = añadiendo_productos.reduce((acumulador, elemento) => acumulador + elemento, 0);
      console.log(total);
      totalmasiva = total+15;
      
      alert("Estimado(a) "+ cliente +" Su cuenta es de "+ totalmasiva + " y se entrega en la siguiente dirección: " + dirección );
      
      
    }
    if (Opción3==2) {
      let cliente=prompt("Ingrese su Nombre por favor");
      const total = añadiendo_productos.reduce((acumulador, elemento) => acumulador + elemento, 0);
      console.log(total);
      totalmasiva = total;
      alert("Estimado(a) "+ cliente +" Su cuenta es de "+ totalmasiva + " y se entrega en sucursal" );
         
    }
    
    if (opción2 == "" || opción2 == 0 || opción2 !=1 || opción2 !=2 ) {
      alert("corregir")
    }

      
  }
  
  if (opción2 == 1) {
      pedido()
  }
  
  }
  
  pedido();
  }




