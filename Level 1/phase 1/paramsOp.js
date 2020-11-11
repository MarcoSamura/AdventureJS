// Parâmetrios opcionais
// São também chamados de parâmetros predefinidos de uma função
// ou seja quando passamos esses parâmetros em uma função e não informamos seu valor por natureza e UNDEFINED 
// Justamente por não termos definição do valor já que não passamos nada.

// Tá, mas não entendi !

// Calma...

function subt(a, b) { // Vejam que temos uma função 'Normal'
	
	// Temos como argumentos da fução (a e b)
	return console.log(a - b); // O retorno desta função e a subtração de a e b

	// Agora note que não definimos nenhum valor para a nem para b 

	// Oretorno dos mesmos será ... 

	// NaN como falado a minha funcão retorna valores indefinidos
	// como faço então os valores de a e b 

	// Simples, dentro da função escreva: console.log(typeof(a) + "\n" + typeof(b));
}

function soma(a, b = 10) { // como você já podi ter observado, o valor do nosso b está b = 10
	// O que isso vai fazer com nosso código ? 
	// Simples, definimos um valor agora quando evocar-mos nossa função, caso não seja passado um valor para b
	// O mesmo assumirá o valor de 10

	// Exem: soma(10) => como definimos que b = 10 
	// sua saída será 11
	console.log(a + b);

	// Por  regra parâmetros opcionais sempre devem ser os últimos em sua função
}
