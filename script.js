const button = document.getElementById('button');

function login() {
  const email = document.getElementById('email');
  const password = document.getElementById('senha');
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

button.addEventListener('click', login);
