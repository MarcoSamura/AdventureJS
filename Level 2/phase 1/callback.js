const enviarEmail = (body, to, callback) => {
  return setTimeout(() => {
    console.log(`
      Para: ${ to }
      -----------------------
      ${ body }
      -----------------------
      De:Samura
    `)
    callback("Ok", 5, "8s");
  }, 8000);
};
console.log("Enviando email ...");

enviarEmail('Oi, seja bem vindo ao AdventuresJS', "Narutin@gmail.com", (status, amount, time) => {
  console.log(`
    Status: ${ status }
    -------------------
    contatos: ${ amount }
    Tempo de envio: ${ time }
    -------------------
  `);
  console.log('TUDO OK !');
});
