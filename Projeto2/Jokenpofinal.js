console.clear()
var pc = require('prompt-sync')();
//Pedra ganha da tesoura, mas perde para o papel;
//Tesoura ganha do papel, mas perde para a pedra;
//Papel ganha da pedra, mas perde para a tesoura.

var maquina = ['pedra', 'papel', 'tesoura']
do{
var vit = 0
var der = 0
var empate = 0
var resp = ''
cont = 1
var rodadas = +pc("Quantas rodadas deseja jogar? ");
console.clear()
for (i = 0; i < rodadas; i++){
    cont++
    console.log("O que você escolhe entre: pedra, papel ou tesoura?") 
    var sua_escolha = pc(`Resposta: `)
    console.log()
    var escolha_maquina = maquina[Math.floor(Math.random() * maquina.length)];
    console.log(escolha_maquina);
    if (sua_escolha == 'pedra' && escolha_maquina == 'tesoura' || sua_escolha == 'tesoura' && escolha_maquina == 'papel' || sua_escolha == 'papel' && escolha_maquina == 'pedra')
    {
        vit++
        console.log();
        console.log("=-=-=-=-=-=-=-=-=-")
        console.log("Você ganhou!");
        console.log("=-=-=-=-=-=-=-=-=-")
        console.log()
    } 
    if (escolha_maquina == 'pedra' && sua_escolha == 'tesoura' || escolha_maquina == 'tesoura' && sua_escolha == 'papel' || escolha_maquina == 'papel' && sua_escolha == 'pedra')
    {
        der++
        console.log();
        console.log("=-=-=-=-=-=-=-=-=-")
        console.log("Você perdeu!");
        console.log("=-=-=-=-=-=-=-=-=-")
        console.log()
    }
    if (escolha_maquina == 'pedra' && sua_escolha == 'pedra') 
    {
        empate++
        console.log();
        console.log("=-=-=-=-=-=-=-=-=-")
        console.log("Empate");
        console.log("=-=-=-=-=-=-=-=-=-")
        console.log();
    }
    if (escolha_maquina == 'tesoura' && sua_escolha == 'tesoura')
    {
        empate++
        console.log();
        console.log("=-=-=-=-=-=-=-=-=-")
        console.log("Empate");
        console.log("=-=-=-=-=-=-=-=-=-")
        console.log()
    }
    if (escolha_maquina == 'papel' && sua_escolha ==  'papel')
    {
        empate++
        console.log();
        console.log("=-=-=-=-=-=-=-=-=-")
        console.log("Empate");
        console.log("=-=-=-=-=-=-=-=-=-")
        console.log()
    }
}

r1 = pc("Aperte ENTER para ver os resultados...")
console.clear()
if (vit > der)
{
console.log(`Você ganhou da máquina com incriveis: ${vit} Vitórias em cima dela!`);
console.log(`UMA BESTA ENJAULADA!!`)
console.log(`Curiosamente, nessa partida você teve: ${empate} empates`);
}
if (vit < der)
{
console.log(`Você foi derrotado pela maquina com: ${der} Vitórias para ela!`);
console.log(`Talvez devessemos repensar sobre a evolução da tecnologia...`)
console.log(`Curiosamente, nessa partida você teve: ${empate} empates`);
} else if (vit == der){
console.log(`Empates: ${vit} vitorias e ${der} derrotas`);
}
console.log()
resp = pc("Deseja jogar novamente? ")
console.clear()
}while (resp !== 'nao')




