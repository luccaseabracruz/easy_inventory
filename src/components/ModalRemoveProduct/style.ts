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

    h2{
        max-width: 19rem;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: .2rem
    }

    .productName{
        max-width: 12rem;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .box > span{
        color: var(--color-grey300);
        font-size: 1rem;
    }

    button{
        cursor: pointer;
    }

    .closeBtn{
        position: absolute;
        top:  1rem;
        right: 1rem;
        
        /* border: none;
        border-radius: 4px;
        font-size: 1.3rem;
        background-color: transparent;
        padding: .2rem; */
    }

    .closeBtn:hover{
        background-color: var(--color-grey100);
        opacity: .8;
    }



    .buttonsContainer{
        display: flex;
        justify-content: space-around;
        margin-top: 2rem;
        
    }

    .buttonsContainer button{
        padding: .8rem 1.5rem;
        font-size: 1rem;
        font-weight: 600;
    }

    .removeBtn:hover{
        background-color: var( --color-feedback-negative);
        border-radius: 4px;
        border: 2px solid var(--color-grey100);
        color: var(--color-grey100);
    }


`