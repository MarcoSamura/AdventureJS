// async/await mudou a forma de programar javascript
// É uma forma diferente de escrever suas promises
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
      const erro = false;
      if (!erro) {
        resolve({time:6,to:"Samuel"})
      }
      else {
        reject("404")
      }
    }, 4000)
  });
};

function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {name:"Naruto", lang:"Python"},
        {name:"Seya", lang:"C"},
        {name:"Son Goku", lang:"Javascript"}
      ])
    },3000)
  })
}


// Ao utilizar async/await código se torna bloqueante
async function main() {
  let users = await getUser();
  console.log(users)
  console.log("Olá")
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
