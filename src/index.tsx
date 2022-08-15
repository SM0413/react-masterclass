import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
const root = ReactDOM.createRoot(document.getElementById("root")as HTMLElement);

/*
다크모드
  다크모드를 설정할 때에는 다크모드, 라이트모드의 변수 명이 같아야 한다. 스위치할 때 변수명이 다르면 정상적으로 적용이 되지 않기 때문
*/
const darkTheme = {
  textColor : "whitesmoke",
  backgroundColor: "#111"
};


const lightTheme = {
  textColor : "#111",
  backgroundColor: "whitesmoke"
};

root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
