import styled from "styled-components";

export const StyledProductsListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid green;

    .pagination{
        display: flex;
        gap: .3rem;
        margin-bottom: .5rem;
    }

    ul{
        display: flex;
        flex-direction: column;
        gap: .5rem;
        padding: 0;
        margin: 0;
        width: 100%;
    }

    button{
        cursor: pointer;
    }
`