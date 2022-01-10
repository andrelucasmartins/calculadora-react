import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @font-face {
  font-family: 'RobotoMono';
  src: url('./fonts/RobotoMono-Thin.ttf');
  }

  * {
    font-family: 'RobotoMono', monospace;
  }

  :root {
    --bg-button: #f0f0f0;
    --border-button: solid 1px #888;
    --orange: #e76f51;
  }

  body {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;

    color: #fff;
    background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73));
  }

`