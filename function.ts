//Function

function test() {} //void

function cadeia(a: string, b: string): string {
    return a;
}

function somar(a: number, b: number) {
    return a + b;
} //neste caso não é necessário declarar o tipo de retorno da função já que é impossivel ter um retorno diferente de number após somar os dois parametros

function booleano(): boolean {
    return true;
}


//Arrow function:

const soma1 = (a: number, b: number) => {
    return a + b
};

const soma2 = (a: number, b: number) => a + b; //enxuta