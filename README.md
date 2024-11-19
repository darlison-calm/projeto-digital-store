# Drip Store - Frontend

## Link para o Backend

A API que alimenta o frontend pode ser acessada no seguinte repositório:

[Backend - Drip Store API](https://github.com/Sir-Vinicius/drip-store-api)

## Descrição do Projeto

O **Drip Store Frontend** é a interface de uma loja online construída como parte do projeto final do curso **Desenvolvimento Web Full Stack** da **Geração Tech**, uma parceria entre o **IEL Ceará** e o **Governo do Estado do Ceará**. O projeto tem como objetivo criar uma plataforma de e-commerce com funcionalidades como a gestão de produtos, categorias, e autenticação de usuários.

Este projeto foi desenvolvido utilizando o **React** e outras bibliotecas de suporte para criar uma interface interativa, conectando-se diretamente à API fornecida pelo backend.

## Tecnologias Utilizadas

O projeto utiliza as seguintes tecnologias e dependências:

- **React**: Biblioteca para construção da interface de usuário.
- **Vite**: Ferramenta de build e desenvolvimento que oferece alta performance.
- **Axios**: Utilizado para fazer requisições HTTP à API do backend.
- **React Router**: Biblioteca para gerenciamento de rotas e navegação entre páginas.
- **PrimeReact**: Conjunto de componentes de UI para construção de interfaces ricas e responsivas.
- **Bootstrap**: Framework CSS para a construção de layouts responsivos e estilizados.
- **Lucide React**: Biblioteca de ícones para React.
- **Joi**: Biblioteca para validação de dados (potencialmente usada no frontend para garantir a integridade dos dados antes do envio à API).

## Como iniciar

### 1. Instalar as dependências

Após clonar o repositório, navegue até a pasta do projeto e instale as dependências:

```bash
npm install
```

### 2. Iniciar o servidor de desenvolvimento

Após instalar as dependências, você pode iniciar o servidor de desenvolvimento com o seguinte comando:

```bash
npm run dev
```

## Funcionalidades

- **Cadastro e Login de Usuários**: Autenticação com JWT através da API.
- **Listagem de Produtos**: Conexão com o backend para exibir os produtos cadastrados.
- **Filtro de Produtos por Categoria**: Navegação entre categorias para facilitar a busca.
- **Carrinho de Compras**: Interação com o backend para realizar operações de adição/remover produtos.
