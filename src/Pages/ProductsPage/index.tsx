import { useEffect, useContext } from "react";
import { InputSearch } from "../../components/InputSearch"
import { ModalEditProduct } from "../../components/ModalEditProduct"
import { ModalRemoveProduct } from "../../components/ModalRemoveProduct"
import { ProductsList } from "../../components/ProductsList"
import { ProductsContext } from "../../provides/ProductsContext"
import { StyledProductsPageContainer } from "./style"
import {api} from '../../services/api';
import {useNavigate} from 'react-router-dom';
import { AiOutlinePlus } from "react-icons/ai";
import { ModalCreateProduct } from "../../components/ModalCreateProduct";
import { ModalProduct } from "../../components/ModalProduct";


export const ProductsPage = () => {

    const {
        openEditProductModal,
        openRemoveProductModal,
        setOpenCreateProductModal,
        openCreateProductModal,
        openProductModal
    } = useContext(ProductsContext);

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

            <button className="createBtn" onClick={()=> setOpenCreateProductModal(true)}><AiOutlinePlus />Criar Produto</button>

            <ProductsList />

            {openProductModal ? <ModalProduct /> : null}
            {openEditProductModal ? <ModalEditProduct /> : null}
            {openRemoveProductModal ? <ModalRemoveProduct /> : null}
            {openCreateProductModal ? <ModalCreateProduct /> : null}

            
        </StyledProductsPageContainer>

    )
}