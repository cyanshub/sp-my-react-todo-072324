import { createGlobalStyle } from "styled-components";
import './Resets.css'

// 使用 createGlobalStyle 定義一個 GlobalStyle 組件, 使全局樣式生效
const GlobalStyle = createGlobalStyle`
  // *,
  // *::after,
  // *::before {
  //   padding: 0;
  //   margin: 0;
  //   box-sizing: border-box;
  // }

  body {
    background-color: ${props => props.theme.colors.brightBlue};
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-family: sans-serif;
  }

  .wrapper {
    width: 70vw;
    min-width: 350px;
    max-width: 450px;
    padding: 30px;
    background-color: ${props => props.theme.colors.darkBlue};
    border-radius: 5px;
    margin-top: calc(100vh/6);
    text-align: center;
  }

  .completed {
    opacity: 0.4;
    text-decoration: line-through 3px black;
  }
`;

export default GlobalStyle
