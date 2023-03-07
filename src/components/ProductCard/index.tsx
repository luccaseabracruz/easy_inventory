import { StyledProductCard } from "./style"
import cellphone from '../../assets/product-cellphone.svg'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import {FaTrash} from 'react-icons/fa'

export const ProductCard = () => {

    return (
        <StyledProductCard>
            <div className="content">

                <img src={cellphone} alt="Foto de um celular" />

                <div className="info">
                    <p>Nome do produto</p>
                    <small>Categoria</small>
                    <button> <FaTrash /> Excluir</button>
                </div>

            </div>

            <div className="buttonsAndPrice">
                <div className="quatityButtons">
                    <button> <AiOutlineMinus /> </button>
                    <small>1</small>
                    <button> <AiOutlinePlus /> </button>
                </div>

                <p>R$2100,00</p>
            </div>


        </StyledProductCard>
    )
}