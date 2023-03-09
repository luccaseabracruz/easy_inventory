import { StyledProductCard } from "./style";
import cellphone from '../../assets/product-cellphone.svg';
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';
import {FaTrash} from 'react-icons/fa';
import { IProduct } from "../../provides/TypesProduct";
import { useContext } from "react";
import { ProductsContext } from "../../provides/ProductsContext";

interface IProductCardProps{
    product: IProduct;
}

export const ProductCard = ({product}: IProductCardProps) => {

    const {addProduct, subtractProduct} = useContext(ProductsContext)
    return (
        <StyledProductCard>
            <div className="content">

                <img src={product.image} alt={`Foto de ${product.name}`}/>

                <div className="info">
                    <p>{product.name}</p>
                    <small>{product.category}</small>
                    <button> <FaTrash /> Excluir</button>
                </div>

            </div>

            <div className="buttonsAndPrice">
                <div className="quatityButtons">
                    <button onClick={()=>subtractProduct(product)}> <AiOutlineMinus /> </button>
                    <small>{product.qtd}</small>
                    <button onClick={()=>addProduct(product)}> <AiOutlinePlus /> </button>
                </div>

                <p>{`R$${product.price.split('.').join(',')}`}</p>
            </div>


        </StyledProductCard>
    )
}