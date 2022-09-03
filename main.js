

let P = Number(prompt("Ingrese el perimetro del PoligonoRegular", 1));
let a = Number(prompt("Ingrese el apotema del PoligonoRegular", 1));
let area;
    area = ((P / 2) * a);
function formulaAreaPoligonoRegular(area, imagen="imagenes/PoligonoRegular.png"){
    document.body.insertAdjacentHTML("afterbegin", `<img src="${imagen}">`);
    return area;
}
console.log(`El Area del PoligonoRegular es: ${formulaAreaPoligonoRegular(area)}`);

