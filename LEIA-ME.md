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

## Backup e transferência entre aparelhos

Em Ajustes ⚙ → Backup → **Exportar**, gera um arquivo `.json` com todos os seus setlists e letras. Para levar para outro celular/tablet, use **Importar** com esse mesmo arquivo. Os dados ficam salvos localmente no navegador (não são enviados para nenhum servidor) — por isso o backup manual é recomendado antes de trocar de aparelho, limpar o navegador, ou reinstalar.
