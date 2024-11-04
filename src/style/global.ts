import { Pagination } from 'antd';
import { createGlobalStyle, styled } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    min-height: 100vh;
  
    color: white;
    --webkit-font-smoothing: antialised;
  }

  body, input, button, textarea {
    font-family: "Lexend", sans-serif;
    font-weight: 200;
    font-size: 1rem;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`;


export const CustomPagination = styled(Pagination)`
  .ant-pagination-prev .ant-pagination-item-link,
  .ant-pagination-next .ant-pagination-item-link {
    color: white;
  }

  .ant-pagination-prev .ant-pagination-item-link:hover,
  .ant-pagination-next .ant-pagination-item-link:hover {
    color: white;
  }

  .ant-pagination-prev .ant-pagination-item-link svg,
  .ant-pagination-next .ant-pagination-item-link svg {
    fill: white;
  }
`;