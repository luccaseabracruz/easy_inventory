import styled from "styled-components";

export const StyledProductsListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .pagination{
        display: flex;
        gap: .3rem;
        margin-bottom: .5rem;
    }

    ul{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 0;
        margin: .5rem 0 0;
        width: 100%;
    }

    button{
        cursor: pointer;
    }
`