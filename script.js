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
