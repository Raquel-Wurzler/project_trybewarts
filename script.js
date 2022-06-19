// Requisito 3
const button = document.getElementById('button-login');
const emailLogin = document.getElementById('email-login');
const passwordLogin = document.getElementById('senha-login');

function login() {
  if (emailLogin.value === 'tryber@teste.com' && passwordLogin.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

button.addEventListener('click', login);

// Requisito 18

const agreement = document.getElementById('agreement');
const btn = document.getElementById('submit-btn');
btn.disabled = true;
function ativaDesativaBotao() {
  if (agreement.value === '') {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
}

agreement.addEventListener('change', ativaDesativaBotao);

// Requisito 20

const textArea = document.querySelector('textarea');
textArea.addEventListener('input', () => {
  const quantidadeDigitada = textArea.value.length;
  const counter = document.getElementById('counter');
  counter.innerText = (textArea.maxLength - quantidadeDigitada);
});

// Requisito 21

function printInfos() {
  const nome = document.getElementById('input-name').value;
  const sobrenome = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const casa = document.getElementById('house').value;
  const familia = document.querySelector('input[name=\'family\']:checked').value;
  const conteudo = document.querySelectorAll('.subject:checked');
  console.log(conteudo);
  const avaliacao = document.querySelector('input[name=\'rate\']:checked').value;
  const comentario = document.getElementById('textarea').value;
  const dados = document.getElementById('dados');
  dados.innerHTML = `Nome: ${nome} ${sobrenome};
    Email: ${email};
    Casa: ${casa};
    Família: ${familia};
    Matérias: ${[...conteudo].map((conteudos) => conteudos.value).join(', ')};
    Avaliação: ${avaliacao};
    Observações: ${comentario};`;
}

btn.addEventListener('click', () => {
  event.preventDefault();
  const infos = document.querySelector('main');
  infos.style.display = 'none';
  printInfos();
});
