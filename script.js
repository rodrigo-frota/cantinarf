function toggleMenu() {
    const menu = document.getElementById("side-menu");
    const overlay = document.getElementById("menu-overlay");
    if (menu.style.width === "250px") {
        menu.style.width = "0";
        overlay.style.display = "none";
    } else {
        menu.style.width = "250px";
        overlay.style.display = "block";
    }
}


// Garante que a função execute ao carregar a página
window.addEventListener('DOMContentLoaded', ajustarMenuPorPerfil);
// Função para garantir estado deslogado ao abrir o site pela primeira vez
function verificarSessaoInicial() {
    // Se você quer que SEMPRE comece deslogado ao fechar e abrir o navegador, 
    // use sessionStorage em vez de localStorage para o perfilUsuario no login.html.
    
    // Para manter no localStorage mas garantir que a Home carregue limpa:
    if (!document.referrer.includes('login.html') && !localStorage.getItem('perfilUsuario')) {
        localStorage.removeItem('perfilUsuario');
    }
}

window.addEventListener('DOMContentLoaded', () => {
    verificarSessaoInicial();
    ajustarMenuPorPerfil(); // Esta função já cuida de esconder o ADM e mostrar o botão LOGIN
    carregarCardapioNasTabelas();
});

// Chame a função no carregamento
window.addEventListener('DOMContentLoaded', () => {
    verificarSessaoInicial();
    ajustarMenuPorPerfil();
    carregarCardapioNasTabelas();
});

   function ajustarMenuPorPerfil() {
    const perfil = localStorage.getItem('perfilUsuario');
    const itensAdmin = document.querySelectorAll('.admin-only');
    const itensCliente = document.querySelectorAll('.cliente-only');
    const itensLogado = document.querySelectorAll('.logado-only');
    const btnLogin = document.querySelector('.btn-login-top');
    const formContainer = document.getElementById('form-container'); // O formulário de contato

    // Controle de visibilidade baseado no login
    const estaLogado = perfil !== null && perfil !== '';

    // Mostrar/Esconder link Comprar
    itensLogado.forEach(item => item.style.display = estaLogado ? 'block' : 'none');
    
    // Mostrar/Esconder botão Login
    if (btnLogin) btnLogin.style.display = estaLogado ? 'none' : 'block';

    // Mostrar/Esconder Formulário de Contato (conforme sua nota no rodapé)
    if (formContainer) {
        formContainer.style.display = estaLogado ? 'block' : 'none';
    }

    // Regras de perfis específicos
    if (perfil === 'funcionario') {
        itensAdmin.forEach(item => item.style.display = 'block');
        itensCliente.forEach(item => item.style.display = 'none');
    } else if (perfil === 'cliente') {
        itensAdmin.forEach(item => item.style.display = 'none');
        itensCliente.forEach(item => item.style.display = 'block');
    } else {
        itensAdmin.forEach(item => item.style.display = 'none');
        itensCliente.forEach(item => item.style.display = 'none');
    }
}
    
    function togglePassword(idField) {
    const field = document.getElementById(idField);
    if (field.type === "password") {
        field.type = "text";
    } else {
        field.type = "password";
    }
}
   