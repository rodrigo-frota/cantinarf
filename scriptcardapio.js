        function salvarCardapio() {
            const dados = [];
            const linhas = document.querySelectorAll("#tabela-cadastro tbody tr");
            
            linhas.forEach((linha, i) => {
                const celulas = linha.querySelectorAll("td");
                const linhaDados = [];
                celulas.forEach(celula => {
                    linhaDados.push(celula.innerText);
                });
                dados.push(linhaDados);
            });

            localStorage.setItem('cardapioGlobal', JSON.stringify(dados));
            alert("Cardápio atualizado com sucesso!");
        }

        // Carregar dados existentes ao abrir
        window.addEventListener('DOMContentLoaded', () => {
            const salvo = localStorage.getItem('cardapioGlobal');
            if (salvo) {
                const dados = JSON.parse(salvo);
                const linhas = document.querySelectorAll("#tabela-cadastro tbody tr");
                linhas.forEach((linha, i) => {
                    const celulas = linha.querySelectorAll("td");
                    celulas.forEach((celula, j) => {
                        celula.innerText = dados[i][j] || "";
                    });
                });
            }
        });

        function carregarCardapioNasTabelas() {
    const salvo = localStorage.getItem('cardapioGlobal');
    if (salvo) {
        const dados = JSON.parse(salvo);
        // Seleciona a primeira tabela encontrada na página
        const tabela = document.querySelector("table");
        if (tabela) {
            const linhasCorpo = tabela.querySelectorAll("tr:not(:first-child)");
            linhasCorpo.forEach((linha, i) => {
                const celulas = linha.querySelectorAll("td:not(:first-child)");
                celulas.forEach((celula, j) => {
                    if (dados[i] && dados[i][j]) {
                        celula.innerText = dados[i][j];
                    }
                });
            });
        }
    }
}
window.addEventListener('DOMContentLoaded', carregarCardapioNasTabelas);

function carregarCardapioNasTabelas() {
    const salvo = localStorage.getItem('cardapioGlobal');
    if (salvo) {
        const dados = JSON.parse(salvo);
        // Seleciona a primeira tabela encontrada na página
        const tabela = document.querySelector("table");
        if (tabela) {
            const linhasCorpo = tabela.querySelectorAll("tr:not(:first-child)");
            linhasCorpo.forEach((linha, i) => {
                const celulas = linha.querySelectorAll("td:not(:first-child)");
                celulas.forEach((celula, j) => {
                    if (dados[i] && dados[i][j]) {
                        celula.innerText = dados[i][j];
                    }
                });
            });
        }
    }
}
window.addEventListener('DOMContentLoaded', carregarCardapioNasTabelas);