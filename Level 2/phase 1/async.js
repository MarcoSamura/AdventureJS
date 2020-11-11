// A função setTimeout() por natureza e assíncrona
// Não a ação de bloqueio ou seja as funções são executadas
// Somente depois que a função async carregar ele exibi seu resultado
// Não bloqueando as demais funcões

const enviarEmail = (body, to) => {
  return setTimeout(() => { // funcão Async
    console.log(`
      Para: ${ to }
      -----------------------
      ${ body }
      -----------------------
      De:Samura
    `)
  }, 8000);
};
console.log("Inicio so envio de email!"); // rodará no mesmo instante que a funcao setTimeout
enviarEmail('Oi, seja bem vindo ao AdventuresJS', "Narutin@gmail.com"); // Será exibida depois de carregada
console.log("Seu email foi enviado, deve chegar em minutos");// rodará no mesmo instante que a funcao setTimeout
console.log('TUDO OK !');// rodará no mesmo instante que a funcao setTimeout
