# Especificação visual — reprodução de Lana - Assistente Virtual Farmasi

Este projeto reproduz como especificação de verdade o site fornecido em `https://lana-a6mdbq.manus.space/`. A fidelidade visual e funcional à referência prevalece sobre escolhas estilísticas alternativas.

## Ground truth da referência

A página é uma interface de chat de uma assistente virtual Farmasi chamada Lana. O fundo ocupa toda a tela com um gradiente vibrante entre rosa-magenta no canto superior esquerdo e coral/laranja no canto inferior direito. No topo há um título centralizado com emoji de beijo, subtítulo com brilhos e uma foto circular da Lana com borda branca e indicador de status verde.

O cartão principal do chat é branco, arredondado e com sombra suave, centralizado em uma largura aproximada de 560px. Dentro dele, a primeira mensagem aparece em um balão rosa-magenta com texto branco. Abaixo, doze botões de resposta rápida ficam em fluxo horizontal com quebra de linha, cada botão em rosa vivo, texto branco e pequenos emojis. O campo de pergunta fica na base, com borda pontilhada em coral, botão de microfone estreito e botão Enviar rosa. A página exibe o selo "Made with Manus" no canto inferior direito.

## Conteúdo e comportamento

Os doze atalhos de atendimento devem permanecer visíveis e manter os textos e links identificados no HTML original. Ao selecionar um atalho, a interface deve inserir uma resposta da Lana no histórico e, quando houver link configurado, permitir a abertura do recurso correspondente. O campo de entrada deve aceitar envio por Enter e pelo botão Enviar. O microfone deve manter uma affordance visual consistente, mesmo quando a captura de voz não estiver disponível.

## Diretrizes de implementação

Manter Poppins como tipografia principal, proporções compactas, cantos arredondados, cores saturadas, transições rápidas e responsividade para telas estreitas. Não introduzir navegação ou seções que não existam na referência. Preservar acessibilidade com labels, foco visível e contraste adequado.

## Style Decisions

- A referência é a fonte única de verdade visual; não aplicar uma direção alternativa.
- Usar imagens próprias geradas apenas como suporte técnico/branding quando necessário, sem substituir a foto de avatar da referência.
- Evitar alterar os textos, a ordem dos atalhos ou o posicionamento geral do cartão.
