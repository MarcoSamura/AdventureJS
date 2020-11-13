// Modifique a promise alinhada(promise hell) no formato de async/await
const getId = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5)
    }, 1500)
  })
}
const getEmailData = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Narutin@gmail.com")
    }, 2000)
  })
}
const enviarEmail = ( body, to ) => {
  return new Promise(( resolve, reject ) => {
    setTimeout(() => {
      const erro = true;
      if (!erro) {
        resolve({time:6,to:"Samuel"})
      }
      else {
        reject("404")
      }
    }, 4000)
  });
};

async function main() {
  var id = await getId();
  var email = await getEmailData(id)
  try {
    await enviarEmail(`Olá, como vai ? ${email}`)
    console.log("Email enviado com sucesso !");
  } catch (erro) {
    console.log(erro)
  }
}
main();
// getId().then((id) => {
//   getEmailData(id).then((email) => {
//     enviarEmail("Olá, como vai ?", email).then(() => {
//       console.log("Email enviado id: " + id)
//     }).catch(err => {
//       console.log(err)
//     })
//   })
// })
