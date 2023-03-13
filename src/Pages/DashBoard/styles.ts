import styled from 'styled-components';


export const DivPai = styled.div`

    position: relative;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: center;
    align-items: center;
    background-color: var(--color-grey100);

    @media(min-width: 690px){
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 0px;
    }
`


export const MenuNavigation = styled.div`

    width: 100%;
    max-width: 100%;
    background-color: var(--color-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 0px;
    flex-direction: column;
    color: var(--color-grey0);
    margin-top: -5px;


    .image{
        width: 150px;
        display: flex;
        flex-direction: column;
        color: (--varcolor-grey0);
        font-size: 8px;
        align-items: center;
        justify-content: center;

        img{
            width: 120px;
            height: 120px;
            border-radius: 50px;
        }
    }

    ul{
        list-style: none;
        line-height: 35px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 150px;
        padding-left: 0px;

        button{
            background-color: var(--color-primary);
            border: none;
            padding: 16px 22px;
            color: var(--color-grey0);
            font-family: 'Inter',sans-serif;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 40px;
            font-size: 1.2rem;
        }
        button:hover{
            background-color: var( --color-segundary);

        }
        
    }
    li{
        cursor: pointer;
    }

    @media(min-width: 690px){
        max-width: 25%;
        height: 830px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        border: 1px solid var(--color-primary);
        position: fixed;
        left: 0px;
        left: 0px;
    }
    @media(min-width: 1000px){
        max-width: 20%;
        height: 135vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

`;

export const RenderPage = styled.div`
    width: 100%;
    padding: 100px,16px,16px;
    background-color: var(--color-grey100);
    position: static;
    right: 0px;
    top:0px;
    margin-top: 100px;

    @media(min-width:690px){
        float: right;
        margin-left: 173px;
        margin-top: 0px;
        width: 75%;
        height: 800px;
        padding: 16px;
    }
    @media(min-width: 760px){
        width: 72%;
        margin-left: 190px;
    }
    @media(min-width: 815px){
        margin-left: 200px;
        padding: 16px;
    }
    @media(min-width:870px){
        margin-left: 210px;
    }
    @media(min-width: 1000px){
        width: 70%;
        height: 200vh;
        margin-right: 0px;
        padding: 16px;
    }
`;
