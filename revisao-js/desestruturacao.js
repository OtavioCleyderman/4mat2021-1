let numeros = [10,20,30] // vetor

let carros = {
    marca: "Volkswagen",
    modelo: "Fusca",
    ano: 1969,
    cor: "preto"
} // Objeto

// desestruturação do vetor

let [x, y, z] = numeros
console.log(x);
console.log(y);
console.log(z);

console.log("********************************************************")

// desestruturação parcial
// pegar apenas o segundo valor
let [, c, ,] = numeros
console.log(c);

console.log("********************************************************")

// desestruturação parcial
// pegar apenas os dois primeiros valores
let [a, b] = numeros
console.log(a);
console.log(b);

console.log("********************************************************")

// destruturação de objetos: o nome das variáveis devem ser igual
// ao nome das propriedades do objeto. A ordem das variáveis
// é indiferente

/*let{ano, modelo, cor, marca} = carros
console.log(marca)
console.log(modelo)
console.log(ano)
console.log(cor)*/

console.log("********************************************************")


// desestruturação parcial: basta passar apenas o nome das propriedades que deseja
let{marca, ano} = carros
console.log(marca)
console.log(ano)

// "renomeando" variáveis ao desestruturar um objeto
let{marca: brand, ano: year} = carros
console.log(brand)
console.log(year)
