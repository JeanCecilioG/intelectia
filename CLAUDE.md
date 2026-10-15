# Intelectia Consultoria — site

Site institucional da **Intelectia Consultoria**, consultoria em inteligência artificial para pequenas e médias empresas de João Monlevade e do Vale do Aço (MG). Fundador: Jean Cecílio.

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
- Tom de voz: direto, mineiro, sem jargão. Frases curtas.
- Não usar emoji no site.

## Estrutura da página (`index.html`)
1. Header — logo + navegação + botão "Diagnóstico grátis"
2. [01] Hero — "IA forjada para a sua empresa." + painel de automações (exemplo ilustrativo)
3. Faixa de setores atendidos
4. [02] O problema — 4 dores numeradas
5. [03] Serviços (seção escura) — S1 a S5
6. [04] Método — 4 etapas
7. [05] Resultados — 3 cards de cases (PLACEHOLDERS)
8. [06] Quem está por trás — fundador
9. [07] Perguntas frequentes
10. [08] CTA final laranja
11. Footer

## Assets
- `assets/logo-horizontal-claro.png` — logo para fundo claro (usado no header)
- `assets/logo-horizontal-escuro.png` — logo para fundo escuro
- `assets/logo-icone.png` — ícone quadrado (favicon / redes)
- Os logos são PNG gerados por IA. Idealmente substituir por SVG vetorizado.

## Placeholders que precisam de dados reais (não inventar)
- `[SEU WHATSAPP]`, `[SEU E-MAIL]`, `[SEU CNPJ]`
- `[SUA FOTO]` na seção do fundador
- Os 3 cases em [05] Resultados (nome do cliente, setor, número, descrição). **Nunca inventar clientes ou números.** Enquanto não houver cases reais, esconder a seção.
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
