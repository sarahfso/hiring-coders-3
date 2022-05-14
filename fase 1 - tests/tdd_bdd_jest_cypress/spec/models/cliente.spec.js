const Cliente = require('../../models/cliente')

describe('Clientes', () => {
    beforeEach(() => {

    })

    test('Valida propriedades de um cliente', () => {
        let cliente = Cliente.primeiro();
        expect(cliente.id).not.toBeUndefined();
        expect(cliente.nome).not.toBeUndefined();
        expect(cliente.telefone).not.toBeUndefined();
    })

    test('Retorna todos', () => {
        let clientes = Cliente.todos();
        expect(clientes.length).toEqual(10);
    })

    test('Nome do cliente Upercase', () => {
        let cliente = Cliente.primeiro();
        cliente.nome = "danilo";
        expect(cliente.nomeUppercase()).toEqual("DANILO");
    })

})