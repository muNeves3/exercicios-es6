# exercicios-es6-rocketseat

# Exercícios do módulo 1:

**1) Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve
extender uma segunda classe chamada "Usuario".**

**A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los
em propriedades da classe. A classe "Admin" por sua vez não recebe parâmetros mas deve
repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" como
true na classe.**

**Agora com suas classes formatadas, adicione um método na classe Usuario chamado `isAdmin` que
retorna se o usuário é administrador ou não baseado na propriedade `admin` ser `true` ou não** 

```JavaScript
const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true
```

**2) A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):**

```JavaScript
const usuarios = [
 { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
 { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
 { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];
```
**2.1) Utilizando o `map`**

Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]

**2.2) Utilizando o `filter`**

Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

**2.3 Utilizando o `find`**

Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined

**2.4 Unindo operações**

Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
no máximo 50 anos:

```JavaScript
// Resultado:
[
 { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
 { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
]
```






