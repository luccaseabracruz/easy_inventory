import { StyledModalContainer } from './style';
import { useContext } from 'react';
import { ProductsContext } from '../../provides/ProductsContext';
import {AiOutlineClose} from 'react-icons/ai';
import {FaTrash} from 'react-icons/fa';
import { AiTwotoneEdit } from 'react-icons/ai';




export const ModalProduct = () => {

    const { 
        selectedProduct,
        openRemoveProductModalFunction,
        openEditProductModalFunction,
        setOpenProductModal
    } = useContext(ProductsContext);

    return (
        <StyledModalContainer>
            <div className='box'>
                <button className='closeBtn' onClick={()=> setOpenProductModal(false)}><AiOutlineClose /></button>


                <div className="imageAndInfo">
                    <div className="imageContainer">
                        <img src={selectedProduct.image} alt={`Foto de ${selectedProduct.name}`} />
                    </div>
                    <div className="info">
                        <h2>{selectedProduct.name}</h2>
                        <p>{selectedProduct.category}</p>
                        <div className="buttonsContainer">
                            <button onClick={()=> openRemoveProductModalFunction()}> <FaTrash /> Excluir</button>
                            <button onClick={()=> openEditProductModalFunction()}> <AiTwotoneEdit /> Editar</button>
                        </div>
                        <p>R${selectedProduct.price}</p>
                    </div>
                </div>

                <div className='description'>
                    <p>{selectedProduct.description ? selectedProduct.description : null}</p>
                </div>
                



            </div>
        </StyledModalContainer>
        
    )
}