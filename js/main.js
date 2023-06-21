//Definicion de funciones

//Calcular huella de carbono de km recorridos
function conducir(){
    let kilometros = Number(prompt("Ingresa el número de kilómetros que recorres en un día para ir al trabajo o escuela"));
    console.log("Primero calcularemos la huella de carbono del transporte");
    while(isNaN(kilometros)){
        alert("Ingrese una cantidad válida");
        kilometros = Number(prompt("Ingresa el número de kilómetros que recorres en un día para ir al trabajo o escuela"));
    }
     //Un auto de gasolina promedio genera 192 g de CO2 por km
     //Formula kg de CO2 anuales --> km * 0.192 kg *7 dias* 52 semanas 
    kgeqconducir=kilometros*0.192*7*52;
    conducirtext=" 🚗 En un año, por ir al trabajo o escuela generas "+kgeqconducir+" kg de CO2";
    alert(conducirtext);
    console.log(conducirtext);
    document.write('<div class="cardimgs"><img src="img/1.png" alt="Driving" /></div>');
    return kgeqconducir;
}


//Calcular huella de carbono de alimentos
function comida() {
  console.log("Ahora calcularemos la huella de carbono de tu comida favorita");
  let opalimentos = prompt("Ingresa el número que corresponde a tu alimento favorito: 1-Salmón, 2-Carne Asada, 3-Pizza");
  let kgeqcomida = 0; // Inicializamos la variable para evitar errores
  
  switch (opalimentos) {
    // Calculo huella de carbono considerando que se comen 20 unidades anualmente
    case "1":
      // 1 kg de salmón genera 10.4 kg de CO2
      kgeqcomida = 10.4 * 20;
      flg=true;
      document.write('<div class="cardimgs"><img src="img/2.png" alt="Food Salmon" /></div>');
      break;
    case "2":
      // 1 kg de carne genera 21.7 kg de CO2
      kgeqcomida = 21.7 * 20;
      flg=true;
      document.write('<div class="cardimgs"><img src="img/3.png" alt="Food Meat" /></div>');
      break;
    case "3":
      // Una caja de pizza genera 263 gr de CO2
      kgeqcomida = 0.263 * 20;
      flg=true;
      document.write('<div class="cardimgs"><img src="img/4.png" alt="Food Pizza" /></div>');
      break;

    default:
      console.log("Opción no válida");
      alert("Opción no válida, inicia de nuevo");
  }
  
  if (flg){
    let comidatext = "🥗 Suponiendo que en un año comes 20 unidades de tu alimento favorito, generas " + kgeqcomida + " kg de CO2";
    alert(comidatext);
    console.log(comidatext); 
    return kgeqcomida;
  } 
}

function mascotas(){
  var numanimales = Number(prompt('¿Cuántas mascotas (perros/gatos) tienes?'));
  while(isNaN(numanimales)){
    alert("Ingrese una cantidad válida");
    numanimales = Number(prompt("¿Cuántas mascotas (perros/gatos) tienes?"));
  }
  for (let i = 1; i <= numanimales; i++) {
    kgco2mascotas=0;
    opmascotas = prompt("Ingresa 1 si la mascota # "+String(i)+" es un perro, y 2 si es un gato");
    while(isNaN(opmascotas)){
      alert("Ingrese una clase válida");
      opmascotas = prompt("Ingresa 1 si la mascota # "+String(i)+" es un perro, y 2 si es un gato");
    }
    if(opmascotas==1){
      kgco2mascotas+=770;
    }else if(opmascotas==2){
      kgco2mascotas+=310;
    } else{
      alert("No válido, inicia de nuevo");
    }
  }
  document.write('<div class="cardimgs"><img src="img/5.png" alt="Pets" /></div>');
  return kgco2mascotas
}

let inicio = confirm("Bienvenido a Carbon Tracker, en este simulador podrás calcular tu huella ecológica");
let kgco2acum=0
if (inicio){
  kgco2acum+=conducir();
  kgco2acum+=comida();
  kgco2acum+=mascotas();
  totaltext="🌏 Tu transporte, alimentos y mascotas acumulan "+kgco2acum+" kilogramos de CO2 equivalente";
  console.log(totaltext);
  alert(totaltext);
  divElement = document.createElement('div');
  divElement.id = 'totalcfp';
  divElement.style.padding = '20px';
  divElement.style.display = 'flex';
  divElement.style.alignItems = 'center';
  divElement.style.justifyContent = 'center';
  document.body.appendChild(divElement);
  divElement.textContent = totaltext;

} else{
    alert("Hasta la próxima");
}




