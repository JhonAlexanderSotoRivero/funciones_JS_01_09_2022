

let Ab= Number(prompt("Ingrese el Area de la base del Prisma", 1));
let h = Number(prompt("Ingrese la altura del Prisma", 1));
let Volumen;
    Volumen =  (Ab * h);
function formulaVolumenPrisma(area, imagen="imagenesVol/Prisma.png"){
    document.body.insertAdjacentHTML("afterbegin", `<img src="${imagen}">`);
    return Volumen;
}
console.log(`El Volumen del Prisma es: ${formulaVolumenPrisma(Volumen)}`);

