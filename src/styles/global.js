import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
    @import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@100&display=swap" rel="stylesheet');

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
        font-family: 'Catamaran', sans-serif;
    }

    body {
        font-family: 'Catamaran', sans-serif;
        background: #ecf1f8;
        color: #333;
        -webkit-font-somoothing: antialiased !important;
    }

    ul {
        list-style: none;
    }
`;