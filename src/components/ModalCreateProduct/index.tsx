import { useForm } from 'react-hook-form';
import { IProduct } from '../../provides/TypesProduct';
import { InputProduct } from '../InputProduct';
import { StyledModalContainer } from './style';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { ProductsContext } from '../../provides/ProductsContext';
import {AiOutlineClose} from 'react-icons/ai'

const schema = yup.object({
    name: yup.string().required('Nome obrigatório'),
    image: yup.string().url('A URL deve ser válida').required('URL obrigatória'),
    price: yup.string().required('Preço obrigatório'),
    category: yup.string().required('Categoria obrigatória'),
    qtd: yup.string().required('Quantidade obrigatória'),
    description: yup.string().required('Descrição obrigatória'),
})

export const ModalCreateProduct = () => {

    const { setOpenCreateProductModal, createProduct } = useContext(ProductsContext)

    const { register, handleSubmit, formState: {errors} } = useForm<IProduct>({
        resolver: yupResolver(schema)
    })

    const submitFunction = (data: IProduct) => {
        createProduct(data);
    }


    return (
        <StyledModalContainer>
            <form className='box' onSubmit={handleSubmit(submitFunction)}>
                <button className='closeBtn' onClick={()=> setOpenCreateProductModal(false)}><AiOutlineClose /></button>
                <h2>Criar produto</h2>
                <InputProduct label='Nome' placeholder='Digite o nome'  inputKey='name' register={register}/>
                <small>{errors.name?.message}</small>
                <InputProduct label='Imagem' placeholder='Digite o URL' inputKey='image'  register={register}/>
                <small>{errors.image?.message}</small>
                <InputProduct label='Preço' placeholder='Digite o preço' inputKey='price'  register={register}/>
                <small>{errors.price?.message}</small>
                <InputProduct label='Categoria' placeholder='Digite a categoria' inputKey='category'  register={register}/>
                <small>{errors.category?.message}</small>
                <InputProduct label='Quantidade' placeholder='Digite a quantidade' inputKey='qtd'  register={register}/>
                <small>{errors.qtd?.message}</small>
                <InputProduct label='Descrição' placeholder='Digite uma descrição' inputKey='description'  register={register}/>
                <small>{errors.description?.message}</small>

                <InputProduct label='Vendidos' placeholder='Digite a quantidade vendidas' inputKey='sales' vendidos={0}  register={register}/>

                <button className='submitBtn' type='submit'>Salvar Dados</button>



            </form>
        </StyledModalContainer>
        
    )
}