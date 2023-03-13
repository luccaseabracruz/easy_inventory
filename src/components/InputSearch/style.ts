import styled from "styled-components";

export const StyledInputSearch = styled.form`

    margin-bottom: 1rem;
    .inputContainer{
        display: flex;
        justify-content: space-between;
        padding: .5rem;
        background-color: #ffffff;
        border-radius: .3rem;

    }

    input{
        width: 85%;
        border: none;
        outline: none;
        font-size: 1rem;
    }

    button{
        height: 2rem;
        width: 2rem;
        cursor: pointer;
        transition: .2s;
        border: none;
        border-radius: .2rem;
        background-color: transparent;
    }
    button:hover{
        background-color: var(--color-grey100);
    }

    small{
        color: red;
        margin: .1rem 0 0 .5rem;
    }




`