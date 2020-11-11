// Bom, falaremos agora sobre uma funcionalidade chamada de spread operator
// Para facilitar nossa compreensão chamaremos o spread operator de ( spt )

// o spt veio para expandir um array ou objeto iterável em locais onde a zero ou mais argumentos -- by MDN
// Bom o spt vem para o Javascript com a função de reduzirmos repetições no JS
// A informação precisa ser iterável

// nossa informação
var nome = "Marcos Samuel";
var idade = 20;


// objeto no qual queremos EXPANDIR para outro local
var empresa = {
  nome:"Marquinhos Desenvolvimento",
  cidade:"Parnaiba",
  site:'www.naoExiste.br.com'
};

// Objeto no qual traremos o objeto empresa

// para dizer que queremos trazer o objeto para um outro obejto basta

var user = {
  nome,
  idade,
  ...empresa // ...nome_do_objeto
};

console.log( user );
