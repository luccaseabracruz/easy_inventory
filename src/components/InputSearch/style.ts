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
    }

    button{
        border: 2px solid blue;
        cursor: pointer;
        transition: .2s;
    }
    button:hover{
        background-color: grey; 
    }

    small{
        color: red;
        margin: .1rem 0 0 .5rem;
    }




`