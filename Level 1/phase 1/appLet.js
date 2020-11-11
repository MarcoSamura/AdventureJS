//A palavra reservada let tem como funcionalidade declarar uma variável
//Igualmente a var, mas o que diferencia let e var é algo que na programação chamamos de ESCOPO
//O que é escopo ? calma padawan, escopo é basicamente o nível de acesso da sua variável
//Falando no var, esse possui dois tipos de escopos: Global e Local
//Falando do let esse possui três tipos de escopos: Global, Local e Bloco.
//Global:Pode ser usada em qualquer parte do código.
//Local:Somente no local onde foi declarada.

var nome = "Marcos"; // variável global independente de onde estiver poderei ter seu valor.
let desenho1 = "Dragonball Z"; // Variável global

function globalNome () {
	// nome: escopo global
	// desenho: escopo global
	console.log("Hello, " + nome);
	console.log("Meu desenho favorito é " + desenho1);
}

function localNome () {
	var sobrenome = "Samuel"; // escopo local
	let desenho2 = "Naruto"; // escopo local
	console.log("Olá, " + sobrenome);
	console.log("Meu desenho favorito é " + desenho2);
}
// Ainda não entendi qual a diferença dessas duas ?
// Calma, realmente quando olhamos de forma superficial realmente não aparenta ter diferença
// Mas como foi citado acima o let adiciona mais um tipo de escopo em nossas declarações.
// escopo em BLOCO

// tudo que abre e fecha com chaves '{}' é considerado um bloco.

// ex:if(){}, else{}, for(){}

// exemplo:

let a = 5; // global
let testar = true;

if (testar) {
	let b = 10; // está variavel só existe neste bloco.
	// Se var b = 10, desta maneira poderia usar fora do meu bloco e teria o retorno do valor de b sem restritção alguma.
	// ou seja o bloco consegue ter um escopo mais restrito do que o local.
	console.log(a + b); // Saída
}

globalNome() // Apenas chamando a função Nome
localNome() // Apenas chamando a função Sobrenome

console.log(nome) // Perceba que posso invocá - la em qualquer parte do meu código.
