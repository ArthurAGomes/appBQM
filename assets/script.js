document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const dropdownMenu = document.getElementById('dropdownMenu');

    menuToggle.addEventListener('click', function () {
        if (dropdownMenu.style.left === '0px') {
            dropdownMenu.style.left = '-100%';
        } else {
            dropdownMenu.style.left = '0';
        }
    });

    document.addEventListener('click', function (event) {
        if (!menuToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.left = '-100%';
        }
    });
});
// Validação de cadastro dos usuarios 
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = event.target.nome.value.trim();
    const email = event.target.email.value.trim();
    const telefone = event.target.telefone.value.trim();
    const senha = event.target.senha.value.trim();
    const confirmacaoSenha = event.target.confirmacao_senha.value.trim();

    // Validação de campos obrigatórios
    if (!nome || !email || !telefone || !senha || !confirmacaoSenha) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Validação de formato de e-mail
    if (!validateEmail(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    // Validação de número de telefone (exemplo simples)
    if (!validatePhoneNumber(telefone)) {
        alert('Por favor, insira um número de telefone válido.');
        return;
    }

    // Validação de confirmação de senha
    if (senha !== confirmacaoSenha) {
        alert('As senhas não coincidem.');
        return;
    }

    // Exibir mensagem de sucesso
    document.getElementById('successMessage').classList.remove('hidden');

    // Resetar formulário após um breve atraso
    setTimeout(() => {
        document.getElementById('cadastroForm').reset();
        document.getElementById('successMessage').classList.add('hidden');
    }, 3000);
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePhoneNumber(phone) {
    const re = /^\d{10,11}$/;
    return re.test(phone);
}