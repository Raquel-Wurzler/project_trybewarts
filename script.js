// Requisito 3 (formulário de login no header)
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

// Requisito 18 (Habilite o botão "Enviar" após a validação do checkbox)

const agreement = document.getElementById('agreement');
const btn = document.getElementById('submit-btn');
btn.disabled = true;
function ativaDesativaBotao() {
  if (agreement.value === '') {
    btn.disabled = true;
  } else {
    btn.disabled = false;
    btn.style.backgroundColor = 'rgb(46, 48, 118)';
  }
}

agreement.addEventListener('change', ativaDesativaBotao);

// Requisito 20 (Crie um contador de caracteres)

const textArea = document.querySelector('textarea');
textArea.addEventListener('input', () => {
  const quantidadeDigitada = textArea.value.length;
  const counter = document.getElementById('counter');
  counter.innerText = (textArea.maxLength - quantidadeDigitada);
});

// Requisito 21 (Substitua o formulário pelas informações da pessoa estudante)
const formResultado = document.getElementById('form-data');

function printInfos() {
  const nome = document.getElementById('input-name').value;
  const sobrenome = document.getElementById('input-lastname').value;
  const familia = document.querySelector('input[name=\'family\']:checked').value;
  const conteudo = document.querySelectorAll('.subject:checked');
  const avaliacao = document.querySelector('input[name=\'rate\']:checked').value;
  const dados = document.createElement('div');
  dados.id = 'dados';
  const materias = [...conteudo].map((conteudos) => conteudos.value).join(', ');
  dados.innerHTML = `<h3>Resultado do Formulário:</h3>
    <p><strong>Nome:</strong> ${nome} ${sobrenome}</p>
    <p><strong>Email:</strong> ${document.getElementById('input-email').value}</p>
    <p><strong>Casa:</strong> ${document.getElementById('house').value}</p>
    <p><strong>Família:</strong> ${familia}</p>
    <p><strong>Matérias:</strong> ${materias}</p>
    <p><strong>Avaliação:</strong> ${avaliacao}</p>
    <p><strong>Observações:</strong> ${document.getElementById('textarea').value}</p>`;
  formResultado.appendChild(dados);
}

btn.addEventListener('click', (event) => {
  event.preventDefault();
  const infos = document.querySelector('main');
  infos.style.display = 'none';
  printInfos();
});
