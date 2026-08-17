# Lana — Assistente Virtual Farmasi

Reprodução responsiva do site de referência da assistente virtual Lana para a Farmasi.

## Executar localmente

```bash
pnpm install
pnpm dev
```

## Verificar e gerar build

```bash
pnpm check
pnpm build
```

O workflow em `.github/workflows/pages.yml` publica automaticamente o conteúdo de `dist/public` no GitHub Pages a cada push na branch `main`.

## Observação

Os atalhos preservam os textos e links identificados na referência. O comportamento de conversa é executado no navegador, sem backend próprio.
