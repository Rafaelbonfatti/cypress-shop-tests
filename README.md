# Simulação de Compra API

## Descrição

A **Simulação de Compra API** é uma aplicação simples que simula o processo de compra de produtos em uma loja virtual. Esta API oferece funcionalidades para listar todos os produtos disponíveis e realizar a compra de produtos, verificando o saldo na carteira do usuário.

### Funcionalidades

- **Listar Todos os Produtos:** A API permite que os usuários vejam uma lista completa de todos os produtos disponíveis na loja, incluindo detalhes como nome, preço e disponibilidade.

- **Realizar Compra de Produto:** A API permite que o usuário compre produtos, verificando o saldo disponível na carteira para completar a transação com sucesso.

### Testes Automatizados

A API foi automatizada com a ferramenta [Cypress](https://www.cypress.io/), que realiza testes e validações para garantir que todas as funcionalidades principais estejam funcionando conforme esperado. Isso assegura a confiabilidade e a consistência dos serviços oferecidos.

### Endpoints

- **GET /api/produtos:** Retorna uma lista de todos os produtos disponíveis na loja.

- **POST /api/produtos:** Realiza a compra de um produto, verificando o saldo na carteira do usuário para concluir a transação.

### Observações

- Atualmente, a funcionalidade de listar produtos por ID está desativada devido a um erro identificado na API.

- O sistema de compra verifica o saldo na carteira do usuário antes de confirmar a transação, assegurando que apenas compras possíveis sejam realizadas.
