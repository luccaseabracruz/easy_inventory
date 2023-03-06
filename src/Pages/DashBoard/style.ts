import styled from 'styled-components';


export const DivPai = styled.div`

    max-width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: center;
    align-items: center;

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
        color: var(--color-grey0);
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
    }
    li{
        cursor: pointer;
    }

    @media(min-width: 690px){
        max-width: 25%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    @media(min-width: 1000px){
        max-width: 20%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

`;

export const RenderPage = styled.div`

    width: 90%;
    height: 200px;
    border: 1px solid blue;
    padding: 16px;
`;
