

let b = Number(prompt("Ingrese la base del Triangulo", 1));
let h = Number(prompt("Ingrese la altura del Triangulo", 1));
let area;
    area = (b * h) / 2;
function formulaAreaTriangulo(area, imagen="imagenes/Triangulo.png"){
    document.body.insertAdjacentHTML("afterbegin", `<img src="${imagen}">`);
    return area;
}
console.log(`El Area del Triangulo es: ${formulaAreaTriangulo(area)}`);

