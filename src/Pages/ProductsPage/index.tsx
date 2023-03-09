import { useContext } from "react"
import { InputSearch } from "../../components/InputSearch"
import { ModalEditProduct } from "../../components/ModalEditProduct"
import { ModalRemoveProduct } from "../../components/ModalRemoveProduct"
import { ProductsList } from "../../components/ProductsList"
import { ProductsContext } from "../../provides/ProductsContext"
import { StyledProductsPageContainer } from "./style"

export const ProductsPage = () => {
    const {openEditProductModal, openRemoveProductModal} = useContext(ProductsContext);
    return (
        <StyledProductsPageContainer>
            <h1>Produtos</h1>

            <InputSearch placeholder="Digite o nome do produto"/>

            <ProductsList />

            {openEditProductModal ? <ModalEditProduct /> : null}
            {openRemoveProductModal ? <ModalRemoveProduct /> : null}

            
        </StyledProductsPageContainer>

    )
}