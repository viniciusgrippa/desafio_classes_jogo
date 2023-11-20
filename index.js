class heroi {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    tipoAtaque() {
        let attackType = "";
        if (this.type == "Mago") {
            attackType = "Magia";
        } else if (this.type == "Guerreiro") {
            attackType == "Espada";
        } else if (this.type == "Monge"){
            attackType = "Artes Marciais";
        } else if (this.type == "Ninja"){
            attackType = "Shuriken";
        }

        return attackType;
    }

    atacar() {
        console.log(`O ${this.type} atacou usando ${this.tipoAtaque()}`)
    }
}

let novoHeroi = new heroi("Vinicius", 28, "Mago");

novoHeroi.atacar();