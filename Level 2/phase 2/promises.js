const enviarEmail = ( body, to ) => {
  return new Promise(( resolve, reject ) => {
    setTimeout(() => {
      const erro = true;
      if (!erro) {
        resolve() // Promessa ok
      }
      else {
        reject() // Deu error
      }
    }, 4000)
  });
};
enviarEmail("Olá, mundo", "Narutin@gmail.com").then( () => {
  console.log("Email Enviado")
}).catch(() => {
    console.log('Envio de email falhou')
});
