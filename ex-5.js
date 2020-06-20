//5.1
const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

// console.log(x);
// console.log(y);

//5.2
const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
  cidade: 'Rio do Sul',
  uf: 'SC',
  pais: 'Brasil',
  }
};

const usuario1 = {...usuario, nome:'Gabriel'};
const usuario2 = {...usuario, endereco: {cidade:'Lontras'}};

console.log(usuario1);
console.log(usuario2);

