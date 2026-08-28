// FOR - Quantidade de vezes da repetição
// WHILE - Apenas se a condição for verdadeira
// DO WHILE -Executa ao menos uma vez antes de checar
// '=' atribuição
// '==' Verificar igualdade de valor
// '===' Verificar igualdade de valor e tipo

const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

async function iniciarJogo() {
    const palavras = [
        { palavra: "BACKEND", dica: "A lógica que roda nos bastidores do servidor" },
          { palavra: "NODEJS", dica: "Ambiente de excução do javaScript" },
            { palavra: "JAVASCRIPT", dica: "Limguagem de programação da WEB" },
              { palavra: "EXPRESS", dica: "Framework minimalista para criar APIs" },
                { palavra: "SERVIDOR", dica: "Computador que fornece serviços para outros computadores" },
                  { palavra: "TERMINAL", dica: "Interface de linha de comando" }
    ];

    const indiceAleatorio = Math.floor(Math.random() * palavras.length);
    const palavraSecreta = palavras[indiceAleatorio].palavra;
    const dica = palavras[indiceAleatorio].dica;

    let letrasDescobertas = Array(palavraSecreta.length).fill("_");
    let jogoRodando = true;

    let vidas = 6;

    console.log("=== Bem-vindo ao Jogo da Forca ===");

     let vidas = 6;
     const arteForca = [
        " + --- +\n | /\n 0 |\n //\\ /\n / \\ /\n ", //0 vidas

        " + --- +\n | /\n o |\n //\\ /\n / |\n", //1 vida

        " + --- +\n | |\n o |\n //\| /\n |\n ", //2 vidas

        " + --- +\n | |\n o |\n /| |\n |\n ", //3 vidas

        " + --- +\n | |\n o |\n | |\n |\n ", //4 vidas

        " + --- +\n | |\n o |\n |\n |\n ", //5 vidas

      " + --- +\n | |\n |\n |\n |\n " //6 vidas

     ]

   console.log('=== Bem-Vindo ao Jogo da Forca ===');
   
    while (jogoRodando) {
        console.log(`\nVidas restantes: ${vidas}`);
        console.log(arteForca[vidas]);
        console.log(`\nPalavra atual: ${letrasDescobertas.join("  ")}`);
        const chute = (await rl.question("Digite uma letra:  ")).toUpperCase();
        let acertou = false;

        for (let i = 0; i < palavraSecreta.length; i++) {
            if (palavraSecreta[i] === chute) {
                letrasDescobertas[i] = chute;
                acertou = true;
            }
        }

        if (!acertou){
            console.log("[X] Letra incorreta!");
            vidas--;
        }
        if(!letrasDescobertas.includes('_')){
            let pontuacaoFinal = (vidas * 10) + 50;
            console.log(`\n[VITÓRIA] Parabéns! Você descobriu a palavra:  ${palavraSecreta}`);
            console.log(`\n[PONTUAÇÃO] Sua pontuação final foi: ${pontuacaoFinal} pontos`);
            jogoRodando = false;
        }

        if (vidas === 0) {
            console.log(`\n[FIM DE JOGO] A palavra correta era: ${palavraSecreta}`);
            jogoRodando = false;
        }
    }

    rl.close();
}

iniciarJogo();




