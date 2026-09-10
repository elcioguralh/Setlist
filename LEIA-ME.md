# Setlist Palco

App web (PWA) para gerenciar setlists de show, com letras, controle por pedal Bluetooth e temas para palco. Depois de instalado, funciona **100% sem internet**.

## Arquivos
- `index.html` — o app (tudo em um arquivo só, sem dependências externas)
- `manifest.json`, `sw.js`, `icon.svg` — permitem instalar como app de verdade (ícone na tela, tela cheia, offline)

## Como instalar no celular/tablet Android

Para o Android oferecer "Instalar app" (e não só um atalho), os arquivos precisam estar num endereço `http://` ou `https://` — não funciona 100% clicando direto no arquivo (`file://`). Isso é uma exigência do próprio Android/Chrome, não do app. Depois de instalado, ele roda **sem internet**, sempre. Três formas simples, escolha uma:

### Opção A — GitHub Pages (grátis, mais prático)
1. Crie uma conta no GitHub (github.com) e um repositório novo.
2. Suba os 4 arquivos (`index.html`, `manifest.json`, `sw.js`, `icon.svg`) para o repositório.
3. Em **Settings → Pages**, ative o GitHub Pages para a branch principal.
4. Acesse a URL gerada (algo como `https://seuusuario.github.io/seurepo/`) pelo Chrome do celular.
5. Toque no menu (⋮) → **"Instalar app"** ou **"Adicionar à tela inicial"**.
6. Pronto — ícone na tela, abre em tela cheia, e a partir daí funciona sem internet (inclusive em modo avião).

### Opção B — Servidor local no próprio celular (sem precisar de conta em nada)
1. Instale o app **Termux** (Android) pela F-Droid.
2. Copie a pasta do app para o celular (ex: via cabo USB ou Google Drive).
3. No Termux: `pkg install python` e depois, dentro da pasta do app, `python -m http.server 8080`.
4. Abra `http://localhost:8080` no Chrome do celular e instale como nas etapas acima.
5. Depois de instalado, pode até desligar o Termux — o app já ficou salvo offline pelo navegador.

### Opção C — Uso rápido sem instalar "de verdade"
Abra o `index.html` direto no navegador do celular (mandando o arquivo por WhatsApp/e-mail para si mesmo e abrindo). Funciona perfeitamente para tocar, mas o atalho criado será só uma aba do navegador, sem tela cheia total. Os dados (setlists, letras) ficam salvos no aparelho normalmente.

### Tablets e outros navegadores
O processo é o mesmo (Chrome/Edge no Android; no iPad, usar o Safari e "Adicionar à Tela de Início" — funciona de forma parecida).

## Como usar

**Criar um setlist:** tela inicial → "Novo setlist" → dê um nome (ex: nome do show/data).

**Adicionar músicas:**
- Manual: dentro do setlist, "Adicionar música" → preencha título, artista, tom, BPM, notas e a letra.
- Colando do Spotify: dentro do setlist, "Colar do Spotify" → no Spotify, selecione as músicas da playlist, clique com o botão direito → Copiar → cole no app → "Adicionar". O app tenta separar título/artista automaticamente; depois é só abrir cada música para colar a letra, se quiser.

**Reordenar:** use as setas ↑ ↓ ao lado de cada música na lista do setlist.

**Modo Palco:** dentro do setlist, toque em "▶ Palco". Mostra a lista de músicas em destaque, para navegar e tocar em qual vai entocar. Toque na música destacada (ou aperte Enter) para abrir a letra.

**Visualização da letra:** mostra 3 linhas por vez (ajustável em Ajustes ⚙, de 1 a 8 linhas). Avance/retroceda entre trechos; ao chegar no fim da letra, avança automaticamente para a próxima música do setlist.

**Temas para palco (⚙ Ajustes):**
- Escuro — fundo preto, detalhe em âmbar.
- Monocromático (preto/branco) — sem nenhuma cor, contraste máximo, ideal sob luz colorida de palco.
- Monocromático claro — fundo branco, para ambientes muito escuros ou telas que refletem luz.

**Tamanho da letra:** também em Ajustes, de Pequena a Extra grande.

## Controles por pedal Bluetooth

Pedais Bluetooth de página (para partitura) normalmente emulam teclas de teclado — geralmente setas, Page Up/Down, Enter ou Espaço. O app já responde a todas essas teclas, então basta parear o pedal ao celular/tablet como um teclado Bluetooth comum; nenhuma configuração adicional é necessária.

| Tecla | Ação |
|---|---|
| ↓ / → / Page Down | Próxima música (no palco) / próximo trecho da letra |
| ↑ / ← / Page Up | Música anterior (no palco) / trecho anterior da letra |
| Enter / Espaço | Abrir a letra da música selecionada / avançar trecho |
| Esc / Backspace | Voltar |
| Toque na tela | Metade direita = avança, metade esquerda = volta (na letra) |

Se o seu pedal usa outras teclas específicas (alguns modelos permitem configurar quais teclas ele envia), configure-o para emular Seta ou Page Up/Down — isso garante compatibilidade total.

## Como atualizar o app já publicado (sem perder os setlists)

Quando eu te mandar uma nova versão dos arquivos:
1. No GitHub, vá até o repositório → **Add file → Upload files**
2. Suba os arquivos novos com os **mesmos nomes** (`index.html`, `manifest.json`, `sw.js`, `icon.svg`) — o GitHub substitui os antigos automaticamente
3. Espere 1–2 minutos pro GitHub Pages atualizar
4. No celular, **feche o app por completo** (deslize para fechar, não só minimize) e abra de novo. Se ainda aparecer a versão antiga, feche e abra mais uma vez — o app verifica por atualização assim que abre.

Os seus setlists e músicas **não são apagados** nesse processo — eles ficam guardados separadamente dos arquivos do app. Ainda assim, antes de qualquer atualização grande, é uma boa prática ir em **Ajustes ⚙ → Exportar** e guardar esse arquivo de backup, só por segurança.

## Sincronizar entre celular e computador (PC)

Não existe uma nuvem automática — a sincronização é manual, mas simples:
1. No PC, abra a mesma URL do app (a do GitHub Pages) num navegador normal
2. Monte ou edite o setlist com calma, usando teclado e tela grande
3. Vá em **Ajustes ⚙ → Exportar** — isso baixa um arquivo `setlist-backup.json`
4. Leve esse arquivo pro celular (AirDrop, e-mail, iCloud Drive, WhatsApp — qualquer meio)
5. No celular, abra o app → **Ajustes ⚙ → Importar** → selecione o arquivo

Isso substitui os dados do celular pelos do arquivo importado — é uma via de mão única por vez (não mescla os dois), então sempre importe a versão mais atualizada.

## Letra x Cifra, destaque e alinhamento

- Cada música agora tem dois campos de texto separados: **Letra** e **Cifra**. No modo Palco, ao abrir a música aparecem dois botões no topo, **Letra** e **Cifra**, para alternar entre as duas telas. Os mesmos controles (setas, Page Up/Down, Enter, Espaço, pedal Bluetooth) navegam a que estiver ativa no momento.
- **Cifra**: o espaçamento colado é sempre preservado exatamente como veio (fonte de largura fixa), pra não desalinhar os acordes. Não tem opção de alinhamento — é sempre a esquerda, do jeito que foi colada.
- **Letra**: o alinhamento padrão continua centralizado, mas dá pra mudar por música (Esquerda/Centro/Direita) no campo "Alinhamento da letra", na tela de edição da música.
- **Destaque (negrito)**: para destacar um trecho (ex: o refrão), envolva o texto com `**` na hora de editar a letra ou a cifra. Exemplo: digitar `**Refrão**` numa linha faz ela aparecer em negrito e na cor de destaque no modo Palco.
- No rodapé da tela de Letra/Cifra agora aparece **">> Nome da próxima música"**, pra você já saber o que vem a seguir sem precisar sair da tela.

## Tamanhos de fonte individuais (modo Palco)

Em **Ajustes ⚙** dá pra ajustar separadamente: tamanho da Letra, tamanho da Cifra, e no modo Palco (a lista de músicas do show) o tamanho do nome da música, do artista/lista, da tonalidade e das notas do show — cada um com seu próprio controle A− / A+.

## Sincronizar automaticamente entre dispositivos (PC ↔ celular)

Isso é opcional — sem configurar nada aqui, o app continua funcionando exatamente como sempre (local, offline, exportar/importar manual). Mas se você quiser que o setlist se mantenha sincronizado sozinho entre o PC e o celular, sem precisar exportar/importar toda vez, siga este passo a passo. Leva uns 10 minutos, uma vez só.

**Importante sobre privacidade:** os dados ficam guardados num repositório **separado e privado** do GitHub — não no mesmo repositório público onde está o app. Assim, ninguém além de quem tiver o token consegue ver ou editar seu setlist, mesmo que descubram o link do app.

### 1. Criar o repositório privado (só uma vez)
1. No GitHub, toque no **+** → **New repository**
2. Nome sugerido: `setlist-dados`
3. Marque como **Private** (importante — diferente do repositório do app, que é público)
4. Não marque nenhuma outra opção
5. Toque em **Create repository**

### 2. Gerar o token de acesso (só uma vez)
1. No GitHub: toque no seu ícone de perfil → **Settings**
2. Role até **Developer settings** (geralmente no fim do menu)
3. **Personal access tokens → Fine-grained tokens → Generate new token**
4. Dê um nome (ex: "Setlist Palco - sync")
5. Em **Repository access**, escolha **Only select repositories** e selecione o `setlist-dados` que você criou
6. Em **Permissions → Repository permissions**, encontre **Contents** e mude de "No access" para **Read and write**
7. Toque em **Generate token**
8. **Copie o token na hora** — o GitHub só mostra ele uma vez. Cole num app de notas temporariamente se precisar, até configurar no app.

### 3. Configurar no app (fazer em CADA aparelho que você quer sincronizado)
1. Abra o app → Ajustes ⚙ → seção "Sincronização entre dispositivos (GitHub)"
2. **Token de acesso:** cole o token gerado no passo 2
3. **Repositório:** digite `seu-usuario/setlist-dados` (troque pelo seu usuário do GitHub)
4. Toque em **Salvar**

Repita esses 4 passos no PC e no celular, usando o **mesmo token e mesmo repositório** nos dois. A partir daí, o app sincroniza sozinho toda vez que abrir com internet.

### Como funciona no dia a dia
- **Abriu o app com internet, sem ter mexido em nada desde a última sincronização:** puxa a versão mais nova sozinho, sem perguntar nada.
- **Você editou algo neste aparelho e o outro lado não mudou:** envia sua edição sozinho, sem perguntar nada.
- **Os dois lados mudaram desde a última sincronização (situação rara):** o app NÃO decide sozinho — aparece uma faixa no topo da tela perguntando se você quer manter a versão daqui ou usar a do GitHub. Nada é sobrescrito sem sua confirmação.
- **Sem internet, ou GitHub fora do ar:** o app simplesmente não tenta, e segue funcionando 100% offline com os dados que já tem salvos — nenhum risco pro uso no palco.
- **Durante uma apresentação (modo Palco ou Letra/Cifra aberto):** o app nunca troca o setlist debaixo do seu dedo. Se uma sincronização automática encontrar uma versão nova nesse momento, ela fica "guardada" e só é aplicada quando você sair de volta pra tela de setlist.
- Também existe um botão **"🔄 Sincronizar agora"** em Ajustes, pra forçar quando quiser.

### Segurança do token
- O **token** dá acesso de escrita ao repositório `setlist-dados` — trate como uma senha, nunca compartilhe com a banda.
- O arquivo de **backup `.json`** (Exportar/Importar) continua sendo o jeito certo de compartilhar o setlist com os colegas — esse nunca contém o token, é seguro de enviar por WhatsApp/e-mail.
- Se quiser desativar a sincronização num aparelho, use o botão **Desativar** em Ajustes — isso apaga o token salvo ali (não afeta o que já está no GitHub nem os outros aparelhos).

## Outros ajustes desta versão

- **Tamanho da letra/cifra por música:** na tela de Letra/Cifra, entre o botão "← Palco" e o ícone de Ajustes, agora tem um botão **"A"**. Toque nele para alternar o tamanho só daquela música entre Padrão, Pequena, Grande e Extra Grande — útil quando uma letra específica está maior ou menor do que você gostaria, sem precisar mudar o tamanho padrão de todas as outras.
- **Nome da próxima música maior:** o texto ">> Nome da música" no rodapé da Letra/Cifra está 50% maior, mais fácil de ler de relance durante o show.

## Backup e transferência entre aparelhos

Em Ajustes ⚙ → Backup → **Exportar**, gera um arquivo `.json` com todos os seus setlists e letras. Para levar para outro celular/tablet, use **Importar** com esse mesmo arquivo. Os dados ficam salvos localmente no navegador (não são enviados para nenhum servidor) — por isso o backup manual é recomendado antes de trocar de aparelho, limpar o navegador, ou reinstalar.
