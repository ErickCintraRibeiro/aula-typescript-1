class Pessoa {
    private nome: string;
    private idade: number;

    olamundo(): string {
        return "Ola mundo! 2DS2";
    }
}

let p = new Pessoa();

document.getElementById("texto").textContent = p.olamundo();