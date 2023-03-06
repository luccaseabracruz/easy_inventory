import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    body{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: 'Inter',sans-serif;
    
    }
    :root{
        --color-primary: #312782;
        --color-segundary:#5E4AF7;
        --color-grey0:#F5F5F5;
        --color-grey100:#E0E0E0;
        --color-grey300:#828282;
        --color-grey600:#333333;
        --color-feedback-negative: #E60000;
        --color-feedback-positive:#168821;
        --color-feedback-warning:#FFCD07;
        --color-feedback-information: #7B61FF;
    }

    .buttonGreen{
        padding: 10px;
        background-color: var(--color-feedback-positive);
        border: none;
        border-radius: 8px;
        color: var(--color-grey0);
        font-family: 'Inter',sans-serif;
        cursor: pointer;
    }

    .buttonGreen:hover{
        background-color: #27AE60;
    }

    .buttonRed{
        background-color: var(--color-feedback-negative);
        font-family: 'Inter',sans-serif;
        padding: 10px;
        border: none;
        color: var(--color-grey0);
        border-radius: 8px;
        cursor: pointer;
    }

    .buttonRed:hover{
        background-color: #EF7E7E;
    }

    

`;