import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle/GlobalStyle.jsx";

// 宣告 ThemeProvider 的 theme 變數, 透過 props 傳遞到所有內層
const theme = {
  colors: {
    darkBlue: 'rgb(35, 85, 107)',
    brightBlue: "#5194bb",
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
