import styled from 'styled-components';
export const StyledModalContainer = styled.div`
    background-color: #00000070;
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;

    button{
        cursor: pointer;
    }

    .box{
        position: relative;
        padding: 1rem 2rem;
        background-color: #ffffff;
        color: black;
        width: 90%;
        max-width: 20rem;
    }

    .closeBtn{
        position: absolute;
        top:  .3rem;
        right: .3rem;
    }

    small{
        color: var(--color-feedback-negative);
    }

    .submitBtn{
        margin-top: 1rem;
        width: 100%;
        padding: .5rem;

        background-color: var(--color-feedback-positive);
        border: none;
        border-radius: 4px;
        color: white;
        font-size: 1rem;
        font-weight: 500;
        transition: .1s;
    }
    .submitBtn:hover{
        opacity: .9;
    }


`