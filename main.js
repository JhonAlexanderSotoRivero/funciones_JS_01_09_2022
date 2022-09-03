

let Ab = Number(prompt("Ingrese el Area de base del Cono", 1));
let h = Number(prompt("Ingrese la altura del Cono", 1));
let Volumen;
    Volumen = ((1/3 * Ab) * h);
function formulaVolumenCono(Volumen, imagen="imagenesVol/Cono.png"){
    document.body.insertAdjacentHTML("afterbegin", `<img src="${imagen}">`);
    return Volumen;
}
console.log(`El Volumen del Cono es: ${formulaVolumenCono(Volumen)}`);
