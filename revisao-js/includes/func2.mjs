/* Quando um modulo exporta apenas um item pode-se utilizar export default,
só pode existir um export default por arquivo de modulo */

export default function dobraVet(vet) {
    // Cria um novo vetor na qual os elementos equivalem ao dobro dos elementos do vetor original

    let res =[]
    for (let n of vet) res.push(n * 2)
    return res

}