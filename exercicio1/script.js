// function saudacao (nome){
//     return console.log(`Olá, ${nome}.`)
// }

// function tabuada (numero){
//     for (i = 1; i <=10; i++){
//         console.log(`${i} X ${numero} = ${i*numero}`)
//     }
// }

// console.log (saudacao("Marllon"))

// console.log (tabuada(6))

let saudacao = (nome) => console.log(`Olá, ${nome}.`)

let tabuada = (numero) => {
    for (i = 1; i <=10; i++){
console.log(`${i} X ${numero} = ${i*numero}`)
}
}

console.log(
    saudacao ('Marllon'),
    tabuada (6)
)