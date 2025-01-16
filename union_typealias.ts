//Union:

let id: number | string;
//o id pode ser um ou outro, isso previne problemas com tipos em diferentes bancos de dados conectados ao frontend. Pode ser feito com mais de dois tipos, até quantos forem necessarios.


//Type Alias:

type Id = number | string;
//com type é possivel criar tipos personalizaveis de acordo com a necessidade, dessa forma o código diminui e fica reutilizavel. É importante utilizar convenções, como iniciar os tipos com letra maiúscula e limitar tipos diferentes com " | ".

let id1: Id;
let id2: Id;
let id3: Id;
let id4: Id;
let id5: Id;


//com objeto
type Usuario = { nome: string; idade: number };

let user: Usuario;

user = {
    nome: "andre",
    idade: 21,
};