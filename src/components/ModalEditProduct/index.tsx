import { useForm } from 'react-hook-form';
import { IModalEditProductProps, IProduct } from '../../provides/TypesProduct';
import { InputProduct } from '../InputProduct';
import { StyledModalContainer } from './style';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { ProductsContext } from '../../provides/ProductsContext';
import {AiOutlineClose} from 'react-icons/ai'

const schema = yup.object({
    name: yup.string(),
    image: yup.string().url('A URL deve ser válida'),
    price: yup.string(),
    category: yup.string(),
    qtd: yup.string(),
})

export const ModalEditProduct = () => {

    const {selectedProduct, setOpenEditProductModal, editProduct} = useContext(ProductsContext)

    const { register, handleSubmit, formState: {errors} } = useForm<IProduct>({
        resolver: yupResolver(schema)
    })

    const submitFunction = (data: IProduct) => {
        editProduct(selectedProduct, data);
    }


    return (
        <StyledModalContainer>
            <form className='box' onSubmit={handleSubmit(submitFunction)}>
                <button className='closeBtn' onClick={()=> setOpenEditProductModal(false)}><AiOutlineClose /></button>
                <h2>Editar produto</h2>
                <InputProduct label='Nome' placeholder='Digite o nome'  defaultValue= {selectedProduct.name} inputKey='name' register={register}/>
                <small>{errors.name?.message}</small>
                <InputProduct label='Imagem' placeholder='Digite o URL'  defaultValue= {selectedProduct.image} inputKey='image'  register={register}/>
                <small>{errors.image?.message}</small>
                <InputProduct label='Preço' placeholder='Digite o preço'  defaultValue= {selectedProduct.price} inputKey='price'  register={register}/>
                <small>{errors.price?.message}</small>
                <InputProduct label='Categoria' placeholder='Digite a categoria'  defaultValue= {selectedProduct.category} inputKey='category'  register={register}/>
                <small>{errors.category?.message}</small>
                <InputProduct label='Quantidade' placeholder='Digite a quantidade'  defaultValue= {selectedProduct.qtd} inputKey='qtd'  register={register}/>
                <small>{errors.qtd?.message}</small>

                <button type='submit'>Salvar Dados</button>



            </form>
        </StyledModalContainer>
        
    )
}