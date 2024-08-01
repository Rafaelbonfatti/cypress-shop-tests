import 'cypress-plugin-api'


describe('Realizar compra de protudo ', () => {
  it('Deve realizar a compra de um produto verificando o saldo na carteira', () => {
    const body = {
      nome: "Mario",
      cpf: "12345678900",
      id_produto: 1,
      valor_na_carteira: 5000,  
      send_email: "email@email.com"
    };


      cy.api({
        method: "POST",
        url: '/produtos',
        body: body,
      }).then((response) => {

        expect(response.status).equal(201)
        expect(response.body.id)
        expect(response.body.message).equal('Compra realizada com sucesso')
        expect(response.body.produto).to.have.property('id').that.is.a('number')
        expect(response.body.produto.marca).equal('Samsung')
        expect(response.body.produto.nome).equal('TV Smart 4K')
        expect(response.body.produto).to.have.property('preco').that.is.a('number')

      })
  })

  it('Deve falhar ao tentar comprar um produto inexistente', () => {
    const body = {
      nome: "Mario",
      cpf: "12345678900",
      id_produto: 9999999999999999999999999,  // ID de produto inexistente
      valor_na_carteira: 5000,
      send_email: "email@email.com"
    };
  
    cy.api({
      method: "POST",
      url: '/produtos',
      body: body,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(400); // Status code para recurso não encontrado
      expect(response.body.errors).to.be.an('array').that.is.not.empty;
      // Acessa o primeiro erro no array e verifica a mensagem
      expect(response.body.errors[0].msg).to.equal('ID do produto deve ser um inteiro válido');
    });
  });

  it('Deve falhar ao tentar comprar um produto sem o CPF', () => {
    const body = {
      nome: "Mario",
      // cpf: "12345678900",
      id_produto: 1,
      valor_na_carteira: 5000,
      send_email: "email@email.com"
    };

    cy.api({
      method: "POST",
      url: '/produtos',
      body: body,
      failOnStatusCode: false 
    }).then((response) => {
      console.log(response.body); 

      expect(response.status).to.equal(400); 
      expect(response.body.errors).to.be.an('array').that.is.not.empty;
      expect(response.body.errors[0].msg).to.equal('CPF do cliente deve ser uma string');
      expect(response.body.errors[0].path).to.equal('cpf');

    });
  });


  
})