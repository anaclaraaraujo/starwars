# Star Wars Discovery

**Star Wars Discovery** é uma plataforma web interativa criada para fãs da icônica saga Star Wars! O projeto integra a [SWAPI](https://swapi.dev/), a API pública do universo Star Wars, permitindo que os usuários explorem de forma detalhada o vasto universo da franquia.

O objetivo deste projeto é proporcionar uma experiência rica e envolvente para os usuários, oferecendo uma interface amigável e responsiva, onde eles podem mergulhar no universo Star Wars e explorar cada detalhe da franquia.

## Tecnologias
<p>
<img alt="React version" src="https://img.shields.io/static/v1?label=react&message=18.3.1&color=18181B&labelColor=61DAFB">
<img alt="React DOM version" src="https://img.shields.io/static/v1?label=react-dom&message=18.3.1&color=18181B&labelColor=61DAFB">
<img alt="Styled Components version" src="https://img.shields.io/static/v1?label=styled-components&message=6.1.13&color=18181B&labelColor=DB7093">
<img alt="Ant Design version" src="https://img.shields.io/static/v1?label=antd&message=5.21.6&color=18181B&labelColor=1890FF">
<img alt="wakatime" src="https://wakatime.com/badge/user/30563c84-4568-4594-9bbe-b31f0effd26b/project/8a4bed5e-23b7-4bce-864f-ffeefccfd780.svg">
</p>

## **Visão Geral do Projeto**
- **Descrição**: Aplicação para explorar o universo Star Wars, com funcionalidades que permitem aos usuários visualizar informações detalhadas de personagens, planetas, naves e filmes.
- **Objetivo**: Proporcionar uma experiência interativa e informativa sobre o universo Star Wars.
- **Tecnologias Utilizadas**: 
  - **Frontend**: React, TypeScript, Ant Design, Axios.
  - **API**: SWAPI.
  - **Deploy**: AWS CloudFront.
- **Arquitetura Geral**: O projeto é dividido em componentes reutilizáveis, páginas principais, serviços de API, hooks personalizados, e arquivos de estilo.

## **Estrutura do Projeto**
```
src
├── App.tsx
├── assets
│   ├── background.png
│   ├── icons
│   │   ├── characters.png
│   │   ├── films.png
│   │   ├── planets.png
│   │   ├── species.png
│   │   ├── starships.png
│   │   └── vehicles.png
│   ├── logo
│   │   ├── discover.svg
│   │   └── starwars.svg
│   └── logo.svg
├── components
│   ├── Filter
│   │   └── index.tsx
│   ├── Footer
│   │   ├── index.tsx
│   │   └── style.ts
│   ├── Header
│   │   ├── index.tsx
│   │   └── style.ts
│   ├── Layout
│   │   ├── index.tsx
│   │   └── style.ts
│   ├── PersonModal
│   │   └── index.tsx
│   └── SearchInput
│       └── index.tsx
├── main.tsx
├── pages
│   ├── Film
│   │   └── index.tsx
│   ├── Home
│   │   ├── index.tsx
│   │   └── style.ts
│   ├── People
│   │   └── People.tsx
│   ├── Planets.tsx
│   ├── Species.tsx
│   ├── Starships.tsx
│   └── Vehicles.tsx
├── redux
│   ├── filmsSlice.ts
│   ├── peopleSlice.ts
│   ├── planetsSlice.ts
│   ├── speciesSlice.ts
│   ├── starshipsSlice.ts
│   ├── store.ts
│   └── vehiclesSlice.ts
├── routes
│   └── AppRoutes.tsx
├── style
│   └── global.ts
├── types
│   └── interface.ts
├── utils
│   └── api.ts
```

## **Configuração e Instalação**
- **Pré-requisitos**: Node.js e npm/Yarn.
- **Passo a Passo de Instalação**:
  1. Clone o repositório:
     ```bash
     git clone https://github.com/anaclaraaraujo/starwars.git
     ```
  2. Instale as dependências:
     ```bash
     npm install
     ```
  3. Rode o projeto em ambiente de desenvolvimento:
     ```bash
     npm run dev
     ```
- **Configuração para Deploy na AWS**: Para fazer o deploy na AWS usando CloudFront, configure um bucket S3 para armazenar os arquivos estáticos da aplicação, configure as permissões adequadas, e use o CloudFront para distribuir o conteúdo.

## **Detalhamento das Funcionalidades**
- **Roteamento**: O aplicativo possui as seguintes rotas principais:
  - `/films`: Lista de filmes.
  - `/people`: Lista de personagens.
  - `/planets`: Lista de planetas.
  - `/species`: Lista de espécies.
  - `/starships`: Lista de naves.
  - `/vehicles`: Lista de veículos.
- **Componentes Principais**:
  - **Tabela de Listagem**: Utiliza o Ant Design para listar personagens, planetas e filmes, com paginação e filtros.
  - **Modal de Detalhes**: Exibe informações detalhadas de um item, como características de um personagem.
  - **Filtros e Busca**: Permite buscar e filtrar resultados em tempo real, implementando lógica de debouncing.
- **Chamadas à API**: Axios é utilizado para fazer requisições à API SWAPI. Aqui está um exemplo de configuração:
  ```typescript
  import axios from 'axios';

  const api = axios.create({
    baseURL: 'https://swapi.dev/api/',
  });
  ```

## **Gerenciamento de Estado**
- Utiliza Redux para gerenciar o estado da aplicação. As slices são configuradas para cada entidade (filmes, personagens, planetas, etc.) e são integradas no store da aplicação.

## Licença
Este projeto está licenciado sob a [MIT License](LICENSE).