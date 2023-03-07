import { InputSearch } from "../../components/InputSearch"
import { ProductsList } from "../../components/ProductsList"
import { StyledProductsPageContainer } from "./style"

export const ProductsPage = () => {

    return (
        <StyledProductsPageContainer>
            <h1>Produtos</h1>

            <InputSearch placeholder="Digite o nome do produto"/>

            <ProductsList />

            
        </StyledProductsPageContainer>

    )
}