var samuel = {
  nome:"Marcos Samuel",
  empresa:"Memento mori"
};

var silvio = {
  nome:"Silvio Santos",
  empresa:"SBT"
};
var edir = {
  nome:"Edir Macedo",
  empresa:"Record"
};

var users = [samuel, silvio, edir];

// const usuario = users.find( { nome } => nome === "Marcos Samuel");
var usuario = users.find(users => users.nome === "Marcos Samuel");
var empresa = users.find(users => users.empresa === "SBT");

console.log( empresa );
console.log( usuario );
