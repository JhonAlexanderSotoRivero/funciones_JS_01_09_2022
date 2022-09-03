

let pi = Math.PI;
let r = Number(prompt("Ingrese el radio del Cono", 1));
let g = Number(prompt("Ingrese el generatriz del Cono", 1));
let area;
    area = ((pi * r) * g);
function formulaAreaCono(area, imagen="imagenes/Cono.png"){
    document.body.insertAdjacentHTML("afterbegin", `<img src="${imagen}">`);
    return area;
}
console.log(`El Area del Cono es: ${formulaAreaCono(area)}`);

