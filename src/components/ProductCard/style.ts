import styled from "styled-components";

export const StyledProductCard = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    padding: .5rem;
    min-width: 100%;
    border: 2px solid yellow;
    box-sizing: border-box;

    img{
        height: 4rem;
    }

    .content{
        display: flex;
        gap: 1rem
    }

    .info{
        display: flex;
        flex-direction: column;
        border: 2px solid orange;
    }

    .info > p {
        margin: 0 0 .5rem ;
    }
    .info > button{
        border: none;
        padding: 0;
        text-align: left;
        margin-top: .3rem;
        background-color: transparent;
    }

    .quatityButtons{
        display: flex;
        /* gap: .3rem; */
        align-items: center;
    }
    .quatityButtons small{
        border: 2px solid black;
        padding: 0 .4rem; 
    }

    .buttonsAndPrice{
        display: flex;
        flex-direction: row;
        justify-content: space-between;

    }

    @media(min-width: 768px){
        flex-direction: row;
        justify-content: space-between;

        .buttonsAndPrice{
            align-items: center;
            gap: 1rem;

        }

    }

`