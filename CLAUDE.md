# Intelectia Consultoria — site

Site institucional da **Intelectia Consultoria**, empresa de engenharia e arquitetura de inteligência artificial para pequenas e médias empresas de João Monlevade e do Vale do Aço (MG). Fundador: Jean Cecílio.

Objetivo do site: gerar pedidos de **diagnóstico gratuito** (conversão principal = contato pelo WhatsApp).

## Stack atual
- HTML + CSS estáticos, sem build. Abrir `index.html` no navegador já funciona.
- Fontes: Google Fonts — Archivo (títulos, `font-stretch: 112–125%`, peso 800–900, caixa alta), IBM Plex Sans (texto), IBM Plex Mono (rótulos e números).
- Estilos em `styles.css` (tokens de cor e fonte em `:root`, classes por seção). Não usar `style=""` inline no HTML.
- `main.js`: só o necessário (hoje, o menu do celular). Sem JS, a navegação aparece aberta.
- Responsivo: celular até 767px (menu recolhido), tablet 600–1023px (Método 2×2, foto ao lado do texto), desktop a partir de 1024px. Conferir em 360, 768 e 1440px.

## Identidade visual
| Token | Cor | Uso |
|---|---|---|
| `--cream` | `#F1EDE5` | fundo principal |
| `--ink` | `#111214` | texto e seções escuras (Serviços) |
| `--accent` | `#FF6A1A` | laranja do logo: botões, pontos, palavras de destaque em títulos grandes |
| `--accent-text` | `#B5420A` | laranja escuro para texto pequeno sobre creme (contraste) |
| texto secundário | `#3D4142` / `#55595A` | sobre creme |

Regras:
- Texto sobre laranja é sempre `--ink` (nunca branco/creme — contraste insuficiente).
- Laranja `#FF6A1A` só em texto grande (≥ 24px); texto pequeno usa `--accent-text`.
- Seções numeradas com rótulo mono: `[01] Título`. Divisórias com linhas finas, sem sombras, sem gradientes, cantos retos.
- Tom de voz: direto, mineiro, frases curtas. Termos técnicos (agentes, LLM, RAG) podem aparecer, mas sempre explicados em português simples na mesma frase.
- Não usar emoji no site.

## Estrutura da página (`index.html`)
1. Header — logo + navegação + botão "Diagnóstico grátis"
2. [01] Hero — "IA forjada para a sua empresa.", texto, botões (WhatsApp e "Como funciona o diagnóstico") e linhas de fundo
3. Faixa de setores atendidos
4. [02] IA de verdade — 5 pontos técnicos do que dá para construir (abaixo de "Ter o ChatGPT aberto…")
5. [03] Serviços (seção escura) — S1 a S6
6. [04] Método — 4 etapas
7. Diagnóstico gratuito — o que o cliente recebe (D1–D4), com botão de WhatsApp
8. [05] Resultados — 3 cards de cases (PLACEHOLDERS)
9. [06] Quem está por trás — fundador
10. [07] Perguntas frequentes
11. [08] CTA final laranja
12. Footer

## Assets
- `assets/logo-horizontal-claro.png` — logo para fundo claro (usado no header)
- `assets/logo-horizontal-escuro.png` — logo para fundo escuro
- `assets/logo-icone.png` — ícone quadrado (favicon / redes)
- Os logos são PNG gerados por IA. Idealmente substituir por SVG vetorizado.

## Placeholders que precisam de dados reais (não inventar)
- CNPJ: ainda não existe e foi **tirado** do site. Quando houver, voltar com `· CNPJ 00.000.000/0000-00` no rodapé e `"taxID"` no JSON-LD.
- E-mail definido: jeancecilio@icloud.com (CTA final e JSON-LD).
- WhatsApp definido: (31) 97311-1135. Se mudar, trocar em 3 lugares: `WHATSAPP_NUMERO` no `main.js`, `telephone` no JSON-LD e o texto do `[data-whatsapp-number]` no CTA final (usado só sem JS).
- `[SEU-DOMINIO]`: canonical, Open Graph, JSON-LD, `sitemap.xml` e `robots.txt`. Trocar tudo de uma vez quando o domínio estiver definido.
- Foto do fundador: `assets/jean-cecilio.jpg` (recorte 4:5, 720×900, sem EXIF, da foto do portfólio).
- Os 3 cases em [05] Resultados (nome do cliente, setor, número, descrição). **Nunca inventar clientes ou números.** A seção está **escondida** pela classe `sem-resultados` no `<body>` (some a seção e o link do menu). Para reativar, apague essa classe.
- A numeração `[01]`…`[08]` é gerada pelo CSS (`.secao-num`), então não pula número quando uma seção está escondida. Seção nova numerada = `<span class="secao-num"></span>` no rótulo.
- WhatsApp: o número fica **só** em `WHATSAPP_NUMERO`, no topo do `main.js` (formato `5531912345678`). Os botões marcados com `data-whatsapp` viram `https://wa.me/<número>?text=Olá! Quero meu diagnóstico gratuito`; enquanto a constante estiver vazia, eles levam para `#contato`.

## Backlog
1. Refatorar estilos inline para classes em `styles.css` sem mudar o visual.
2. Trocar CTAs pelo link do WhatsApp (com mensagem pré-preenchida).
3. Botão flutuante de WhatsApp no mobile.
4. Revisar responsividade em 360px, 768px e 1440px.
5. SEO: `sitemap.xml`, `robots.txt`, dados estruturados `LocalBusiness` (João Monlevade, MG), imagem Open Graph 1200×630.
6. Página de Política de Privacidade (LGPD).
7. Favicon em múltiplos tamanhos.
8. Analytics leve (ex.: Plausible ou Google Analytics) para medir cliques no WhatsApp.
9. Deploy (Vercel, Netlify ou GitHub Pages) + domínio `.com.br` no registro.br.

## Convenções
- Textos em português do Brasil.
- Acessibilidade: manter `alt` nas imagens, foco visível, contraste AA.
- Não copiar textos ou design de outras empresas; referências servem só de inspiração de estratégia.
