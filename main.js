

let pi = Math.PI;
let r = Number(prompt("Ingrese el radio del Cilindro", 1));
let h = Number(prompt("Ingrese la altura del Cilindro", 1));
let Volumen;
    Volumen = pi * Math.pow(r,2) * h;
function formulaVolumenCilindro(Volumen, imagen="imagenesVol/Cilindro.png"){
    document.body.insertAdjacentHTML("afterbegin", `<img src="${imagen}">`);
    return Volumen;
}
console.log(`El Volumen del Cilindro es: ${formulaVolumenCilindro(Volumen)}`);
