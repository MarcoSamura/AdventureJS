const enviarEmail = (body, to, callback) => {

  return setTimeout(() => {

  /// ..... Lógica

  var erro = false;

  if (erro) {
    callback('Deu ruim')
  }
  else {
    callback("Deu bom");
  }

  }, 8000);
};
console.log("Enviando email ...");

enviarEmail('Oi, seja bem vindo ao AdventuresJS', "Narutin@gmail.com", ( notError, error ) => {
  if (error) { // tudo ok
    console.log(error);
  }
  else { // opa, deu erro
    console.log(notError);
  }
});
