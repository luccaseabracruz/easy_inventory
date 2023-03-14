import { StyledModalContainer } from './style';
import { useContext } from 'react';
import { ProductsContext } from '../../provides/ProductsContext';
import {AiOutlineClose} from 'react-icons/ai'


export const ModalRemoveProduct = () => {

    const {selectedProduct, setOpenRemoveProductModal, deleteProduct} = useContext(ProductsContext);


    return (
        <StyledModalContainer>
            <div className="box">
                <button className='closeBtn' onClick={()=> setOpenRemoveProductModal(false)}><AiOutlineClose /></button>

                <h2>Tem certeza que deseja excluir {selectedProduct.name}?</h2>
                <span>Isso fará com que todos os itens com o mesmo nome sejam excluídos..</span>

                <div className="buttonsContainer">
                    <button className='cancelBtn' onClick={() => setOpenRemoveProductModal(false)}>Cancelar</button>
                    <button className='removeBtn' onClick={() => deleteProduct()}>Excluir</button>
                </div>
            </div>
        </StyledModalContainer>
        
    )
}