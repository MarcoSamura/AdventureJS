const enviarEmail = (body, to, callback) => {
  return setTimeout(() => {
    console.log(`
      Para: ${ to }
      -----------------------
      ${ body }
      -----------------------
      De:Samura
    `)
    callback();
  }, 8000);
};
console.log("Enviando email ...");

enviarEmail('Oi, seja bem vindo ao AdventuresJS', "Narutin@gmail.com", () => {
  console.log("Seu email foi enviado");
  console.log('TUDO OK !');
});
