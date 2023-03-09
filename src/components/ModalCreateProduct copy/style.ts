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


`