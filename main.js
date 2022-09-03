

let D = Number(prompt("Ingrese el diagonal mayor del Rombo", 1));
let d = Number(prompt("Ingrese el diagonal menor del Rombo", 1));
let area;
    area = (D * d) / 2;
function formulaAreaRombo(area, imagen="imagenes/Rombo.png"){
    document.body.insertAdjacentHTML("afterbegin", `<img src="${imagen}">`);
    return area;
}
console.log(`El Area del Rombo es: ${formulaAreaRombo(area)}`);

