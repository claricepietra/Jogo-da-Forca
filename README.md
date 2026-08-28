# Jogo da Forca (Node.js)

## Descrição

Implementação do clássico jogo da forca para execução em ambiente de terminal, desenvolvida em JavaScript sobre a plataforma Node.js. A aplicação não possui dependências externas, utilizando exclusivamente o módulo nativo `readline/promises` para tratamento de entrada e saída de dados.

## Objetivo do Jogo

O sistema seleciona aleatoriamente uma palavra a partir de uma lista pré-definida. O usuário deve identificá-la informando letras individualmente, dispondo de um número limitado de tentativas incorretas antes do encerramento da partida.

## Requisitos

| Requisito | Versão mínima |
|---|---|
| Node.js | 12.x |

## Instalação e Execução

```bash
git clone https://github.com/claricepietra/Jogo-da-Forca
cd jogo-da-forca
node index.js
```

## Regras do Jogo

1. Uma palavra secreta é sorteada aleatoriamente no início da execução.
2. O progresso é exibido em tela por meio de underlines (`_`), representando as letras ainda não descobertas.
3. A cada rodada, o jogador informa uma letra.
4. Letras corretas são reveladas em suas respectivas posições na palavra.
5. Letras incorretas resultam no decremento de uma vida.
6. A partida é encerrada em duas condições:
   - **Vitória**: todas as letras da palavra são descobertas.
   - **Derrota**: o contador de vidas chega a zero.

## Arquitetura do Código

| Elemento | Descrição |
|---|---|
| `iniciarJogo()` | Função assíncrona responsável pelo ciclo completo da partida |
| `palavras` | Array contendo o conjunto de palavras candidatas ao sorteio |
| `palavraSecreta` | Palavra selecionada aleatoriamente para a rodada atual |
| `letrasDescobertas` | Array de controle que representa o estado atual da palavra |
| `vidas` | Contador de tentativas restantes |
| `rl` (readline) | Interface de entrada/saída utilizada para capturar os chutes do jogador |

## Roadmap

Melhorias identificadas para versões futuras do projeto:

- Implementação de níveis de dificuldade
- Representação visual (ASCII) da forca conforme os erros
- Categorização temática das palavras
- Tratamento de entradas inválidas
- Registro de pontuação e histórico de partidas
- Migração para interface web

## Licença

Distribuído sob os termos da licença MIT.