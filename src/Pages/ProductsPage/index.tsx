import { useEffect } from "react";
import { InputSearch } from "../../components/InputSearch"
import { ProductsList } from "../../components/ProductsList"
import { StyledProductsPageContainer } from "./style"
import {api} from '../../services/api';
import {useNavigate} from 'react-router-dom';

export const ProductsPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('@TOKEN');
        const id = localStorage.getItem('@user');
        if(token){
            const getDatasUser = async () => {
                try {
                    const response = await api.get(`/users/${id}`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                } catch (erros) {
                    console.log(erros);
                    localStorage.clear();
                    navigate('/');
                }
            }
            getDatasUser();
        }else{
            navigate('/');
        }
    }, []);

    return (
        <StyledProductsPageContainer>
            <h1>Produtos</h1>

            <InputSearch placeholder="Digite o nome do produto"/>

            <ProductsList />

            
        </StyledProductsPageContainer>

    )
}