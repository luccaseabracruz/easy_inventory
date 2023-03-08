import { useContext } from "react";
import { ProductsContext } from "../../provides/ProductsContext";
import { StyledContainer } from "./style";

export default function SearchTitle() {

    const {search, cleanSearch} = useContext(ProductsContext)

    return (
        <StyledContainer>
            <h2>Resultados da pesquisa: {search}</h2>
            <button onClick={()=> cleanSearch()}>Limpar busca</button>
        </StyledContainer>
    )
}