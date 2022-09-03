

let B = Number(prompt("Ingrese la base mayor del Trapecio", 1));
let b = Number(prompt("Ingrese la base menor del Trapecio", 1));
let h= Number(prompt("Ingrese la altura del Trapecio", 1));
let area;
    area = ((B + b)/2) * h;
function formulaAreaTrapecio(area, imagen="imagenes/Trapecio.png"){
    document.body.insertAdjacentHTML("afterbegin", `<img src="${imagen}">`);
    return area;
}
console.log(`El Area del Trapecio es: ${formulaAreaTrapecio(area)}`);

