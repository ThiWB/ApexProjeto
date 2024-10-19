// LoginScript.js
function handleRegistration(event) {
    event.preventDefault(); // Impede o envio do formulário

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Salva as informações no localStorage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Conta criada com sucesso!');
}

function handleLogin(event) {
    event.preventDefault(); // Impede o envio do formulário

    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Verifica as informações salvas
    if (loginEmail === localStorage.getItem('email') && loginPassword === localStorage.getItem('password')) {
        alert('Login bem-sucedido!');
        window.location.href = 'Register.html'; // Redireciona para a página Home
    } else {
        alert('Email ou senha incorretos.');
    }
}

function googleLogin() {
    // Simulação de login com Google
    alert('Login com Google (simulação)');
}
