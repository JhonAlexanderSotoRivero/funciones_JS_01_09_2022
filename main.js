

let r = Number(prompt("Ingrese el radio de la Esfera", 1));
let pi = Math.PI;
let Volumen;
    Volumen = 4/3 * (pi * Math.pow(r,3));
function formulaVolumenEsfera(Volumen, imagen="imagenesVol/Esfera.png"){
    document.body.insertAdjacentHTML("afterbegin", `<img src="${imagen}">`);
    return Volumen;
}
console.log(`El Volumen de la Esfera es: ${formulaVolumenEsfera(Volumen)}`);
