//A sintaxe de atribuição via desestruturação (destructuring assignment)
// é uma expressão JavaScript que possibilita extrair dados de
// arrays ou objetos em variáveis distintas.
// By MDN

var user = {
  nome:"Marcos Samura",
  github:"marcosamura",
  time:"Palmeiras",
  cidade:'Parnaiba',
  corPreferida:"Verder escuro"
};

// var nome = user.nome;
// var github = user.github;

var { nome, github } = user;

console.log( nome, '\n', github );
