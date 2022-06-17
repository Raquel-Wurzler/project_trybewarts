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

function printInfos () {
    const nome = document.getElementById('input-name').value;
    const um = document.getElementById('1');
    um.innerHTML = nome;
    const sobrenome = document.getElementById('input-lastname').value;
    const dois = document.getElementById('2');
    dois.innerHTML = sobrenome;
    const email = document.getElementById('input-email').value;
    const tres = document.getElementById('3');
    tres.innerHTML = email;
    const casa = document.getElementById('house').value;
    const quatro = document.getElementById('4');
    quatro.innerHTML = casa;
    const familia = document.getElementsByClassName('radios').value;
    const cinco = document.getElementById('5');
    cinco.innerHTML = familia;
    const conteudo = document.getElementsByClassName('checked').value;
    const seis = document.getElementById('6');
    seis.innerHTML = conteudo;
    const avaliacao = document.getElementById('label-rate').value;
    const sete = document.getElementById('7');
    sete.innerHTML = avaliacao;
    const comentario = document.getElementById('textarea').value;
    const oito = document.getElementById('8');
    oito.innerHTML = comentario;
    const concordo = document.getElementById('agreement').value;
    const nove = document.getElementById('9');
    nove.innerHTML = concordo;

  
}

btn.addEventListener('click', () => {
  event.preventDefault();
  const infos = document.querySelector('main');
  infos.style.display = 'none';
  printInfos();
});
