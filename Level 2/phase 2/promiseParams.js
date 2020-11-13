const enviarEmail = ( body, to ) => {
  return new Promise(( resolve, reject ) => {
    setTimeout(() => {
      const erro = true;
      if (!erro) {
        resolve({time:6,to:"Samuel"}) // Promessa ok
        // params de uma promise so aceita um argemento
        // caso deseje passar mais de um argemento
        // terá escrever em formato json
      }
      else {
        reject("404") // Deu error
      }
    }, 4000)
  });
};
enviarEmail("Olá, mundo", "Narutin@gmail.com").then( ({ time, to }) => {
  console.log(`
    Time: ${ time }
    ---------------
    De:${ to }
  `)
  console.log("Email Enviado")
}).catch((error ) => {
    console.log(`Envio de email falhou ${ error }`)
});
