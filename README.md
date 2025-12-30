🚀 Extensão de Atalhos para Whatsapp - Atendimento ICD
Esta extensão foi desenvolvida para otimizar o atendimento ao cliente via WhatsApp Web, permitindo a inserção rápida de textos pré-definidos e personalizados, garantindo agilidade e padronização.

Desenvolvido por: Bruno Ferreira 
Navegadores suportados: Google Chrome, Microsoft Edge, Opera GX, Brave e Mozilla Firefox.

![Preview](/exe.gif)


✨ Funcionalidades Atualizadas
- Menu Inteligente e Arrastável: Clique e arraste o menu para qualquer lugar da tela para não atrapalhar a sua visão das conversas.

- Memória de Posição: A extensão salva automaticamente onde você deixou o menu e como ele estava configurado, mesmo após atualizar a página (F5).

- Alternância de Layout (🔄): Botão dedicado para alternar o menu entre o modo Vertical (coluna) e Horizontal (linha).

- Textos Oficiais: 10 botões padronizados com as informações cruciais da empresa (Valores, Documentos, Estorno, etc.).

- Personalização e Botões Extras: Cada colaborador pode editar os textos padrão ou criar novos botões totalmente do zero através do painel de configuração.

- Formatação Inteligente: Sistema que preserva quebras de linha, espaçamentos e emojis.

🔒 Segurança e LGPD (Lei Geral de Proteção de Dados)
- Esta extensão foi concebida respeitando rigorosamente os princípios de privacidade:

- Armazenamento 100% Local: Todos os textos e preferências são guardados apenas no navegador do utilizador (chrome.storage.local). Nenhum dado é enviado para servidores externos ou nuvem.

- Privacidade do Cliente: O atalho de "Documentos" inclui o link direto para a Política de Privacidade oficial da empresa.

- Responsabilidade: Lembre-se que dados sensíveis recebidos de clientes devem ser tratados conforme as diretrizes de segurança da ICD.

💡 Boas Práticas de Atendimento
- Conferência Final: Sempre revise o texto injetado antes de enviar. Campos com "----" ou espaços em branco precisam de preenchimento manual de acordo com o caso do cliente.

- Segurança Bancária: Ao solicitar fotos de cartão, oriente o cliente a cobrir os números centrais e o código CVV. Solicite apenas os 6 primeiros dígitos e o nome do titular para validação.

- Manutenção: Caso os valores das atrações mudem, substitua o arquivo content.js pela versão atualizada fornecida pelo administrador.

🛠️ Como Instalar
Navegadores Base Chromium (Chrome, Edge, Opera, Brave)
- Acesse a página de extensões do seu navegador (ex: chrome://extensions/).

- Ative o Modo do Programador (Developer Mode).

- Clique em Carregar sem compactação (Load unpacked).

- Selecione a pasta raiz do projeto.

Mozilla Firefox
- Acesse about:debugging e clique em Este Firefox.

- Clique em Carregar extensão temporária....

- Selecione o arquivo manifest.json.

📂 Estrutura de Arquivos
Plaintext

- ├── manifest.json   # Configurações de permissões e ícones
- ├── content.js      # Lógica do menu, arrastar, salvar posição e injeção de texto
- ├── popup.html      # Interface do painel de personalização
- ├── popup.js        # Lógica para salvar textos e botões extras
- ├── styles.css      # Design do menu, animações e layouts
- ├── icon.png        # Identidade visual da extensão
- └── README.md       # Documentação do projeto

📖 Como Personalizar
- Clique no ícone da peça de puzzle (Extensões) no topo do navegador e fixe a extensão ICD.

- Abra o painel da extensão para editar os textos padrão.

- Para novos atalhos, clique em "+ Adicionar Novo Botão", dê um nome e escreva o texto.

- Clique em SALVAR E ATUALIZAR e reinicie o WhatsApp Web.

📝 Notas de Versão
- v1.3: Implementação de menu arrastável, alternância de orientação (horizontal/vertical) e salvamento automático de coordenadas de tela.

- v1.2: Adicionada função de botões extras dinâmicos e compatibilidade com Firefox.

- v1.1: Implementação do sistema de armazenamento local (storage.local).


