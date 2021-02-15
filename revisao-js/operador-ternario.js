let nota = 6.7
let situacao 

// Usando operador ternário
// 1º termo: condição (que seria o if)
// Separando o 1º termo do 2º termo: temos o "?""
// 2º termo: resultado caso a condição seja verdadeira 
// Separando o 2º termo do 3º termo: temos o ":"
// 3º termo: resultado caso a condição seja falsa

situacao = nota >=6 ? "Aprovado" : "Reprovado";
console.log([nota, situacao])


let user = 'root'
let msg

msg = user == 'root' || user == 'admin' ? "Super usuário" : "Usuário Comun";
console.log(msg)