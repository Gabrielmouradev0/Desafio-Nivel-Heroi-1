let heroi = "Goku";
let xp = 10000;
let nivelHeroi;
//As 3 Variaveis Foram Criadas Agora devo usar Switch para validar as variaveis e tambem usar o brake para limitar
// a variavel niver heroi ficou sem atribuir valor pois sera atribuido dentro do scopo do case 

switch (true) {
    case xp <= 1000 : nivelHeroi = "Ferro"; 
    break;

     case xp <= 2000 : nivelHeroi = "Bronze";
    break;
   
    case xp <= 5000 : nivelHeroi = "Prata";
    break;
    
    case xp <= 7000 : nivelHeroi = "Ouro";
    break; 

    case xp <= 8000 : nivelHeroi = "Platina";
    break; 

    case xp <= 9000 : nivelHeroi = "Ascendente";
    break; 
 
    case xp <= 10000 : nivelHeroi = "Imortal";
    break; 

    case xp > 10001 : nivelHeroi = "Radiante";
    break; 

default : "Heroi nao Classificado Dentro Dos Padrões"

}

console.log ("O Herói de nome " + heroi + " está no nível de " + nivelHeroi) 
