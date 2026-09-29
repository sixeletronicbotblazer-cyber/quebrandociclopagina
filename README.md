# Quebrando o Ciclo — Landing Page

Landing page de vendas do **Método Quebrando o Ciclo**, da nutricionista Natália Cavalcante. Página única, mobile-first, otimizada para tráfego frio pago (Instagram/Meta Ads) com público feminino.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- CSS puro (`src/app/globals.css`) — sem framework de estilos
- Fontes: DM Sans + Manrope (`next/font`)
- Ícones: Phosphor (SVG inline em `src/components/icons.tsx`)

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
npm start
```

## Estrutura

```
src/
  app/
    page.tsx            # Página completa (todas as seções)
    layout.tsx          # Metadata, Open Graph e fontes
    globals.css         # Design system + estilos de todas as seções
    landing-effects.tsx # Interações: reveals, FAQ, sticky bar, UTM
    icon.svg            # Favicon
  components/
    icons.tsx           # Ícones Phosphor em SVG React
  content.js            # TODA a copy da página (textos editáveis)
  comercial.js          # Dados comerciais: checkout, flags e pendências
public/
  assets/               # Fotos, mockups do app e imagens do hero
```

## Como editar

### Textos da página

Todo o conteúdo textual está em **`src/content.js`**, organizado por seção (`HERO`, `PAIN`, `APP`, `METHOD`, `SHIFT`, `NATALIA`, `AUDIENCE`, `RECEIVE`, `OFFER`, `GUARANTEE`, `ACCESS`, `FAQ`, `CLOSING`, `FOOTER`, `STICKY`). Não é necessário tocar no JSX para alterar palavras, títulos ou descrições.

### Link de checkout e dados comerciais

O link de pagamento, preços e flags de conteúdo ficam em **`src/comercial.js`** — arquivo único e centralizado:

- `CHECKOUT_URL`: URL de pagamento (Cakto). É a **única** origem do link de compra da página.
- `SHOW_*`: flags que exibem/ocultam blocos cuja informação ainda não foi confirmada (prova social, CRN, lista de aulas etc.). Ative apenas quando os dados reais forem fornecidos.
- `RAZAO_SOCIAL`, `CNPJ`, `SUPORTE_EMAIL`: dados do rodapé, atualmente vazios.

### Imagens

Substitua os arquivos em `public/assets/` mantendo os mesmos nomes e formatos (WebP para fotos grandes, JPEG/PNG para mockups).

## Deploy

1. Faça push para este repositório.
2. Importe o projeto na [Vercel](https://vercel.com) (framework detectado automaticamente: Next.js).
3. Nenhuma variável de ambiente é necessária — a página é estática.

## Seções da página (ordem)

Hero → Dor → O App (`#previas`) → Método → Antes × Depois → Natália → Para quem → O que você recebe → Oferta (`#oferta`) → Garantia → Depois da compra → FAQ → Fecho → Rodapé
