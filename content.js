// Seus textos oficiais (funcionam como padrão caso o funcionário não personalize)
const textosPadrao = {
    apresentacao: "Olá! Bem-vindo ao nosso atendimento. Como posso ajudar?",
    
    valor: `Trem do Corcovado – Informações e Valores

INFORMAÇÃO IMPORTANTE: O horário de check-in é sempre 30 minutos antes do horário reservado.

A compra dos ingressos pode ser realizada pelo site/app oficial, diretamente na bilheteria ou conosco.

Local do Embarque/Bilheteria: Rua Cosme Velho, 513 - Cosme Velho - Rio de Janeiro - RJ

🎟 Valores dos Ingressos:

Adulto: R$ 134,00

Estudante (válido apenas para estudantes de instituições brasileiras) / PCD / ID Jovem: R$ 107,00

Infantil (7 a 11 anos): R$ 107,00

Idoso (a partir de 60 anos – somente brasileiros): R$ 70,00

👶 Crianças de até 6 anos possuem gratuidade, desde que acompanhadas por pelo menos 1 adulto pagante.

📌 Incluso no ingresso:

Subida e descida pelo Trem do Corcovado

Acesso ao Cristo Redentor

⏰ Funcionamento:

Todos os dias, das 7h20 às 18h, com partidas a cada 20 minutos.

O trajeto de subida e descida dura aproximadamente 40 minutos cada.

O visitante pode permanecer no Cristo Redentor pelo tempo desejado, respeitando o horário do último trem de descida, que normalmente ocorre às 19h.`,

    documentos: `Para realizar a sua reserva vamos precisar dos seguintes dados (apenas de uma pessoa):

INFORMAÇÃO IMPORTANTE: O horário de check-in é sempre 30 minutos antes do horário reservado.

PASSEIO/ATRAÇÃO DESEJADA:
NOME COMPLETO:
E-MAIL:
CPF/Passaporte/DNI:
TELEFONE:
QUANTIDADE DE INGRESSOS:
ADULTOS:
CRIANÇAS (7-11anos):
IDOSOS (60+anos - somente brasileiros):
ESTUDANTE:
PCD:
IDJOVEM:
DATA E HORA DO PASSEIO:

OPÇÕES PAGAMENTO: Aceitamos PIX, transferência, link para pagamento com cartão de credito.

Para pagamentos com cartão de crédito, o sistema pede uma verificação de dados, para isso, vamos precisar de uma foto do cartão, apresentando os seis primeiros dígitos, junto ao nome do titular e uma foto do seu documento, podendo ser RG ou CNH.

Somos uma empresa associada a Lei de Proteção de Dados, seus dados estão seguros conosco.
https://www.ingressocomdesconto.com.br/termos-de-uso/13/politica-de-privacidade.html`,

    remarcacao: `Para remarcar seu passeio, solicitamos as seguintes informações:

INFORMAÇÃO IMPORTANTE: O horário de check-in é sempre 30 minutos antes do horário reservado.

Código da compra:
Data e horário que deseja remarcar:
Motivo:

Por outros motivos, que não sejam climáticos, seu embarque pode ser remarcado mediante o pagamento da(s) taxa(s):

A) Com menos de 24 horas do embarque: taxa de 30% referente ao valor total da compra.
B) Com antecedência maior que 24 horas: taxa de 10% referente ao valor total da compra.

Apenas o responsável pela compra, sendo ele o titular do cartão, poderá solicitar a remarcação. Será necessário o envio de documentos comprobatórios.

Será necessário o envio de uma foto de um documento de identidade e uma foto do cartão de crédito utilizado no ato da compra (apenas os 6 primeiros dígitos ou os 4 últimos dígitos e o nome do titular).`,

    estorno: `Para cancelamento e estorno o(a) senhor(a) precisa encaminhar um e-mail para controle@ingressocomdesconto.com.br
Deve informar seu código de compra e o motivo do cancelamento.
O departamento responsável tem até 15 dias úteis para te dar um retorno.`,

    pix: `——— - Trem do Corcovado - PIX

O link de pagamento expira em 30 minutos.`,

    cartao: `——— - Trem do Corcovado - Cartão de Crédito

O link de pagamento expira em 30 minutos.`,

    autorizacao: `Para continuar com a reserva vou precisar que você preencha uma autorização de débito.

O valor total dos ingressos ficou R$ ----. Por favor preencha este valor na autorização e em apenas 1x.

Autorização de Débito: https://na2-app.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=d1d92b70-f5d5-48e0-b1b3-f202ce09579d&env=na2&acct=014c5592-b58a-4638-b610-0bed534d2bbf

Assim que preencher me avise, por gentileza.`,

    anexo: `Anexo seu voucher!
Tenha um ótimo passeio!
Qualquer dúvida estou à disposição!
INFORMAÇÃO IMPORTANTE PARA TREM DO CORCOVADO: Caso algum ingresso não seja utilizado é necessária a devolução do mesmo na bilheteria. NO MESMO DIA do passeio.`,

    app: `Tente pelo nosso app!

ANDROID - https://play.google.com/store/apps/details?id=com.ingressoscomdescontos.TremdoCorcovado

IOS - https://apps.apple.com/br/app/trem-do-corcovado-oficial/id1128340569

Recomendamos a compra pelo app, caso não consiga, pode comprar por aqui, ou direto na bilheteria.`,
};

// Função auxiliar para colar o texto no WhatsApp
function enviarParaCampo(textoFinal) {
    const textarea = document.querySelector('div[contenteditable="true"][data-tab="10"]');
    if (textarea) {
        textarea.focus();
        const dataTransfer = new DataTransfer();
        dataTransfer.setData('text/plain', textoFinal);
        const event = new ClipboardEvent('paste', {
            clipboardData: dataTransfer,
            bubbles: true,
            cancelable: true
        });
        textarea.dispatchEvent(event);
    } else {
        alert("Por favor, clique no campo de mensagem do WhatsApp primeiro.");
    }
}

// Injeta textos oficiais ou personalizados
async function injetarTextoOficial(chave) {
    chrome.storage.local.get([chave], (resultado) => {
        const textoFinal = (resultado[chave] && resultado[chave].trim() !== "") 
                           ? resultado[chave] 
                           : textosPadrao[chave];
        enviarParaCampo(textoFinal);
    });
}

// Criar Menu na Tela
const menu = document.createElement('div');
menu.id = 'menu-automacao';

// 1. Criar Botões Oficiais
const botoesOficiais = [
    { nome: '👋 Início', chave: 'apresentacao' },
    { nome: '🚂 Valores', chave: 'valor' },
    { nome: '📋 Dados', chave: 'documentos' },
    { nome: '📅 Rema', chave: 'remarcacao' },
    { nome: '💸 Estorno', chave: 'estorno' },
    { nome: '💰 Pix', chave: 'pix' },
    { nome: '💳 Cartão', chave: 'cartao' },
    { nome: '📑​​ Autoriz.', chave: 'autorizacao' },
    { nome: '📎 Anexo', chave: 'anexo' },
    { nome: '📲 App', chave: 'app' },
];

botoesOficiais.forEach(item => {
    const btn = document.createElement('button');
    btn.innerText = item.nome;
    btn.className = 'btn-atalho';
    btn.onclick = () => injetarTextoOficial(item.chave);
    menu.appendChild(btn);
});

// 2. Buscar e Criar Botões Extras (Dinâmicos)
chrome.storage.local.get(['meusAtalhosExtras'], (res) => {
    if (res.meusAtalhosExtras) {
        res.meusAtalhosExtras.forEach(atalho => {
            const btnExtra = document.createElement('button');
            btnExtra.innerText = atalho.nome;
            btnExtra.className = 'btn-atalho';
            btnExtra.style.borderLeft = "4px solid #34B7F1"; // Diferencia visualmente os extras
            btnExtra.onclick = () => enviarParaCampo(atalho.texto);
            menu.appendChild(btnExtra);
        });
    }
});

document.body.appendChild(menu);