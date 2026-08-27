// FOR - Quantidade de vezes da repetição
// WHILE - Apenas se a condição for verdadeira
// DO WHILE -Executa ao menos uma vez antes de checar
// '=' atribuição
// '==' Verificar igualdade de valor
// '===' Verificar igualdade de valor e tipo

const readline = require('readline/promises')  
const {stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({input, output});


async function iniciarjogo() {
    const palavras = ['BACKEND', 'NODEJS', 'JAVASCRIPT', 'EXPRESS','SERVIDOR','TERMINAL'];
    const indiceAleatorio = Math.floor(Math.random() * palavras.length); 
    const palavraSecreta = palavras[indiceAleatorio];

     let letrasDescobertas = (await Array(palavraSecreta.length)).fill("_");
     let jogoRodando = true;

   console.log('=== Bem-Vindo ao Jogo da Forca ===');
    while (jogoRodando) {
   console.log(`\nPalavra atual: ${letrasDescobertas.join("  ")}`);
       const chute = (await rl.question("Digite uma letra:  ")).toUpperCase();
        let acertou = false;

        for (let i = 0 ; i < palavraSecreta.length; i++) {
            if(palavraSecreta[i] === chute){
                letrasDescobertas[i] = chute;
                acertou = true;
             }
        }
        if(!acertou){
            console.log("[X] Letra incorreta!");
        }
        if(!letrasDescobertas.includes('_')){
            console.log(`\n[VITÓRIA] Parabéns! Você descobriu a palavra:  ${palavraSecreta}`);
            jogoRodando = false;
        }

    }
    rl.close();

}
iniciarjogo();