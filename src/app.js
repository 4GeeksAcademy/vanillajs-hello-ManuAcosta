import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  generadorDeDominios();
};

function generadorDeDominios() {
  // 1. Arrays
  let pronombre = ['yo', 'tu', 'el', 'nosotros', 'ustedes', 'ellos'];
  let adjetivo = ['brillante', 'feo', 'bonito', 'alegre', 'enojado', 'oscuro'];
  // Palabras para hacks
  let sustantivo = ['perro', 'codigo', 'coche', 'juego', 'edificio', 'planeta', 'internet'];
  let extension = ['.com', '.es', '.io', '.net', '.org', '.info', '.mx', '.dev'];

  // 2. Bucles
  console.log("Iniciando la generación de dominios...");

  for (let i = 0; i < pronombre.length; i++) {
    for (let j = 0; j < adjetivo.length; j++) {
      for (let k = 0; k < sustantivo.length; k++) {
        // 3. Agregamos un cuarto bucle para las extensiones
        for (let l = 0; l < extension.length; l++) {

          // URL Dominio
          let dominioUno = pronombre[i] + adjetivo[j] + sustantivo[k] + extension[l];
          console.log(dominioUno);

          // Domain Hack
          let sinPunto = extension[l].slice(1);

          
          if (sustantivo[k].endsWith(sinPunto)) {
            
            let hack = pronombre[i] + adjetivo[j] + sustantivo[k].slice(0, -sinPunto.length) + extension[l];
            console.log('Domain Hack ' + hack);
          }
        }
      }
    }
  }

  console.log("¡Generación de dominios completada!");
}