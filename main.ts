//Variaveis Tipadas:

let nome: string;
let idade: number;
let humano: boolean;

nome = "andre"; //atribuição

// o TS deduz o tipo
let texto = "text"; //string
let numero = 5; //number
let teste = true; //number


//Arrays:

let lista: string[];
let lista2: number[];
let lista3: boolean[];

lista = ["andre", "gustavo"];
lista2 = [6, 14];
lista3 = [true, false];


//declaração array alternativo (generic)
let list: Array<string>; //<> -> generic


//tipagem de array com indice predefinido (tupla)

let aluno: [string, number, boolean];

aluno = ["andre", 21, true];


//sem tipagem
let usuario: any[]; //o uso de any em TS deve ser evitado e usado apenas em momentos especificos

usuario = [18, false, "gabriel"];


//Objects:

let objeto: object; //para qualquer tipo de objeto, é como o any

objeto = {
    nome: "andre",
    idade: 21,
};

//com generic

let objeto2: Record<string, string>;
//o primeiro "string" como parametro define que os atributos tem o tipo string, o segundo é mesma coisa porém para o dado que o atributo recebe.

objeto2 = {
    nome: "andre",
    idade: "21",
};

let objeto3: Record<string, number>;
//exemplo com apenas os dados sendo number

objeto3 = {
    nome: 345,
    idade: 21.43,
};

let objeto4: { nome: string; idade: number; humano: boolean };
//declarando com mais detalhes de campos

objeto4 = {
    nome: "andre",
    idade: 21,
    humano: true,
};
