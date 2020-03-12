console.log("Hello World");

const NUM_LINHAS = 10;

for(let i = 0; i < NUM_LINHAS; i++){
    let espaços = ' '.repeat(NUM_LINHAS - i);
    let conteudo = 'X'.repeat(i);
    console.log(espaços + conteudo +'X' + '\n');
}
console.log((' '.repeat(NUM_LINHAS)+ 'X' + '\n').repeat(4));