let soma = (a, b) => console.log(a + b);

let comparacao = (a, b) => console.log(a > b);

let verificacao = (a) => {
  if (a % 2 === 0) {
    console.log(`${a} é um número par`);
  } else {
    console.log(`${a} é um número impar`);
  }
};

let string = (texto) => {
    console.log(`A string contém ${texto.length} letras.`)
    console.log(texto.toUpperCase())
}

soma (3,4)
comparacao(3,4)
verificacao(8)
string("elementos")