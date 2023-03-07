import { StyledProductsListContainer } from "./style"
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import { ProductCard } from "../ProductCard"

export const ProductsList = () => {

    return (
        <StyledProductsListContainer>
            <div className="pagination">
                <button> <AiOutlineArrowLeft /> </button>
                <p>Nº</p>
                <button> <AiOutlineArrowRight /> </button>
            </div>

            <ul className="productList">
                {false ? (
                    <h2>Nenhum produto foi cadastrado</h2>
                ) : (
                    <ProductCard />
                )}

            </ul>

        </StyledProductsListContainer>
    )
}