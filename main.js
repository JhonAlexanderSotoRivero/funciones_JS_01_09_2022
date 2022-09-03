

let l = Number(prompt("Ingrese lel largo del Ortoedro", 1));
let a = Number(prompt("Ingrese la ancho del Ortoedro", 1));
let h = Number(prompt("Ingrese la altura del Ortoedro", 1));
let Volumen;
    Volumen =  (l * a * h);
function formulaVolumenOrtoedro(area, imagen="imagenesVol/Ortoedro.png"){
    document.body.insertAdjacentHTML("afterbegin", `<img src="${imagen}">`);
    return Volumen;
}
console.log(`El Volumen del Ortoedro es: ${formulaVolumenOrtoedro(Volumen)}`);

