const camposFixos = ['apresentacao', 'valor', 'documentos', 'remarcacao', 'estorno', 'pix', 'cartao', 'autorizacao', 'anexo', 'app'];
const containerExtras = document.getElementById('container-extras');

// Função para criar a interface de um botão novo
function adicionarInterfaceExtra(nome = '', texto = '') {
    const div = document.createElement('div');
    div.className = 'item-extra';
    div.innerHTML = `
        <button class="btn-remover">X</button>
        <input type="text" class="extra-nome" placeholder="Nome do Botão" value="${nome}">
        <textarea class="extra-texto" placeholder="Texto da mensagem...">${texto}</textarea>
    `;
    div.querySelector('.btn-remover').onclick = () => div.remove();
    containerExtras.appendChild(div);
}

// Ao abrir: Carrega tudo
document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get([...camposFixos, 'meusAtalhosExtras'], (res) => {
        // Preenche fixos
        camposFixos.forEach(id => {
            if (res[id]) document.getElementById(id).value = res[id];
        });
        // Preenche extras
        if (res.meusAtalhosExtras) {
            res.meusAtalhosExtras.forEach(at => adicionarInterfaceExtra(at.nome, at.texto));
        }
    });
});

// Botão Adicionar
document.getElementById('btn-adicionar').onclick = () => adicionarInterfaceExtra();

// Botão Salvar (VERDE)
document.getElementById('btn-salvar').onclick = () => {
    const dadosParaSalvar = {};

    // 1. Captura Fixos
    camposFixos.forEach(id => {
        dadosParaSalvar[id] = document.getElementById(id).value;
    });

    // 2. Captura Extras
    const extras = [];
    document.querySelectorAll('.item-extra').forEach(item => {
        const n = item.querySelector('.extra-nome').value;
        const t = item.querySelector('.extra-texto').value;
        if (n) extras.push({ nome: n, texto: t });
    });
    dadosParaSalvar['meusAtalhosExtras'] = extras;

    // 3. Salva no Chrome
    chrome.storage.local.set(dadosParaSalvar, () => {
        const btn = document.getElementById('btn-salvar');
        btn.innerText = "✅ SALVO COM SUCESSO!";
        btn.style.background = "#34B7F1";
        
        setTimeout(() => {
            btn.innerText = "SALVAR E ATUALIZAR";
            btn.style.background = "#25D366";
        }, 2000);
    });
};