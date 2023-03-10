import styled from "styled-components";

export const StyledProductCard = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    padding: 1rem;
    min-width: 100%;
    border-radius: 3px;
    box-sizing: border-box;

    background-color: #ffffff;
    
    .imageContainer{
        width: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img{
        height: 4rem;
        max-width: 4rem
    }

    .content{
        display: flex;
        gap: 1rem
    }

    .info{
        display: flex;
        flex-direction: column;
    }

    .info > p {
        margin: 0 0 .5rem ;
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--color-grey600);

        max-width: 13.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .info > small{
        font-size: .8rem;
        font-weight: 600;
        color: var(--color-grey300);
        margin-bottom: .3rem;
    }

    .info > button{
        border: none;
        padding: 0;
        text-align: left;
        margin-top: .3rem;
        background-color: transparent;
    }

    .removeAdnEdit{
        display: flex;
        align-items: center;
        gap: .5rem
    }

    .quatityButtons{
        display: flex;
        align-items: center;
    }
    .quatityButtons small{
        border: 1px solid var(--color-grey300);
        padding: .13rem .4rem; 
        color: var(--color-grey600);
        font-weight: 500;
    }

    .buttonsAndPrice{
        display: flex;
        flex-direction: row;
        justify-content: space-between;

    }

    .price{
        width: 5.125rem;
        font-size: 1rem;
        font-weight: 600;
        color: var(--color-grey600);
        text-align: center;
    }

    
    @media(min-width: 768px){
        flex-direction: row;
        justify-content: space-between;
        
        .buttonsAndPrice{
            align-items: center;
            gap: 1rem;
            
        }
        
    }
    
    @media(min-width: 850px){
        .info > p{
            max-width: 16rem
        }
        
    }
    @media(min-width: 1000px){
        .info > p{
            max-width: 20rem
        }
        
    }
`