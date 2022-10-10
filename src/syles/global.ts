import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --red: #E62E4D;
    --green: #33CC95;
    --blue: #5429CC;
    --blue-light: #6933FF;
    
    --background: #F0F2F5;
    --shape: #FFFFFF;
    
    --text-title: #363F5F;
    --text-body: #969CB3;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
  }

  html{
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720) {
      font-size: 87.5%;
    }
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
  }

  button{
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  body, button, input, textarea{
    font-family: 'Poppins';
    font-size: 36px;
    font-weight: 400;
    line-height: 54px;
    letter-spacing: 0em;
    text-align: left;
  }
  h1, h2, h3, h4, h5, strong{
    font-family: 'Poppins';
    font-size: 36px;
    font-weight: 600;
    line-height: 54px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
