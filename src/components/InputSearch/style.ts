import styled from "styled-components";

export const StyledInputSearch = styled.form`
    display: flex;
    justify-content: space-between;
    padding: .5rem;
    background-color: #ffffff;
    border-radius: .3rem;
    margin-bottom: 1rem;

    input{
        border: 2px solid red;
        width: 85%;
    }

    button{
        border: 2px solid blue;
        cursor: pointer;
        transition: .2s;
    }
    button:hover{
        background-color: grey; 
    }


`