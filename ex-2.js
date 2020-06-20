const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
 ];
 
//variavel que recebe as idades
const ages = usuarios.map( item => item.idade);

//usuarios com mais de 18 anos e que trabalham na empresa 'Rocketseat'
const rocket18 = usuarios.filter( item => {
  if(item.empresa ===  'Rocketseat' && item.idade >= 18) {
    return item;
  }
})

//usuarios que trabalham na empresa 'Google'
const google = usuarios.find( item => {
  return item.empresa === 'Google';
})

//multiplicação das idades por 2 e filtro para aqueles menores de 50
const mult = usuarios.map(item => ({...item, idade: item.idade*2 })).filter(item => item.idade <= 50);
console.log(mult);
