import { StyledProductsListContainer } from "./style"
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import { ProductCard } from "../ProductCard"
import { useContext } from "react"
import { ProductsContext } from "../../provides/ProductsContext"
import { UserContext } from "../../provides/UserContext"

export const ProductsList = () => {

    const {products} = useContext(ProductsContext);


    return (
        <StyledProductsListContainer>
            <div className="pagination">
                <button> <AiOutlineArrowLeft /> </button>
                <p>Nº</p>
                <button> <AiOutlineArrowRight /> </button>
            </div>

            <ul className="productList">
                {products.length === 0 ? (
                    <h2>Nenhum produto foi cadastrado</h2>
                ) : (
                    <>
                        {products.map((product) => <ProductCard product={product}/>)}
                    </>
                )}

            </ul>

        </StyledProductsListContainer>
    )
}