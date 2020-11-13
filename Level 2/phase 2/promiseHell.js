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
getId().then((id) => {
  getEmailData(id).then((email) => {
    enviarEmail("Olá, como vai ?", email).then(() => {
      console.log("Email enviado id: " + id)
    }).catch(err => {
      console.log(err)
    })
  })
})
