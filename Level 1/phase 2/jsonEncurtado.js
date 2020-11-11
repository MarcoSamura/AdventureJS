// Um dos recursosda nova versão do ECMAN
// Foi a introdução do Json json encurtado

// Como funciona ?
// Digamos que você inicializa alguns valores

var nome = "Marcos Samuel"; // primeiro valor
var idade = 20; // segundo valor
var anime = "Naruto Shippuden"; // terceiro valor
/*
var user = { // Antes dessa ideia de json encurtado você desenvolvedor teria de dar um 'apelido', para esses dados

  nome(apelido): nome(valor real), // o que é esse valor real ? no caso, a informação que você quer armazenar
  idade(apelido): idade(valor real),
  anime: anime
};
*/
// Contudo, graças ao avanço do JS esse obrigação de nomear passou a ser opcional
var user = { // criamos o nosso objeto
  nome, // passamos agora seu valor real ou valor que queremos armazenar
  idade,
  anime
};
console.log( user );
