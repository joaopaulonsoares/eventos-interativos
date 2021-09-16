import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #FFFFFF;
        --black: #000000;
        --yellow: #F8C300;
        --gray-100: #FAF9F9;
        --gray-200: #F2F2F2;
        --gray-300: #B2B2B2;
        --gray-400: #515151;
        --gray-500: #4B4D52;
        --gray-700: #313131
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        ::-webkit-scrollbar{width: 8px}
        ::-webkit-scrollbar-thumb{background-color: var(--gray-300); border-radius: 10px;}
    }
    // font-size default = 16px (good for desktops)
    html {
        @media(max-width: 1080px) {
            font-size: 93.75%; // Convert font base size to 15px
        }
        @media(max-width: 720px){
            font-size: 87.5%; // Convert font base size to 14px
        }
    }
    // REM = 1rem = 16px (font-size default) -> se alterar o font size o valor de 1 rem será 15, 14, etc...
    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
    button {
        cursor: pointer;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;