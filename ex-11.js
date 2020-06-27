import axios from 'axios';

//exercicio 11
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo() {
  await delay(console.log('1s'));
  await delay(console.log('2s'));
  await delay(console.log('3s'));
}

umPorSegundo();

//exercicio 11.1

async function getUserFromGithub(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  }catch(err) {
    console.warn('Usuário não existe');
  }
}

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');

//exercicio 11.2

class Github {
  static async getRepositories(repo) {
    try{
      const response = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(response.data);
    } catch (err) {
      console.warn('Repositório não existe');
    }
  }
}

Github.getRepositories('muNeves3/Validador-cpf');
Github.getRepositories('rocketseat/dslkvmskv');

//exercicio 11.3

const buscaUsuario = async user => {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  }catch(err) {
    console.warn('Usuario não existe');
  }
}

buscaUsuario('diego3g');
