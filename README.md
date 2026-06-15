# NinjaCar

Bem-vindo ao projeto NinjaCar!

Este é um projeto feito para a entrega da Fase 3 da Pós-Tech da FIAP, para o curso de Desenvolvimento FullStack, aplicando os conhecimentos adquiridos em aula e com uma ampla pesquisa de diversas outras funcionalidades.

A aplicação tem como objetivo realizar o gerenciamento de uma coleção de carros, permitindo a listagem, inclusão, edição, remoção e visualização dos itens cadastrados.

## Quick Start

```bash
git clone https://github.com/BruninBrady21/ninjacar_app.git
cd NinjaCar
npm install
npm run dev
json-server --watch db.json --port 3001
```

## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Execução](#instalação-e-execução)
- [Funcionalidades](#funcionalidades)
- [Requisitos Não Funcionais](#requisitos-não-funcionais)
- [Roadmap](#roadmap)
- [Créditos](#créditos)
- [Licença](#licença)

## Tecnologias Utilizadas

- React
- TypeScript
- Vite
- Axios
- Styled Components
- Formik
- React Icons

## Instalação e Execução

PRÉ-REQUISITOS:
- Node.js 20 ou superior
- npm

CLONE O PROJETO:
- git clone https://github.com/BruninBrady21/ninjacar_app.git

ACESSE A PASTA DO PROJETO:
- cd NinjaCar

INSTALE AS DEPENDÊNCIAS:
- npm install

EXECUTE A APLICAÇÃO:
- npm run dev

Após iniciar o servidor, a aplicação estará disponível em:
http://localhost:5173

INICIALIZE A API:
Para trazer os dados já guardados na API do Axios e garantir a persistência dos novos dados cadastrados, rode o comando:
json-server --watch db.json --port 3001

O banco de dados fictício será inicializado na porta 3001 e estará disponível para visualização em:
http://localhost:3001

## Funcionalidades
- Listagem de carros cadastrados.
- Persistência dos dados.
- Filtragem por marca, modelo e ano.
- Edição de carros.
- Remoção de carros.
- Visualização dos itens.

## Requisitos Não Funcionais
- O sistema foi desenvolvido utilizando React.
- O sistema utiliza Hooks e componentes funcionais.
- O sistema realiza a comunicação com a API utilizando Axios.
- O design da aplicação foi construído com Styled Components.
- O formulário para inserção de novo carro foi construído com Formik.
- O formulário possui validações para campos obrigatórios.
- O sistema exibe o formulário e os itens do rodapé (Privacidade e Termos de Serviço) por meio de modal window.

## Roadmap
- [ ] Página de Configurações
- [ ] Sistema de carros favoritos
- [ ] Associação de imagem ao carro 
- [ ] Melhorar responsividade e aparência dos filtros
- [ ] Incluir opção de, ao clicar, abrir uma modal window com todos os detalhes do carro e, se possível, fotos referentes ao modelo do carro

## Créditos
- Algumas imagens e recursos visuais utilizados neste projeto pertencem aos seus respectivos autores e são empregados exclusivamente para fins educacionais, sem finalidade comercial.
- O GIF utilizado nas páginas "Configurações" e "Favoritos" e o favicon presente na aba do navegador são derivados do seriado de televisão "LEGO Ninjago: Mestres do Spinjitzu", cujos direitos pertencem à LEGO Group e à Wil Film ApS.
- As marcas e modelos de veículos mencionados pertencem às respectivas fabricantes.

## Licença
Projeto desenvolvido exclusivamente para fins acadêmicos.
