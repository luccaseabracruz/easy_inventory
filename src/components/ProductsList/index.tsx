import { StyledProductsListContainer } from "./style"
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import { ProductCard } from "../ProductCard"
import { useContext } from "react"
import { ProductsContext } from "../../provides/ProductsContext"
import { UserContext } from "../../provides/UserContext"
import SearchTitle from "../SearchTitle"

export const ProductsList = () => {

    const {products, filteredProducts} = useContext(ProductsContext);


    return (
        <StyledProductsListContainer>

            {/* {true && <SearchTitle />} */}
            {filteredProducts.length > 0 && <SearchTitle />}

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
                        {filteredProducts.length > 0 ? (
                            <>
                                {filteredProducts.map((product) => <ProductCard key={product.id} product={product}/>)}
                            </>

                        ):(
                            <>
                                {products.map((product) => <ProductCard key={product.id} product={product}/>)}
                            </>

                        )}
                    </>
                )}

            </ul>

        </StyledProductsListContainer>
    )
}