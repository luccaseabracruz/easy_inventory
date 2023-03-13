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
        max-width: 30rem;
        box-shadow: 0 0 1rem #00000070;
    }

    .imageAndInfo{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 1rem;
    }

    
    .imageContainer{
        width: 40%;
        height: 12rem;
    }
    
    .imageContainer img{
        height: 100%;
        box-sizing: border-box;
    }
    
    .info h2{
        max-width: 14rem;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--color-grey600);
    }

    .closeBtn{
        position: absolute;
        top:  1rem;
        right: 1rem;

        border: none;
        background-color: transparent;
        font-size: 1.5rem;

        cursor: pointer;
    }
    .closeBtn:hover{
        color: var(--color-grey300);
    }


`