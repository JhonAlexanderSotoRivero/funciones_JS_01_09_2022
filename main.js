

let a = Number(prompt("Ingrese la arista del Cubo", 1));
let Volumen;
    Volumen =  Math.pow(a,3);
function formulaVolumenCubo(area, imagen="imagenesVol/Cubo.png"){
    document.body.insertAdjacentHTML("afterbegin", `<img src="${imagen}">`);
    return Volumen;
}
console.log(`El Volumen del Cubo es: ${formulaVolumenCubo(Volumen)}`);

