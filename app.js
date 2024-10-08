const inputRed = document.getElementById('rojo');
const inputGreen = document.getElementById('verde');
const inputBlue = document.getElementById('azul');

const textoRed = document.getElementById('texto-rojo');
const textoGreen = document.getElementById('texto-verde');
const textoBlue = document.getElementById('texto-azul');

let red = parseInt(inputRed.value);
let green = parseInt(inputGreen.value);
let blue = parseInt(inputBlue.value);

textoRed.textContent = red;
textoGreen.textContent = green;
textoBlue.textContent = blue;


function actualizarColor(red, green, blue) {
document.body.style.backgroundColor = 'rgb(${red}, ${green}, ${blue})';
}


inputRed.addEventListener('input', (change) => {
  red = parseInt(change.target.value);
  textoRed.textContent = red;
  actualizarColor(red, green, blue);
});


inputGreen.addEventListener('input', (change) => {
  green = parseInt(change.target.value);
  textoGreen.textContent = green;
  actualizarColor(red, green, blue);
});


inputBlue.addEventListener('input', (change) => {
  blue = parseInt(change.target.value);
  textoBlue.textContent = blue;
  actualizarColor(red, green, blue);
});