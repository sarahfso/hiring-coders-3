module.exports = class Cliente {
    constructor(_id=0, _nome="", _telefone="") {
        this.id = _id;
        this.nome = _nome;
        this.telefone = _telefone;
    }

    nomeUppercase() {
        return this.nome.toUpperCase();
    }

    static primeiro() {
        return new Cliente()
    }

    static todos() {
        return [
            new Cliente(1,"sarah1","9812-3982"),
            new Cliente(2,"sarah2","2831-9831"),
            new Cliente(3,"sarah3","2931-1923"),
            new Cliente(4,"sarah4","2931-1923"),
            new Cliente(5,"sarah5","2931-1923"),
            new Cliente(6,"sarah6","2931-1923"),
            new Cliente(7,"sarah7","2931-1923"),
            new Cliente(8,"sarah8","2931-1923"),
            new Cliente(9,"sarah9 ","2931-1923"),
            new Cliente(10,"sarah10","2931-1923")
        ]
    }
}